function back()
{
    window.location = "index.html";
}

img="";
status="";

function preload()
{
    img = loadImage('bottles.jpeg');
    
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("bottle",45,75);
    noFill();
    stroke("#FF0000");
    rect(10,60,250,350);

    fill("#FF0000");
    text("bottle",320,85);
    noFill();
    stroke("#FF0000");
    rect(300,60,270,350);
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img , gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);

}