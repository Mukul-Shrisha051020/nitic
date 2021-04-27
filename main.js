left_wrist_x = 0;

right_wrist_x = 0;

difference = 0;
nose_x = 0;
nose_y = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);
    text = text("MUKUL", nose_x, nose_y, );



    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on('pose', gotposes);


    left_wrist_x = results[0].pose.leftWrist.x;
    right_wrist_x = results[0].pose.rightWrist.x;
    difference = floor(left_wrist_x - right_wrist_x);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y
    console.log("nose y = " + nose_y + ",x = " + nose_y);
    console.log("Left Wrist = " + left_wrist_x + ",Right Wrist = " + right_wrist_x + "and Diference = " + difference);
}

function model_loaded() {
    console.log("Model is Initialized");
}

function draw() {
    background(2, 50, 242);

    document.getElementById("side").innerHTML = "The size of the text is" + difference + "px";
    text("MUKUL", nose_x, nose_y, );
    text.size(difference)
    fill(100, 117, 53)

}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y
        console.log("nose y = " + nose_y + ",x = " + nose_y);
        console.log("Left Wrist = " + left_wrist_x + ",Right Wrist = " + right_wrist_x + "and Diference = " + difference);
    }
}