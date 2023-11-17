function setup(){
    let myCanvas = createCanvas(1000, 1000);
    myCanvas.parent('myContainer');
    background(55);
    noStroke();
    strokeWeight(5);
}
    
function draw(){
    if (count > 0){
     fill(500, 200, 0);
     ellipse(500, 500, 500, 500);
 }
 if (count > 4){
    
    fill(255);
  ellipse(500, 520, 399, 399);
    
    
    fill(500, 200, 0);
  arc(500, 520, 400, 400, PI, TWO_PI);
  
}

if (count > 9){
    fill(255);
    arc(400, 400, 80, 80, PI , TWO_PI);
    fill(500, 200, 0)
    arc(400, 400, 70, 70, PI , TWO_PI);
}
if (count > 14){
    fill(255);
    arc(600, 400, 80, 80, PI , TWO_PI);
    fill(500, 200, 0)   
    arc(600, 400, 70, 70, PI , TWO_PI);
}
if (count > 19){
    fill(0);
    rect(400, 80, 200, 200);
    rect(325, 250, 350, 50);
}
if (count > 24){
    fill(0);
    rect(350, 450, 300, 50);
}


}

var count = 0;
           var button = document.getElementById("myButton");
           var countDisplay = document.getElementById("count");
           button.addEventListener("click", function() {
              count++;
              countDisplay.innerHTML = count;
           });


    
