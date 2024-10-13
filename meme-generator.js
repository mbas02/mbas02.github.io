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

    // Draw the meme on the canvas when the image has fully loaded
    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    };

    // Draw image immediately if already loaded
    if (img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
}
