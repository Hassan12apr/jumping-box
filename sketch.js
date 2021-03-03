var g,r,p,o;
var mo;

function setup(){
    createCanvas(800,700);

    //create 4 different surfaces
    g=createSprite(750,700,100,50);
    g.shapeColor = "green";
    r=createSprite(650,700,100,50);
    r.shapeColor = "red";
    p=createSprite(550,700,100,50);
    p.shapeColor = "purple";
    o=createSprite(450,700,100,50);
    o.shapeColor = "orange";
    


    //create box sprite and give velocity
    mo=createSprite(random(20,750),680,20,20);
    mo.shapeColor = "grey";
    /*mo.x=World.mouseX;
    mo.y=World.mouseY;*/

}

function draw() {
    background("black");
    //add condition to check if box touching surface and make it box
    if(mo.isTouching(g)){
        mo.shapeColor = "green";
    }
    if(mo.isTouching(r)){
        mo.shapeColor = "red";
    }
    if(mo.isTouching(p)){
        mo.shapeColor = "purple";
    }
    if(mo.isTouching(o)){
        mo.shapeColor = "orange";
    }
drawSprites()
}