function back()
{
    window.location = "index.html";
}

img="";
status="";

function preload()
{
    img = loadImage('Television.jpeg');
    
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
    text("AC",180,120);
    noFill();
    stroke("#FF0000");
    rect(140,70,280,120);

    fill("#FF0000");
    text("TV",200,220);
    noFill();
    stroke("#FF0000");
    rect(190,200,260,150);
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