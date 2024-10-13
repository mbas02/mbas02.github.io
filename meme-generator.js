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
    var img = document.getElementById('maslowImage');

    // Ensure the canvas is visible when generating the meme
    canvas.style.display = 'block';

    // Function to draw the meme on the canvas
    function drawOnCanvas() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.font = 'bold 22px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';

        // Adjusted y-coordinates to properly align text in each section

        // Self-actualization (top layer)
        ctx.fillText(textSelfActualization, canvas.width / 2, 50);

        // Esteem needs (second layer)
        ctx.fillText(textEsteem, canvas.width / 2, 120);

        // Love and belonging needs (third layer)
        ctx.fillText(textLoveBelonging, canvas.width / 2, 195);

        // Safety needs (fourth layer)
        ctx.fillText(textSafety, canvas.width / 2, 270);

        // Physiological needs (bottom layer)
        ctx.fillText(textPhysiological, canvas.width / 2, 360);
    }

    // Draw the meme
    if (img.complete) {
        drawOnCanvas();
    } else {
        img.onload = drawOnCanvas;
    }
}

