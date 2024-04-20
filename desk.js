function back()
{
    window.location = "index.html";
}

img="";
status="";

function preload()
{
    img = loadImage('Desk.jpg');
    
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
    text("book shelf",20,20);
    noFill();
    stroke("#FF0000");
    rect(20,10,250,90);

    fill("#FF0000");
    text("PC",150,115);
    noFill();
    stroke("#FF0000");
    rect(135,100,270,150);

    fill("#FF0000");
    text("Table",500,280);
    noFill();
    stroke("#FF0000");
    rect(500,250,110,150);
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