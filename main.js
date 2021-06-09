function preload(){
}
function setup(){
    canvas = createCanvas(550, 400);
    canvas.position(50, 300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function draw(){
image(video, 0, 0, 550, 400);
tint(tint_color);

}

function take_snapshot(){
    save('myImage.png');
}

function apply_filter(){
tint_color = document.getElementById("filter_color").value;
}