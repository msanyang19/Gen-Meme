let topTextInput, bottomTextInput, imageInput, generateBtn, jokeBtn, canvas, ctx;

function generateMeme (img, topText, bottomText) {
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAline = 'center'

    fontSize = canvas.width /15;
    ctx.font = fontSize + 'px impact';
    ctx.lineWidth = fontSize /15

    //Top text output
    ctx.textBaseLine = 'top';
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.storkeText(t, canvas.width / 2, i * fontSize, canvas.width);

    });

    //bottom text output
    ctx.textBaseLine = 'bottom';
    bottomText.split('\n').reverse().forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.storkeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });

}

function init () {
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    generateBtn = document.getElementById('generate-btn');
    jokeBtn = document.getElementById('joke-btn');
    imageInput = document.getElementById('image-input');
    canvas = document.getElementById('meme-canvas');

    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    generateBtn.addEventListener('click', function () {
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, topTextInput.value, bottomTextInput.value);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });

}
init();
