difference = 0;
rightWristX = 0;
leftWristX = 0;



function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(928, 550);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}

function modeLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw()
{
    background('#4FA1FF');

    document.getElementById("text-size").innerHTML = difference;
    textSize(difference);
    fill('#ccffff');
    text('Karthik', 0, 500);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}