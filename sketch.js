function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background("#00f59b");
  
  let lightX = mouseX - width / 2;
  let lightY = mouseY - height / 2;
  
  // red spotlight
  // axis located at lightX, lightY, 500
  // axis direction of light: 0, 0, -1
  //spotLight(255, 45, 0, lightX, lightY, 500, 100,0,-1);
  
  rotateX(60)
  
  //ambientLight(100, 255/100, 230)
  fill(0,0,0,30)// posso usar fill ou noFill - o nofill fica apenas o contorno, o resultado fica interessante 
  //noStroke()
  strokeWeight(40)
  
  for (var i = 0; i < 50; i ++){
    var a = map(sin(frameCount /2), -50, 50, 90, 10)
    var b = map(i, 0, 10, 50, 90)
    var c = map(cos(frameCount), 0, 0, 0, 0)
    
    stroke( a,b,c)
    //rotateX(PI / 3);
    //rotateY(PI / 4)
    //rotateZ(PI / 1)
    rotate(frameCount / 25)
    
    beginShape()
    for (var j = 0; j < 360; j += 60) { // angulos
      var rad = i * 2.5//tamanho
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 2 + i * 5) *  150 //TAMANHO altura
      rotateY(PI / 4);
      vertex(x, y, z)
    }
  endShape(CLOSE)
  }




  
}