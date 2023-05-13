difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}
 function draw() {
    background("#969A97");
    document.getElementById("font_size").innerHTML="font size of the text will be" + difference +"px";
 }

  function gotPoses (results) {
  if (results.length > 0){
    console.log(results);
  }
 }
 
