function preload(){

}
function setup() {
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() { 
    console.log('Yay the posenet has been activated and turned on("initialized")');
}

function take_snapshot() {
    save('filteredimage.png');
}

function draw() {
    image(video, 0, 0, 300, 300);
}
function gotPoses() {
    if(results.length > 0 ) {
        console.log("here are the results");
        console.log(results);
        console.log("nose x is equivalent to "+ results[0].pose.nose.x);
        console.log("nose y is equivalent to "+ results[0].pose.nose.y);
    }
}