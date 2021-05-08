rightWristX="";
rightWristY="";
rightWrist="0"
status="";

function setup() {
	  canvas = createCanvas(700,600);
    canvas.parent('canvas1');
    video = createCapture(VIDEO);
    video.size(700,600);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload(){}
function gotPoses(results)
{
  if(results.length > 0)
  {
	  console.log(results);
    rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
  }
}

function modelLoaded(){
    console.log("model is Loaded!");
}

function draw(){
  if(status=="start"){

    if(rightWrist>0.2){
      fill("#8B4513");
      stroke("#D2691E");
      circle(rightWristX,rightWristY,30);
    }
    
  }
}

function restart(){}
function startGame(){
  status="start";
  document.getElementById("status").innerHTML="Game is Loaded";
}