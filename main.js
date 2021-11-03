function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 550);

    canvas = createCanvas(550, 550);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(VIDEO, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('Pink');
}

function modeLoaded()
{
    console.log('Posenet is instailized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}