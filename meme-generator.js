document.getElementById('modeSelector').addEventListener('change', function() {
    var mode = this.value;
    if (mode === 'pyramid') {
        document.getElementById('pyramidInputs').style.display = 'block';
        document.getElementById('singleInput').style.display = 'none';
    } else if (mode === 'singleText') {
        document.getElementById('pyramidInputs').style.display = 'none';
        document.getElementById('singleInput').style.display = 'block';
    }
});

function drawMeme() {
    var canvas = document.getElementById('memeCanvas');
    var ctx = canvas.getContext('2d');
    var mode = document.getElementById('modeSelector').value;
    var img = document.getElementById('preloadedImage');

    // Hide preloaded image and show canvas
    canvas.style.display = 'block';
    img.style.display = 'none';

    // Ensure that the image is fully loaded before drawing
    if (img.complete) {
        drawImageAndOverlay(ctx, img, mode);
    } else {
        img.onload = function() {
            drawImageAndOverlay(ctx, img, mode);
        };
    }
}

function drawImageAndOverlay(ctx, img, mode) {
    // Draw the original pyramid image on the canvas
    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);

    if (mode === 'pyramid') {
        drawPyramidText(ctx);
    } else if (mode === 'singleText') {
        drawOrangeOverlay(ctx);
        drawSingleNeedText(ctx);
    }
}

function drawPyramidText(ctx) {
    var textSelfActualization = document.getElementById('textSelfActualization').value.toUpperCase();
    var textEsteem = document.getElementById('textEsteem').value.toUpperCase();
    var textLoveBelonging = document.getElementById('textLoveBelonging').value.toUpperCase();
    var textSafety = document.getElementById('textSafety').value.toUpperCase();
    var textPhysiological = document.getElementById('textPhysiological').value.toUpperCase();

    ctx.font = 'bold 22px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';

    wrapText(ctx, textSelfActualization, ctx.canvas.width / 2, 190, 280, 22);
    wrapText(ctx, textEsteem, ctx.canvas.width / 2, 250, 280, 22);
    wrapText(ctx, textLoveBelonging, ctx.canvas.width / 2, 308, 280, 22);
    wrapText(ctx, textSafety, ctx.canvas.width / 2, 368, 280, 22);
    wrapText(ctx, textPhysiological, ctx.canvas.width / 2, 430, 280, 22);
}

function drawOrangeOverlay(ctx) {
    // Set a darker orange color with slightly less transparency
    ctx.fillStyle = 'rgba(255, 140, 0, 0.7)'; // Darker orange with a little less transparency

    // Adjust the coordinates to align perfectly with the black X markings
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width / 2, 20); // Top of the triangle, aligned with top X
    ctx.lineTo(10, ctx.canvas.height - 10); // Bottom left, aligned with left X marker
    ctx.lineTo(ctx.canvas.width - 10, ctx.canvas.height - 10); // Bottom right, aligned with right X marker
    ctx.closePath();
    ctx.fill();
}

function drawSingleNeedText(ctx) {
    var singleText = document.getElementById('singleText').value.toUpperCase();

    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';

    // Dynamically wrap the single text for the orange overlay
    wrapText(ctx, singleText, ctx.canvas.width / 2, ctx.canvas.height / 2, 550, 60);
}

/**
 * Function to wrap text onto multiple lines and auto-reduce font size if necessary
 * 
 * @param {CanvasRenderingContext2D} ctx - The canvas context
 * @param {string} text - The text to wrap
 * @param {number} x - The x coordinate where the text should be centered
 * @param {number} y - The y coordinate where the text starts
 * @param {number} maxWidth - The maximum width of the text area
 * @param {number} lineHeight - The line height for the text
 */
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    var fontSize = parseInt(ctx.font.match(/\d+/), 10); // Get current font size

    // Reduce font size until the text fits within the specified maxWidth
    while (true) {
        var testLine = '';
        var lines = [];
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var testWidth = ctx.measureText(testLine).width;

            if (testWidth > maxWidth && n > 0) {
                lines.push(line);
                line = words[n] + ' ';
            } else {
                line = testLine;
            }
        }
        lines.push(line);

        if (lines.length * lineHeight <= ctx.canvas.height) {
            break; // If it fits, stop reducing the font size
        }

        // If not, reduce the font size and try again
        fontSize -= 2;
        ctx.font = `bold ${fontSize}px Arial`;
        line = ''; // Reset line
    }

    // Now render the text
    for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, y + (i * lineHeight));
    }
}
