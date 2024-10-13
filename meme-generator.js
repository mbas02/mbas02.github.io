function drawMeme() {
    var canvas = document.getElementById('memeCanvas');
    var ctx = canvas.getContext('2d');

    // Get the values from the input fields
    var textSelfActualization = document.getElementById('textSelfActualization').value.toUpperCase();
    var textEsteem = document.getElementById('textEsteem').value.toUpperCase();
    var textLoveBelonging = document.getElementById('textLoveBelonging').value.toUpperCase();
    var textSafety = document.getElementById('textSafety').value.toUpperCase();
    var textPhysiological = document.getElementById('textPhysiological').value.toUpperCase();

    // Get the image element that is already loaded
    var img = document.getElementById('preloadedImage');

    // Ensure the canvas is visible and the preloaded image is hidden
    canvas.style.display = 'block';
    img.style.display = 'none';

    // Function to draw the meme on the canvas
    function drawOnCanvas() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.font = 'bold 22px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';

        // Set coordinates and fill text in each section of the pyramid

        // Self-actualization (top layer)
        ctx.fillText(textSelfActualization, canvas.width / 2, 190);

        // Esteem needs (second layer)
        ctx.fillText(textEsteem, canvas.width / 2, 250);

        // Love and belonging needs (third layer)
        ctx.fillText(textLoveBelonging, canvas.width / 2, 300);

        // Safety needs (fourth layer)
        ctx.fillText(textSafety, canvas.width / 2, 368);

        // Physiological needs (bottom layer)
        ctx.fillText(textPhysiological, canvas.width / 2, 440);
    }

    // Draw the meme
    if (img.complete) {
        drawOnCanvas();
    } else {
        img.onload = drawOnCanvas;
    }
}
