const {Canvas} = require('skia-canvas');
const fs = require('fs');


function generateImage(datasetName, fileName) {
    const width = 1200;
    const height = 630;

// Create the canvas
    const canvas = new Canvas(width, height);
    const ctx = canvas.getContext('2d');

// ::::::::::::: BACKGROUND :::::::::::::

// Fill the entire canvas with the dark background color
    ctx.fillStyle = '#1F293C';
    ctx.fillRect(0, 0, width, height);

// Draw the top rectangular band
    ctx.fillStyle = '#44403C';
    ctx.fillRect(0, 0, width, 100);

// ::::::::::::: CIRCLES :::::::::::::

// Draw the red circle
    ctx.fillStyle = '#B91C1C';
    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, Math.PI * 2);
    ctx.fill();

// Draw the yellow circle
    ctx.fillStyle = '#CA8907';
    ctx.beginPath();
    ctx.arc(120, 50, 20, 0, Math.PI * 2);
    ctx.fill();

// Draw the green circle
    ctx.fillStyle = '#166534';
    ctx.beginPath();
    ctx.arc(190, 50, 20, 0, Math.PI * 2);
    ctx.fill();

// ::::::::::::: TITLE TEXT :::::::::::::

// Set the font for the title text
    ctx.font = 'bold 96px sans-serif';
    ctx.fillStyle = '#E5E7EB';
    ctx.fillStyle = '#E5E7EB';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`✅ ${datasetName}`, width / 2, height / 2);

// ::::::::::::: DECORATIVE GREEN BAND :::::::::::::

// Draw the repeated "DATASET" text
    ctx.font = 'bold 56px sans-serif';
    ctx.fillStyle = '#166534';
    ctx.fillStyle = '#00DCDC';
    ctx.fillText('a dataset.sh tutorial', 860, 500);

// Save the canvas as an image
    const out = `./static/showcases/${fileName}.png`;
    canvas.saveAs(out).then(() => {
        console.log('Canvas rendering saved as skia-canvas-rendering.png');
    });
}


generateImage('hello/world', 'hello-world')
generateImage('ml/fashion-mnist', 'fashion-mnist')
generateImage('science/acl-datasets', 'acl-datasets')

generateImage('Data Visualization', 'data-visualization')
generateImage('Build ML Models', 'ml-models')
generateImage('Animated charts', 'animated-data')

// Save the image to a file
