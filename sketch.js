var bg, an, ballon, pos;

function setup() {
  createCanvas(1500,965);
  database=firebase.database();
  pos = database.ref('Balloon/Position')
  pos.on("value", readPosition, showError)
  bg = loadImage("Hot Air Ballon-01.png")
  an = loadAnimation("Hot Air Ballon-02.png", "Hot Air Ballon-03.png", "Hot Air Ballon-04.png")
  ballon = createSprite(250, 300, 298, 547)
  ballon.addAnimation("fly", an)
  ballon.scale = 0.67
}

function draw() {
  image(bg, 0, -400);
  if (keyDown(UP_ARROW)){
    changePosition(0,-1)
  }
  if (keyDown(DOWN_ARROW)){
    changePosition(0,1)
  }
  if (keyDown(LEFT_ARROW)){
    changePosition(-1,0)
  }
  if (keyDown(RIGHT_ARROW)){
    changePosition(1,0)
  }
  drawSprites();
}

function readPosition(data){
  position=data.val();
  ballon.x= position.x;
  ballon.y=position.y;
}

function showError(){
  console.log("Error")
}

function changePosition(x,y){
  database.ref('Balloon/Position').set({
      'x':position.x+(x*10),
      'y':position.y+(y*10)
  })
}