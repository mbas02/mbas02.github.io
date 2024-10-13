document.getElementById('modeSelector').addEventListener('change', function() {
    var mode = this.value;
    if (mode === 'pyramid') {
        document.getElementById('pyramidInputs').style.display = 'block';
        document.getElementById('singleInput').style.display = 'none';
    } else if (mode === 'singleColor') {
        document.getElementById('pyramidInputs').style.display = 'none';
        document.getElementById('singleInput').style.display = 'block';
    }
});

function drawMeme() {
    var canvas = document.getElementById('memeCanvas');
    var ctx = canvas.getContext('2d');
    var mode = document.getElementById('modeSelector').value;

    // Get the image element that is already loaded
    var img = document.getElementById('preloadedImage');

    // Hide preloaded image and show canvas
    canvas.style.display = 'block';
    img.style.display = 'none';

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (mode === 'pyramid') {
        // Get the values from the pyramid input fields
        var textSelfActualization = document.getElementById('textSelfActualization').value.toUpperCase();
        var textEsteem = document.getElementById('textEsteem').value.toUpperCase();
        var textLoveBelonging = document.getElementById('textLoveBelonging').value.toUpperCase();
        var textSafety = document.getElementById('textSafety').value.toUpperCase();
        var textPhysiological = document.getElementById('textPhysiological').value.toUpperCase();

        // Draw the pyramid image on the canvas
        if (img.complete) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        } else {
            img.onload = function() {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        }

        ctx.font = 'bold 22px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';

        // Set coordinates and fill text in each section of the pyramid
        ctx.fillText(textSelfActualization, canvas.width / 2, 190); // Adjusted y-coordinate
        ctx.fillText(textEsteem, canvas.width / 2, 250); // Adjusted y-coordinate
        ctx.fillText(textLoveBelonging, canvas.width / 2, 308); // Adjusted y-coordinate
        ctx.fillText(textSafety, canvas.width / 2, 368); // Adjusted y-coordinate
        ctx.fillText(textPhysiological, canvas.width / 2, 430); // Adjusted y-coordinate

    } else if (mode === 'singleColor') {
        // Get the value from the single text input
        var singleText = document.getElementById('singleText').value.toUpperCase();

        // Fill the entire triangle area with a single color (grey)
        ctx.fillStyle = 'grey';
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 20); // Top of the triangle
        ctx.lineTo(20, canvas.height - 20); // Bottom left
        ctx.lineTo(canvas.width - 20, canvas.height - 20); // Bottom right
        ctx.closePath();
        ctx.fill();

        // Draw the single input text in the center of the triangle
        ctx.font = 'bold 40px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        ctx.fillText(singleText, canvas.width / 2, canvas.height / 2);

        // Draw side labels
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'left';
        ctx.fillStyle = 'black';

        // Self-fulfillment needs (top)
        ctx.fillText('Self-fulfillment needs', canvas.width - 180, 50);

        // Psychological needs (middle)
        ctx.fillText('Psychological needs', canvas.width - 180, 170);

        // Basic needs (bottom)
        ctx.fillText('Basic needs', canvas.width - 180, 340);
    }
}

