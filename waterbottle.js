img="";
status="";
objects=[];
function preload(){
    img=loadImage("water bottle.webp");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
}
function modelloaded(){
    console.log("model has been initialated");
    status=true;
    objectDetector.detect(img,gotresults);
    document.getElementById("status").innerHTML="status:detecting objects";
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        
    }
    

    
}
