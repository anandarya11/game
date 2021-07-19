var b = createSprite(200,200);
 b.setAnimation("background_landscape04_1")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="blue"

var goal =0;
var death = 0

hero.setAnimation("enemy1");
hero.scale=1;
enemy1.setAnimation("dream");
enemy1.scale=.2;
enemy2.setAnimation("dream");
enemy2.scale=.2;
enemy3.setAnimation("dream");
enemy3.scale=.2;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//background(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("sound://category_achievements/lighthearted_bonus_objective_1.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("sound://category_achievements/peaceful_win_8.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("yellow")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("yellow")
  text("death:"+death,20,350);
  
drawSprites()
}


