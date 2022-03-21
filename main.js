song1="";
song2="";

leftWristx=0;
leftWristy=0;

rightWristx=0;
rightWristy=0;

scoreRight=0;
scoreLeft=0;

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
     fill("#FF0000")
    if(scoreRight > 0.2){
        song2.stop();
        song1.play();

        circle(rightWristx,rightWristy,20);
    document.getElementById("songName").innerHTML= "SONG 1"
    }
    if(scoreLeft > 0.2){
        song2.play();
        song1.stop();

        circle(leftWristx,leftWristy,20);
        document.getElementById("songName").innerHTML= "SONG 2"

    }
}

function model_loaded(){
    console.log("Model is Loaded");
}

function got_poses(results){
    if(results.length>0){
    
    console.log(results);
    leftWristx= results[0].pose.leftWrist.x;
    leftWristy= results[0].pose.leftWrist.y;
    scoreLeft= results[0].pose.keypoints[9].score;
    scoreRight= results[0].pose.keypoints[10].score;  
    console.log("SL" + scoreLeft);
    console.log("SR" + scoreRight);  
    rightWristx= results[0].pose.rightWrist.x;
    rightWristy= results[0].pose.rightWrist.y;
    console.log("leftWristx = "+ leftWristx+"leftWrisrty"+leftWristy);
    console.log("rightWristx = "+ rightWristx+"rightWrisrty"+rightWristy)
    }
    }



