let angle;
let w, h, d;

function setup() {
    createCanvas(400, 400, WEBGL);

    angle = 0;
    w = 60;
    h = 100;
    d = 20;
}

function draw() {
    

    //rotateX(angle * 0.01);
    //rotateY(angle * 0.02);
    
    background(150);
//    // Logo 1 - Interlocked app (Android)
//    rotateX(PI / 6);
//    rotateY(PI / 4);
//    //rotateZ(PI / 6);
//    var locX = mouseX - width / 2;
//    var locY = mouseY - height / 2;
//    pointLight(136, 255, 77, locX, locY, 50);
//    ambientMaterial(250);
//
//    stroke(0);
//    //fill(230, 153, 255);
//    box(w, h, d);
//    //fill(255, 51, 51);
//    box(h, d, w);
//    //fill(136, 255, 77);
//    box(d, w, h);
    
    background(20, 25, 25);
    // Logo 2 - Time tuner app (Android)
    rotateX(3 * PI / 4);
    rotateY(PI / 5);
    var locX = mouseX - width / 2;
    var locY = mouseY - height / 2;
    //pointLight(214, 245, 248, locX, locY, 50);
    directionalLight(255, 255, 255, 100, 50, 50);
    pointLight(255, 255, 255, 400, 100, 200);
    pointLight(170, 230, 236, - 180, 5, 50);
    ambientMaterial(255);

    box(h);


    //angle++;
}