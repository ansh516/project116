noseX=0;
noseY=0;
function prload() {
    clown_nose = loadImage('https://i.postimg.cc/bJ8Pv2K6/5315032-red-nose-png-image-transparent-background-graphics-red-nose-png-800-800-preview.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.console('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}


function take_snapshot() {
    save('AnshpreetsFilterImage.png');
}