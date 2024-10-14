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
    ctx.fillStyle = 'rgba(255, 140, 0, 0.95)'; // Darker orange with a little less transparency

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

    // Start with a large font size
    var fontSize = 60;

    // Adjust the font size based on text length (reduce font size if text is longer than 19 characters)
    if (singleText.length > 19) {
        fontSize = Math.max(30, 60 - (singleText.length - 19) * 2); // Reduce font size based on extra characters
    }

    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';

    // Check if the text fits the canvas width, if not wrap it
    wrapText(ctx, singleText, ctx.canvas.width / 2, ctx.canvas.height / 2, 550, fontSize + 10);
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

    // Render the wrapped text lines
    for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, y + (i * lineHeight));
    }
}
