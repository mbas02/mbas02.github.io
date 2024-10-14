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

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the pyramid image on the canvas first
    if (img.complete) {
        drawImageAndOverlay(ctx, img, mode);
    } else {
        img.onload = function() {
            drawImageAndOverlay(ctx, img, mode);
        };
    }
}

function drawImageAndOverlay(ctx, img, mode) {
    // Draw the original pyramid image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

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

    ctx.fillText(textSelfActualization, canvas.width / 2, 190);
    ctx.fillText(textEsteem, canvas.width / 2, 250);
    ctx.fillText(textLoveBelonging, canvas.width / 2, 308);
    ctx.fillText(textSafety, canvas.width / 2, 368);
    ctx.fillText(textPhysiological, canvas.width / 2, 430);
}

function drawOrangeOverlay(ctx) {
    ctx.fillStyle = 'rgba(255, 165, 0, 0.8)'; // Orange with some transparency
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 20); // Top of the triangle
    ctx.lineTo(20, canvas.height - 20); // Bottom left
    ctx.lineTo(canvas.width - 20, canvas.height - 20); // Bottom right
    ctx.closePath();
    ctx.fill();
}

function drawSingleNeedText(ctx) {
    var singleText = document.getElementById('singleText').value.toUpperCase();

    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    ctx.fillText(singleText, canvas.width / 2, canvas.height / 2);
}
