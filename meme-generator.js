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

    canvas.style.display = 'block';
    img.style.display = 'none';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (img.complete) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    } else {
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }

    if (mode === 'pyramid') {
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

    } else if (mode === 'singleText') {
        var singleText = document.getElementById('singleText').value.toUpperCase();

        ctx.font = 'bold 60px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        ctx.fillText(singleText, canvas.width / 2, canvas.height / 2);

        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'left';
        ctx.fillStyle = 'black';

        ctx.fillText('Self-fulfillment needs', canvas.width - 150, 50);
        ctx.fillText('Psychological needs', canvas.width - 220, 170);
        ctx.fillText('Basic needs', canvas.width - 250, 340);
    }
}
