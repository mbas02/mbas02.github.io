function drawMeme() {
    var canvas = document.getElementById('memeCanvas');
    var ctx = canvas.getContext('2d');
    var topText = document.getElementById('topText').value.toUpperCase();
    var bottomText = document.getElementById('bottomText').value.toUpperCase();

    // Load and draw image
    var img = new Image();
    img.src = 'https://i.pinimg.com/originals/4d/50/02/4d50024568ad3c75674b4af2a8ca3698.png'; // Updated image source
    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';

        // Apply text
        ctx.fillText(topText, canvas.width / 2, 40); // Adjust y-coordinate if necessary
        ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20); // Adjust y-coordinate if necessary
    };
}
