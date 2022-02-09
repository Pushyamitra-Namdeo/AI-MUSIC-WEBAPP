song1="";
song2="";

leftWristx=0;
leftWristy=0;

rightWristx=0;
rightWristy=0;

function preload(){
song1= loadSound("music.mp3");
song2= loadSound("music2.mp3");

}

function setup(){
canvas= createCanvas(600,500);
canvas.center();
video= createCapture(VIDEO);
video.hide();

posenet= ml5.poseNet(video,model_loaded);
posenet.on('pose', got_poses);
}

function draw(){
    image(video,0,0,600,500);
}

function model_loaded(){
    console.log("Model is Loaded");
}

function got_poses(results){
    if(results.length>0){
    
    console.log(results);
    leftWristx= results[0].pose.leftWrist.x;
    leftWristy= results[0].pose.leftWrist.y;
    
    rightWristx= results[0].pose.rightWrist.x;
    rightWristy= results[0].pose.rightWrist.y;
    console.log("leftWristx = "+ leftWristx+"leftWrisrty"+leftWristy);
    console.log("rightWristx = "+ rightWristx+"rightWrisrty"+rightWristy)
    }
    }



