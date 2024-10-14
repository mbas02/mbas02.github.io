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

    ctx.fillText(textSelfActualization, ctx.canvas.width / 2, 190);
    ctx.fillText(textEsteem, ctx.canvas.width / 2, 250);
    ctx.fillText(textLoveBelonging, ctx.canvas.width / 2, 308);
    ctx.fillText(textSafety, ctx.canvas.width / 2, 368);
    ctx.fillText(textPhysiological, ctx.canvas.width / 2, 430);
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
    ctx.fillText(singleText, ctx.canvas.width / 2, ctx.canvas.height / 2);
}
