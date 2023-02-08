let spc,numIters,a,block,gape,sc;
let v = [],c = [];; 
let f = 1;
let f2 = 2;
let txt = [];
let num, num2,num3,num4,num5,num6,num7,num8,num9,num10;


//text count
let lineS;
let wordS = [];
let ChaPositionX, ChaPositionY;
let test_Iam = "I am ";

//the word you change
let test_str = test_Iam + "a really stupid girl.";
let txtForDraw = [];

//count the number of AbeginDrawLinecters
let counti=0, counta=0, countu=0, countp=0, countt=0;
let fontRegular, count;

let AbeginDrawLine,
    IbeginDrawLine,
    UbeginDrawLine,
    PbeginDrawLine,
    TbeginDrawLine;
let inkPattern1,inkPattern2,inkPattern3;

let Ai = 0,Ii = 0,Ui = 0,Pi = 0, Ti =0;

function preload() {
  fontRegular = loadFont("fzm-Old.Typewriter.ttf");
  waterSwirl = loadSound("water swirl.wav");
  waterSwirl2 = loadSound("water swirl2.wav");
  note1 = loadSound("note1.mp3");
  note2 = loadSound("note2.mp3");
  note3 = loadSound("note3.mp3");
  note4 = loadSound("note4.mp3");
  note5 = loadSound("note5.mp3");
  notecombined = loadSound("notecombined.mp3");
  sofalidida = loadSound("sofalidida.mp3")
  note6 = loadSound("wip2.mp3");
  note7 = loadSound("wip1.mp3");
  inkPattern1 = loadImage("ink pattern1.png");
  inkPattern2 = loadImage("ink pattern6.png");
  inkPattern3 = loadImage("ink pattern3.png");
  inkPattern4 = loadImage("ink pattern4.png");
  inkPattern5 = loadImage("ink pattern5.png");
  
}

function setup() {
  //*A4siz/*
  createCanvas(595, 842);
  //createCanvas(windowWidth, windowHeight);
  
  //*reset button*
  let button = createButton("reset sketch");
  button.mousePressed(resetSketch);
  resetSketch();
}
function resetSketch() {
  background(255);
  numIters = 20;
  spc = 595 / numIters;
  a = spc / 2;
  sc = 1;
  block = createGraphics(2 * a, 2 * a);
  block.clear();
  
  //ABCDE function
  //AbeginDrawLine = false;

  for (let x = 0; x < 6; x++) {
    v[x] = (x * (sqrt(3) * a)) / 4;
  }
  for (let y = 0; y < 6; y++) {
    c[y] = (y * (2 * a)) / 4;
  }

  //clear number of characters
  txtForDraw = [];

  
  lineS = 10;
  textFont(fontRegular);

  Ai = 0;
  Ii = 0;
  Ui = 0;
  Pi = 0;
  Ti =0;

  AbeginDrawLine = false;
  IbeginDrawLine = false;
  UbeginDrawLine = false;
  PbeginDrawLine = false;
  TbeginDrawLine = false;

  wordS = [
    0,
    12.6,
    22.23,
    38.9,
    50.4,
    63,
    75.6,
    88.2,
    100.8,
    113.4,
    126.0,
    138.6,
    151.2,
    163.8,
    176.4,
    189,
    201.6,
    214.2,
    226.8,
    239.4,
    252.0,
    264.6,
    277.2,
    302.4,
    315,
    327.6,
    352.8,
    365.4,
    378.0,
    390.6,
  ];

}


function draw() {
  //draw "i am"
  textSize(15);
  text("I am", width*0.5-150, 870);

  // draw stave
  for (let i = 0; i < numIters; i++) {
    for (let j = 0; j < numIters; j++) {
     
      //position of stave(same with the pattern in drawLine function)
      push();
      translate(width*0.5-595/2, 70);
      scale(sc,sc);
      push();
      gape = (sqrt(3) * a) / 2;
      translate(i * spc, j * sqrt(3) * a + j * gape);
      image(block, 0, 0);

      //drawALine(i + 1, j + 1);
      pop();
      pop();
    }

    count_occur(txtForDraw.toString());
    //print(txtForDraw.toString());
  }
  // draw one stave block;
  for (let k = 0; k < 5; k++) {
    block.stroke(0);
    block.strokeWeight(0.1);

    //fill(100,0,0);
    //strokeWeight(1);

    block.line(2,((k * sqrt(3)) / 4) * a + 1, spc - 2,((k * sqrt(3)) / 4) * a + 1);
    //console.log(2, spc - 2);
  }

  //每10帧画一次A 图案
  if (AbeginDrawLine) {
    num = int(random(19));
    num2 = int(random(19));
    //call drawAFunction, draw drawAFunction one by one   
    let Atime = int(random(3))*60;
    if (frameCount %  Atime == 0) {
      
      drawAFunction();
      Ai++;
    }
  }
 //每20帧画一次I 图案(是个圆)  
 let Itime = int(random(3))*30; 
 if (IbeginDrawLine) {
    if (frameCount %  Itime == 0) {
       num3 = int(random(19));
       num4 = int(random(19));
      drawIFunction();
      Ii++;
    }
  }
//每30帧画一次U 图案
if (UbeginDrawLine) {
    if (frameCount % 150 == 0) {
       
      drawUFunction();
      Ui++;
    }
  }
//每15帧画一次P 图案
if (PbeginDrawLine) {
    if (frameCount % 180 == 0) {
       
      drawPFunction();
      Pi++;
    }
  }
  
//每25帧画一次T 图案
if (TbeginDrawLine) {
    if (frameCount % 90 == 0) {
       
      drawTFunction();
      Ti++;
    }
  }
  
  
  
  if (Ai == counta) {
    AbeginDrawLine = false;
    Ai = 0;
  }
   if (Ii == counti) {
    IbeginDrawLine = false;
    Ii = 0;
  }
   if (Ui == countu) {
    UbeginDrawLine = false;
    Ui = 0;
  }
   if (Pi == countp) {
    PbeginDrawLine = false;
    Pi = 0;
  }
   if (Ti == countp) {
    TbeginDrawLine = false;
    Ti = 0;
  }
  // print(Ai);
  // print(AbeginDrawLine);
}

// write down "i am"+ "",下半部分
function writeDown(i) {
  fill(0);
  textSize(10);
  text(test_str[i], wordS[i] + random(0, 2), ChaPositionY * lineS);
  append(txtForDraw, test_str[i]);

  if (ChaPositionX == 0) {
    text("I am", random(0, 2), ChaPositionY * lineS);
  }
}

//call drawALine function( the line in each block)
function drawAFunction() {
  
  
  //position of parttern
  push();
  //scale size
  translate(width*0.5-595/2, 70);
  scale(sc,sc);

  push();
  gape = (sqrt(3) * a) / 2;
  translate(num * spc, num2 * sqrt(3) * a + num2 * gape);

  drawALine(num, num2);
  //AbeginDrawLine=false;

  //play music here
  note1.play();
  note3.play();
 

  pop();
  pop();

  print("noise" + int(noise(f) * 19));
}
function drawIFunction() {
 
  //position of parttern
  push();
  //scale size
  translate(width*0.5-595/2, 70);
  scale(sc,sc);

  push();
  gape = (sqrt(3) * a) / 2;
  translate(num3 * spc, num4 * sqrt(3) * a + num4 * gape);

  drawILine();
  //AbeginDrawLine=false;

  //play music here
  note2.play();
  note1.play();

  pop();
  pop();

  print("noise" + int(noise(f) * 19));
}
function drawUFunction() {
  num5 = int(random(19));
  num6 = int(random(19));
  //position of parttern
  push();
  //scale size
  translate(width*0.5-595/2, 70);
  scale(sc,sc);

  push();
  gape = (sqrt(3) * a) / 2;
  translate(num5 * spc, num6 * sqrt(3) * a + num6 * gape);

  drawULine();
  //AbeginDrawLine=false;

 //play music here
   note4.play();

 

  pop();
  pop();

  print("noise" + int(noise(f) * 19));
}
function drawPFunction() {
  num7 = int(random(19));
  num8 = int(random(19));
  //position of parttern
  push();
  //scale size
  translate(width*0.5-595/2, 70);
  scale(sc,sc);

  push();
  gape = (sqrt(3) * a) / 2;
  translate(num7 * spc, num8 * sqrt(3) * a + num8 * gape);

  drawPLine();
  //AbeginDrawLine=false;

  //play music here
  sofalidida.play();
 

  pop();
  pop();

  //print("noise" + int(noise(f) * 19));
}
function drawTFunction() {
  num9 = int(random(19));
  num10 = int(random(19));
  //position of parttern
  push();
  //scale size
  translate(width*0.5-595/2, 70);
  scale(sc,sc);

  push();
  gape = (sqrt(3) * a) / 2;
  translate(num9 * spc, num10 * sqrt(3) * a + num10 * gape);

  drawTLine();
  //AbeginDrawLine=false;

  //play music here
  note5.play();
  

  pop();
  pop();

  //print("noise" + int(noise(f) * 19));
}
//press 'a', the line in each block,this function is called in drawALine function
function drawALine(i, j) {
  //k = how many lines in one block
  for (let k = 0; k < 4; k++) {
   
    let l;
    push();
    strokeWeight(int(noise(k * j + 1, i) * 6));
    noFill();

    translate(c[int(noise(k * j, i + f) * 6)], v[int(noise(i + f, k * j) * 6)]);
    rotate(int(noise(k * j, i) * 6) * radians(60));
    strokeCap(SQUARE);

    l = int(noise(k * j, i) * 4) * (a / 2);

    line(0, 0, l + 1, 0);
    fill(0);
   

  

    pop();
  }
}

function drawILine() {
  fill(0)
  //circle(0, 0, 20);
  push();
  scale(0.1,0.1);
  rotate(radians(random(60)));
  image(inkPattern1,0,0);
  pop();
}
function drawULine() {
  
  //rect(0, 0, 20,20);
  push();
  scale(0.2,0.2);
  rotate(radians(random(60)));
  image(inkPattern2,0,0);
  pop();
}
function drawPLine() {
  
  push();
  scale(0.07,0.07);
  rotate(radians(random(60)));
  image(inkPattern5,0,0);
  pop();
}
function drawTLine() {
  
  //fill(0,255,0);
  //rect(0, 0, 20,20);
  push();
  scale(0.1,0.1);
  rotate(radians(random(60)));
  image(inkPattern3,0,0);
  pop();
}

function keyPressed() {
  if (key === "s") {
    save("img.png");
  }

 

  //when press "a",  call drawAFunction. count i,a,u,p,t.
  if (key === "a") {
    AbeginDrawLine = true;
    IbeginDrawLine = true;
    UbeginDrawLine = true;
    PbeginDrawLine = true;
    TbeginDrawLine = true;
    print(AbeginDrawLine);
  }
  //打字,press w to write the word, call function writeDown()
  if (key === "w") {
    //type mutiple words in onetime. i = how many charcaters
    for (let i = 0; i < 10; i++) {
      ChaPositionX = int(random(0, 30));
      ChaPositionY = int(random(0, 20));

      //change the position of word
      push();
      translate(width/2-50, 870);
      //scale(0.6,0.6);
      writeDown(ChaPositionX);
      pop();
    }
  }
}


//fullscreen
function mousePressed() {
  if(mouseButton === RIGHT) {
    if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
      let fs = fullscreen();
      fullscreen(!fs);
    }
}
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}

// count the number of the AbeginDrawLinecter: i,a,u,p,t;
function count_occur(str) {
  // checking string is valid or not
  if (str.length == 0) {
    console.log("Invalid string");
    return;
  }
  //cor loop to iterate over string
  for (let i = 0; i < str.length; i++) {
    //variable counting occurrence
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j] && i > j) {
        break;
      }
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (count > 0) {
      //console.log(`${str[i]} occurs ${count} times`);

      if (str[i] == "i") {
        counti = count;
        console.log(`${str[i]} occurs ${counti} times`);
      }
      if (str[i] == "a") {
        counta = count;
        console.log(`${str[i]} occurs ${counta} times`);
      }
      if (str[i] == "u") {
        countu = count;
        console.log(`${str[i]} occurs ${countu} times`);
      }
      if (str[i] == "p") {
        countp = count;
        console.log(`${str[i]} occurs ${countp} times`);
      }
      if (str[i] == "t") {
        countt = count;
        console.log(`${str[i]} occurs ${countt} times`);
      }
    }
  }

  //text("a",100,100);
  // text("I am the embodiment of justice",100,100);
  // text("I am the embodiment of justice",100,120);
}
