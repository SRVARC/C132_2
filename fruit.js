function back()
{
    window.location = "index.html";
}

img="";
status="";

function preload()
{
    img = loadImage('Fruit Basket.jpg');
    
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
    text("Apples",150,115);
    noFill();
    stroke("#FF0000");
    rect(135,100,270,150);

    fill("#FF0000");
    text("Grapes",450,90);
    noFill();
    stroke("#FF0000");
    rect(420,50,210,350);
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