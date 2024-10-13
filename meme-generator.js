window.onload = function() {
    // Get references to the HTML elements
    var canvas = document.getElementById('memeCanvas');
    var ctx = canvas.getContext('2d');
    var img = document.getElementById('maslowImage');

    // Draw the initial image on the canvas when the page loads
    img.onload = function() {
        drawInitialImage();
    }

    // Function to draw the initial image
    function drawInitialImage() {
        // Draw the image on the canvas as soon as it is loaded
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    // If the image is already loaded (due to caching), draw it immediately
    if (img.complete) {
        drawInitialImage();
    }
};

// Function to draw the meme with the user-provided text
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
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';

        // Set coordinates and fill text in each section of the pyramid

        // Self-actualization (top layer)
        ctx.fillText(textSelfActualization, canvas.width / 2, 60);

        // Esteem needs (second layer)
        ctx.fillText(textEsteem, canvas.width / 2, 130);

        // Love and belonging needs (third layer)
        ctx.fillText(textLoveBelonging, canvas.width / 2, 210);

        // Safety needs (fourth layer)
        ctx.fillText(textSafety, canvas.width / 2, 280);

        // Physiological needs (bottom layer)
        ctx.fillText(textPhysiological, canvas.width / 2, 350);
    }

    // Draw the meme
    if (img.complete) {
        drawOnCanvas();
    } else {
        img.onload = drawOnCanvas;
    }
}
