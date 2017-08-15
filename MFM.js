
var width = 700;
var height = 450;
var canvas = document.getElementById("canvas");

canvas.width = width*2;
canvas.height = height*2;

canvas.style.width = width;
canvas.style.height = height;

ctx = canvas.getContext("2d");

canvas.getContext("2d").scale(2,2);


    var player = {
        x: width/2,
        y: -70,
        width: 70,
        height: 94,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false,
        goingRight: true,
        imgOffsetY: 0,
        imgOffsetX:0,
        frames:7,
        name: "karenGeorgia"
    },
    keys = [],
    friction = 0.8,//does this do anything?
    gravity = 0.25;


var city=({name:"city", x:0, y:250, width:600, height:200});
var elvis=({name:"elvis", x:player.x+100, y:player.y+70, width:27, height:30, attacking:false, frames:3, imgOffsetY:0, imgOffsetX:27});
var fountain=({name:"fountain", x:width*2-185, y:290, width:85, height:115, frames:3, imgOffsetX:0, imgOffsetY:0, animSpeed:7});
var motelSign=({name:"motelSign", x:width*2-215, y:0, width:120, height:77, imgOffset:0});
var hotelDoor=({name:"hotelDoor", x:width*2-140, y:90, width:140, height:201});
var hotel1=({name:"hotel1", x:width*2, y:90, width:800, height:500});
var hotel2=({name:"hotel2", x:width*2, y:-110, width:800, height:500});
var hotel3=({name:"hotel2", x:width*2, y:-310, width:800, height:500});
var hotel4=({name:"hotel4", x:width*2, y:-510, width:800, height:500});
var elevator=({name:"elevator", x:2058, y:190, width:142, height:125, goingUp:true});
var waterTower=({name:"waterTower", x:width*2, y:-1010, width:244, height:500});
var ballroom=({name:"ballroom", x:-800, y:-1260, width:1000, height:405, imgOffset:0});
var ballroomStairs=({name:"ballroomStairs", x:-630, y:-1260, width:243, height:352});
var ballroom2=({name:"ballroom2", x:-800, y:-1580, width:1000, height:320});
var skylight=({name:"skylight", x:ballroom2.x+255, y:ballroom2.y, width:400, height:322, boxWidth:400, boxHeight:350});
var balcony=({name:"balcony", x:ballroom.x+ballroom.width-10, y:ballroom2.y, width:210, height:670});
var forrestSign=({name:"forrestSign", x:ballroom.x+1500, y:ballroom.y+270, width:63, height:80});


var killers = [];
killers.push({name:"doctor", x:200, y:345, width:40, height:95, dead:false, imgOffsetY:0, imgOffsetX:40,animSpeed:7,frames:3,goingRight:false,speed:.3,leftX:-width+10,rightX:width*2-210});
killers.push({name:"doctor", x:600, y:345, width:40, height:95, dead:false, imgOffsetY:95, imgOffsetX:40, animSpeed:7,frames:3,goingRight:true,speed:.3,leftX:-width+10,rightX:width*2-230});
killers.push({name:"nurse", x:-200, y:343, width:40, height:97, dead:false, imgOffsetY:0, imgOffsetX:40,animSpeed:6,frames:3,goingRight:true,speed:1,leftX:-width+10,rightX:width*2-230});
killers.push({name:"nurse", x:1400, y:-17, width:40, height:97, dead:false, imgOffsetY:0, imgOffsetX:40,animSpeed:6,frames:3,goingRight:true,speed:1,leftX:1400,rightX:2045});
killers.push({name:"doctor", x:1450, y:-17, width:40, height:95, dead:false, imgOffsetY:0, imgOffsetX:40,animSpeed:7,frames:3,goingRight:true,speed:.3,leftX:1400,rightX:2045});
killers.push({name:"nurse", x:1600, y:-225, width:40, height:97, dead:false, imgOffsetY:0, imgOffsetX:40,animSpeed:6,frames:3,goingRight:true,speed:1,leftX:1400,rightX:2045});
killers.push({name:"nurse", x:1800, y:-425, width:40, height:97, dead:false, imgOffsetY:0, imgOffsetX:40,animSpeed:6,frames:3,goingRight:true,speed:1,leftX:1400,rightX:2045});
killers.push({name:"doctor", x:1850, y:-425, width:40, height:95, dead:false, imgOffsetY:0, imgOffsetX:40,animSpeed:7,frames:3,goingRight:true,speed:.3,leftX:1400,rightX:2045});
killers.push({name:"nurse", x:1600, y:-620, width:40, height:97, dead:false, imgOffsetY:0, imgOffsetX:40,animSpeed:6,frames:3,goingRight:true,speed:1,leftX:1400,rightX:2045});
killers.push({name:"nurse", x:1800, y:-620, width:40, height:97, dead:false, imgOffsetY:0, imgOffsetX:40,animSpeed:6,frames:3,goingRight:true,speed:1,leftX:1400,rightX:2045});
killers.push({name:"nurse", x:2000, y:-620, width:40, height:97, dead:false, imgOffsetY:0, imgOffsetX:40,animSpeed:6,frames:3,goingRight:true,speed:1,leftX:1400,rightX:2045});
killers.push({name:"ramirez", x:1400, y:180, width:47, height:110, dead:false, imgOffsetX:47, goingRight:true, frames:7, animSpeed:10, leftX: 1400, rightX:2160, speed:1});
killers.push({name:"johnList", x:200, y:-1015, width:107, height:105, dead:false, imgOffsetY:0, imgOffsetX:107, goingRight:true, frames:5, animSpeed:10, leftX:200, rightX:700, speed:.5});


var ghosts = [];
ghosts.push({name:"elisa", x:1800, y:160, width:15, height:92, imgOffsetY:0, imgOffsetX:0});
ghosts.push({name:"elisa", x:1800, y:-620, width:15, height:92, imgOffsetY:0, imgOffsetX:0});

var cookies = [];
cookies.push({name:"cookie", x:550, y:300, width:19, height:19, eaten:false});

cookies.push({name:"cookie", x:990, y:300, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:1120, y:300, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:1245, y:250, width:19, height:19, eaten:false});

cookies.push({name:"cookie", x:1550, y:150, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:1700, y:110, width:19, height:19, eaten:false});

cookies.push({name:"cookie", x:1550, y:-50, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:1700, y:-90, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:1850, y:-50, width:19, height:19, eaten:false});

cookies.push({name:"cookie", x:1550, y:-250, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:1700, y:-290, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:1850, y:-250, width:19, height:19, eaten:false});

cookies.push({name:"cookie", x:2000, y:-550, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:2050, y:-550, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:2100, y:-550, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:2150, y:-550, width:19, height:19, eaten:false});
cookies.push({name:"cookie", x:2200, y:-550, width:19, height:19, eaten:false});

//var quotes=("Look and listen","Good byeeeeee","Fuck politeness","Stay out of the forest","You're in a cult. Call your dad.","This isn't like Sephora.","Gafuck Yaself","I'M sorry.","Pepper spray first, apologize later.","Toxic masculinity ruins the party again","It's. Not. Squirrels.","I am going to Lulumurder you")

var boxes = [];
//elevator floor
boxes.push({x:2058, y:310, width:142, height:5, skin:"rect"});
//floor
boxes.push({x:-width-96, y:height-10, width:width*3.1, height: 20, skin:"rect"});
boxes.push({x:fountain.x, y:fountain.y+fountain.height, width:fountain.width+5, height: 35, skin:"rect"});
//right stairs
boxes.push({x:700, y:380, width:40, height:40, skin:"square"});
boxes.push({x:820, y:320, width:20, height:20, skin:"square"});
boxes.push({x:850, y:290, width:40, height:40, skin:"square"});
boxes.push({x:970, y:240, width:50, height:50, skin:"square"});
boxes.push({x:1100, y:220, width:60, height:60, skin:"square"});
//left wall
boxes.push({x:-width-85,y:-560, width:96, height:1000, skin:"wall"});
//right wall
boxes.push({x:width*2-96, y:-910, width:96, height:1000, skin:"wall"});
boxes.push({x:width*2-96, y:291, width:96, height:200, skin:"shortWall"});
//stairs to list mansion
boxes.push({x:width*2-200, y:-910, width:50, height:50, skin:"square"});
boxes.push({x:width*2-350, y:-910, width:30, height:30, skin:"square"});
boxes.push({x:width*2-450, y:-910, width:20, height:20, skin:"square"});
//hotel floors
boxes.push({x:1400, y:290, width:800, height:200, skin:"lib"});
boxes.push({x:1400, y:80, width:680, height:10, skin:"lib"});
boxes.push({x:1400, y:-125, width:680, height:10, skin:"lib"});
boxes.push({x:1400, y:-325, width:680, height:10, skin:"lib"});
boxes.push({x:1400, y:-526, width:270, height:16, skin:"lib"});
boxes.push({x:1750, y:-526, width:500, height:16, skin:"lib"});
//right hotel wall
boxes.push({x:(width*2-96)+895, y:-510, width:96, height:1000, skin:"wall"});
//list platform
boxes.push({x:-800, y:-910, width:1600, height:60, skin:"rect"});
//ballroom stairs
boxes.push({x:ballroomStairs.x+130, y:ballroomStairs.y+315, width:30, height:2, skin:"no"});
boxes.push({x:ballroomStairs.x+100, y:ballroomStairs.y+285, width:30, height:2, skin:"no"});
boxes.push({x:ballroomStairs.x+70, y:ballroomStairs.y+255, width:30, height:2, skin:"no"});
boxes.push({x:ballroomStairs.x+40, y:ballroomStairs.y+225, width:30, height:2, skin:"no"});
boxes.push({x:ballroomStairs.x+10, y:ballroomStairs.y+195, width:30, height:2, skin:"no"});
boxes.push({x:ballroomStairs.x-10, y:ballroomStairs.y, width:10, height:ballroomStairs.height, skin:"no"});

boxes.push({x:ballroomStairs.x+120, y:ballroomStairs.y+120, width:10, height:2, skin:"no"});
boxes.push({x:ballroomStairs.x+150, y:ballroomStairs.y+90, width:10, height:2, skin:"no"});
boxes.push({x:ballroomStairs.x+180, y:ballroomStairs.y+60, width:10, height:2, skin:"no"});
boxes.push({x:ballroomStairs.x+210, y:ballroomStairs.y+30, width:10, height:2, skin:"no"});

//ballroom 2nd floor
//boxes.push({x:ballroom2.x, y:ballroom2.y+ballroom2.height-20, width:250, height:10, skin:"no"});
boxes.push({x:ballroom2.x+420, y:ballroom2.y+ballroom2.height-20, width:780, height:10, skin:"rect"});
//forrest
boxes.push({x:800, y:-400, width:40, height:40, skin:"square"});
boxes.push({x:ballroom.x+ballroom.width, y:ballroom.y+1000, width:800, height:40, skin:"rect"});



var rungs=[];
//ballroom stairs landing
rungs.push({x:ballroomStairs.x+40, y:ballroomStairs.y+150, width:60, height:10});

rungs.push({x:waterTower.x+100, y:waterTower.y+390, width:42, height:2});
rungs.push({x:waterTower.x+100, y:waterTower.y+290, width:42, height:2});
rungs.push({x:waterTower.x+100, y:waterTower.y+190, width:42, height:2});
rungs.push({x:waterTower.x, y:waterTower.y+169, width:200, height:2});
rungs.push({x:hotel4.x+280, y:hotel4.y+80, width:50, height:2});
rungs.push({x:hotel4.x+280, y:hotel4.y+3, width:50, height:2});

var movingObjects = []; //for moving the viewport
movingObjects.push(forrestSign,balcony,skylight,ballroom2,ballroomStairs,ballroom,waterTower,fountain,elevator,motelSign,hotel1,hotel2,hotel3,hotel4,hotelDoor);

for(i=0;i<boxes.length;i++){
	movingObjects.push(boxes[i]);
}
for(i=0;i<rungs.length;i++){
	movingObjects.push(rungs[i]);
}
for(i=0;i<killers.length;i++){
	movingObjects.push(killers[i]);
}
for(i=0;i<ghosts.length;i++){
	movingObjects.push(ghosts[i]);
}
for(i=0;i<cookies.length;i++){
	movingObjects.push(cookies[i]);
}

var pics = [];

pics.push(forrestSign,skylight,ballroom2,ballroom,hotel1,hotel2,hotel3,hotel4,waterTower,motelSign,elvis,player,balcony,ballroomStairs,elevator,hotelDoor,fountain);

for(i=0;i<killers.length;i++){
	pics.push(killers[i]);
}
for(i=0;i<ghosts.length;i++){
	pics.push(ghosts[i]);
}
for(i=0;i<cookies.length;i++){
	pics.push(cookies[i]);
}

var animations = [];


var soundOn=true;
//sound files
//var jumpSound = new Audio('jump.wav');
var hitSound = new Audio('hit.wav');
var cookieSound = new Audio('cookie.wav');
var killSound = new Audio('kill.wav');
var song = new Audio('tribal.wav');
//var song = new Audio('mfm2.wav');
//var cecilSong = new Audio('cecilSong2.wav');
var cecilSong = new Audio('hotel.wav');
var waterTowerSounds = new Audio('waterTowerSounds.wav');

var listSong = new Audio('DminorFugue.mp3');

//initialize some variables
var cookieCount = 0;
var karenHealth = 100;
var georgiaHealth = 100;
var frameCount = 0;//loops from 0 to 1000
var stopSpeechTimer = 500;
var viewportNorm = 103;

if(soundOn){
  song.loop=true;
  song.play();
  //cecilSong.loop=true;
  //cecilSong.play();
  //cecilSong.volume = 0;
}
function update() {

  if(frameCount<1000){
	   frameCount++;
  }else{
    frameCount=0;
  }

  if(player.x<ballroom.x+ballroom.width+700 && player.y<ballroom.y+ballroom.height){
    song.pause();
    if(soundOn){
      listSong.play();
    }else{
      listSong.pause();
    }
  }else if(player.x>hotel1.x-5){
    listSong.pause();
    song.pause();
    if(soundOn){
      cecilSong.play();
      if(player.y<waterTower.y+waterTower.height){
        waterTowerSounds.play();
      }else{
        waterTowerSounds.pause();
      }
      //cecilSong.volume=1;
    }else{
      //cecilSong.pause();
      cecilSong.pause();
    }
  }else{
    //cecilSong.pause();
    cecilSong.pause();
    listSong.pause();
    waterTowerSounds.pause();
    if(soundOn){
      song.play();
    }
  }

    // check keys
    if (keys[38]) {
        // up arrow
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            //jumpSound.play();
            player.grounded = false;
            player.velY = -player.speed * 2;
        }
    }
    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {
        	if (player.x < width-250){
            player.velX++;
           }else{
           for(i=0;i<movingObjects.length;i++){
           	 movingObjects[i].x -= player.speed;
             movingObjects[i].leftX-=player.speed;
             movingObjects[i].rightX-=player.speed;
           }
           city.x -= player.speed/5;
          }
        }
      player.goingRight = true;
      if(player.imgOffsetX < player.width*(player.frames-3)){
        if(frameCount%7===0){
          player.imgOffsetX +=player.width;
        }
      }else{
        player.imgOffsetX=player.width;
      }
    }
    if (keys[37]) {
        // left arrow
        if (player.velX > -player.speed) {
        	if (player.x > 150){
            player.velX--;
          }else{
          for(i=0;i<movingObjects.length;i++){
           	movingObjects[i].x += player.speed;
            movingObjects[i].leftX+=player.speed;
            movingObjects[i].rightX+=player.speed;
           }
           city.x += player.speed/5;
          }
        }
      player.goingRight = false;
      if(player.imgOffsetX < player.width*(player.frames-3)){
        if(frameCount%7===0){
          player.imgOffsetX +=player.width;
        }
      }else{
        player.imgOffsetX=player.width;
      }
    }
    if(keys[32]){
      //space key
      if(elvis.x>0 && elvis.x+elvis.width<width){
        if(cookieCount>0){
          if(player.goingRight){
            elvis.x += 4;
          }else{
            elvis.x -= 4;
          }
          elvis.imgOffsetX = 0;
          elvis.attacking = true;
        }
      }
    }else{
      if(keys[37]||keys[39]){
        if(frameCount%5===0){
          if(elvis.imgOffsetX<elvis.width*(elvis.frames-1)){
            elvis.imgOffsetX += elvis.width;
          }else{
            elvis.imgOffsetX = elvis.width;
          }
        }
      }else{
        elvis.imgOffsetX = elvis.width;
      }
      if(elvis.attacking===true){
        elvis.attacking=false;
        cookieCount--;
      }
    }


    if(!keys[37] && !keys[39] && !keys[38] && !keys[32]){
      player.imgOffsetX=0;
    }
    if(karenHealth>0||georgiaHealth>0){
      if(!keys[32]){
        elvis.x = player.x-50;
      }
      elvis.y=player.y+63;
    }else{
      elvis.x=player.x;
      elvis.y=player.y;
      gravity=.15;
    }
    if(player.goingRight===true){
      player.imgOffsetY = 0;
      elvis.imgOffsetY = 0;
    }else{
      player.imgOffsetY = player.height;
      elvis.imgOffsetY = elvis.height;
    }

    player.velX *= friction;
    player.velY += gravity;
    player.grounded = false;//remove & he does weird flying stuff
    //boxes
    for (var i = 0; i < boxes.length; i++){
        var dir = colCheck(player, boxes[i], 1);
        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }
    }
    //water tower ladder
    for (i = 0; i < rungs.length; i++){
      var dir = colCheck(player, rungs[i], 0);
      if (dir === "b") {
        player.grounded = true;
        player.jumping = false;
      }
    }
    //elvis kills killers
    for (i=0; i<killers.length; i++){
      if(cookieCount>0){
        dir = colCheck(elvis, killers[i], 0);
        if((dir==="l" || dir==="r") && keys[32]){
          killers[i].dead=true;
          if(soundOn){
            killSound.play();
          }
        }
      }
    }
    //killers hurt player
    for (i=0; i<killers.length; i++){
      if(killers[i].dead===false){
        dir = colCheck(player, killers[i], 1);
        if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        }
        if(karenHealth>0&&georgiaHealth>0){
          if(dir==="r"){
            if(soundOn){
              hitSound.play();
            }
            player.imgOffsetX=player.width*5;
            karenHealth-=.5;
          }else if (dir==="l"){
            if(soundOn){
              hitSound.play();
            }
            player.imgOffsetX=player.width*6;
            georgiaHealth-=.5;
          }
        }else if(karenHealth>0 || georgiaHealth>0){
          if(dir==="l"||dir==="r"){
            if(soundOn){
              hitSound.play();
            }
            player.imgOffsetX=player.width*5;
            if(player.name==="karen"){
              karenHealth-=.5;
            }else if (player.name==="georgia"){
              georgiaHealth-=.5;
            }
          }
        }
      }
    }
    if(karenHealth<.1 && georgiaHealth<.1){
      viewportNorm = 40;
      player.width=elvis.width;
      player.height=elvis.height;
      elvis.x=player.x;
      elvis.y=player.y;
      player.imgOffsetY=600;
    }

    for(i=0;i<killers.length;i++){
      if(typeof(killers[i].animSpeed)==="number" && killers[i].dead===false){
        animate(killers[i],1);
      }
      if(killers[i].dead){
        killers[i].imgOffsetX=0;
        if(killers[i].height>0){
          killers[i].height-=.8;
        }else{
          killers[i].width=0;
          killers[i].height=0;
        }
      }
    }
    animate(fountain,0);

    for (i=0; i<cookies.length; i++){
      dir = colCheck(player, cookies[i], 1);
      if(dir!==null){
        cookies[i].width=0;
        cookies[i].height=0;
        cookies.splice(i, 1);
        cookieCount++;
        if(soundOn){
          cookieSound.play();
        }
      }
    }


    if(player.grounded){
         player.velY = 0;
    }

    //move viewport up
    if(player.grounded && player.y < height/1.5){
    	for(i=0; i<movingObjects.length; i++){
      	movingObjects[i].y+=2;
      }
      player.y +=2;
      city.y+=.8;
    }
    //move viewport down
    if(player.y>height-viewportNorm){
    	for(i=0; i<movingObjects.length; i++){
      	movingObjects[i].y-=2;
      }
      city.y-=.8;
    }
    player.x += player.velX;
    player.y += player.velY;


//jiblet Y offset
  if(player.goingRight === true){
  	jibletOffsetY = 0;
  }else{
  	jibletOffsetY = player.height;
  }

//elevator goes up and down
if(elevator.goingUp===true){
  elevator.y--;
  boxes[0].y--;
  if(elevator.y<hotel4.y){
    elevator.goingUp=false;
  }
}else{
  elevator.y++;
  boxes[0].y++;
  if(elevator.y>hotel1.y+100){
    elevator.goingUp=true;
  }
}
//fires in list mansion
//for(var i=0; i<10; i++){
if(player.x>ballroom.x && player.x<ballroom.x+ballroom.width && player.y<ballroom.y+ballroom.height){
  //alert("fire 1");
  if(frameCount%500===0){
    var xf = Math.random();
    var yf = Math.random();
    if(yf>.5){
      yf=ballroom2.y+230;
    }else{
      yf=ballroom.y+300;
    }
    //alert("fire 2");
    killers.push({name:"fire", x:xf*1000+ballroom.x, y:yf, width:41, height:77, dead:false, imgOffsetX:41, goingRight:true, frames:4, animSpeed:7, leftX: 1400, rightX:2160, speed:0});
    //killers.push({name:"fire", x:600, y:-970, width:41, height:77, dead:false, imgOffsetX:41, goingRight:true, frames:4, animSpeed:7, leftX: 1400, rightX:2160, speed:0});
    movingObjects.push(killers[killers.length-1])
    pics.push(killers[killers.length-1]);
    //pics.push(pics.shift());
  }
}

//sign flicker
var random = Math.random();
if(random>.8){
  motelSign.imgOffset=motelSign.width;
}else{
  motelSign.imgOffset=0;
}
//ballroom lights flicker
//dir=colCheck(player, rungs[0]);
if((player.x>ballroomStairs.x && player.x<ballroomStairs.x+100&&player.y+player.height>ballroom.y&&player.y<ballroom.y+80) || (player.x>ballroomStairs.x+400 && player.x<ballroomStairs.x+600)){
  ballroom.imgOffset=ballroom.width;
}else{
  ballroom.imgOffset=0;
}
//ghosts flicker
for(i=0;i<ghosts.length;i++){
  random = Math.random();
  if(random>.5){
    ghosts[i].imgOffsetX=0;
  }else{
    ghosts[i].imgOffsetX=ghosts[i].width;
  }
  if(random>.5){
    ghosts[i].x+=3;
  }else{
    ghosts[i].x-=3;
  }
}

  //erase the canvas
 		ctx.clearRect(0, 0, width, height);

   //draw stuff on the canvas
   	//sky
    var grd = ctx.createLinearGradient(0,height,0,0);
    //grd.addColorStop(0,"#99ffff");//light blue
    //grd.addColorStop(1,"#19334d");//dark blue
    grd.addColorStop(0,"#336699");//dark blue
    grd.addColorStop(1,"black");
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,width,height);

    drawTwo(city);
    //draw boxes
  	for(i=0;i<boxes.length;i++){
      if(boxes[i].skin !== "no"){
      var image = document.getElementById(boxes[i].skin+"Pic");
    		draw(image, 0, 0, image.width, image.height, boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
      }
  	}


  for(i=0; i<pics.length; i++){
    drawTwo(pics[i]);
  }

  ctx.fillStyle="rgba(255,255,255,.5)";
  ctx.fillRect(0,0,width,45);

//cookie counter
  //cookieCount = 20;
  for (i=0;i<cookieCount;i++){
    image = document.getElementById("cookiePic");
    draw(image, 0, 0, image.width, image.height,25*i+300, 10, image.width, image.height);
  }

//health counters at the top
  //karen
  image = document.getElementById("karenHeadPic");
  draw(image, 0, 0, image.width, image.height,0, 10, image.width, image.height);
  //ctx.rect(29,14,102,17);
  //ctx.stroke();
  ctx.fillStyle="black";
  ctx.fillRect(28,13,104,19);
  if(karenHealth>0){
    if(karenHealth>70){
      ctx.fillStyle="lime";
    }else if(karenHealth>30){
      ctx.fillStyle="orange";
    }else{
      ctx.fillStyle="red";
    }
    ctx.fillRect(30,15,karenHealth,15);
  }else{
    image = document.getElementById("deadKarenHeadPic");
    draw(image, 0, 0, image.width, image.height,0, 10, image.width, image.height);
    if(georgiaHealth>0){
      player.name="georgia";
      player.width=32;
      player.height=92;
      player.frames=7;
    }
  }
  //georgia
  image = document.getElementById("georgiaHeadPic");
  draw(image, 0, 0, image.width, image.height,150, 10, image.width, image.height);
  //ctx.rect(179,14,102,17);
  //ctx.stroke();
  ctx.fillStyle="black";
  ctx.fillRect(178,13,104,19);
  if(georgiaHealth>0){
    if(georgiaHealth>70){
      ctx.fillStyle="lime";
    }else if(georgiaHealth>30){
      ctx.fillStyle="orange";
    }else{
      ctx.fillStyle="red";
    }
    ctx.fillRect(180,15,georgiaHealth,15);
  }else{
    image = document.getElementById("deadGeorgiaHeadPic");
    draw(image, 0, 0, image.width, image.height,150, 10, image.width, image.height);
    if(karenHealth>0){
      player.name="karen";
      player.width=41;
      player.height=94;
      player.frames=7;
    }
  }



}//end main loop

function animate(killer,start){
  //simple non-interactive animations
  if(frameCount%killer.animSpeed===0){
  	if(killer.imgOffsetX < killer.width*(killer.frames-1)){
  		killer.imgOffsetX += killer.width;
    }else{
    	killer.imgOffsetX=start*killer.width;
    }
  }
  if(killer.goingRight===true){
    killer.x+=killer.speed;
    if(typeof(killer.imgOffsetY)==="number"){
      killer.imgOffsetY=0;
    }
    if(killer.x>killer.rightX){
      killer.goingRight=false;
    }
  }else if(killer.goingRight===false){
    killer.x-=killer.speed;
    if(typeof(killer.imgOffsetY)==="number"){
      killer.imgOffsetY=killer.height;
    //}else{
      //killer.imgOffsetY=0;
    }
    if(killer.x<killer.leftX){
      killer.goingRight=true;
    }
  }
}//end animate function

function drawTwo(pic){
  //draw things that overlap with the viewport
  if(pic.x+pic.width>0 && pic.x<700){
  	if(pic.y+pic.height>0 && pic.y<450){
      if(typeof(pic.imgOffsetY)==="number"){
        if(pic.height>0){
          ctx.drawImage(document.getElementById(pic.name+"Pic"),pic.imgOffsetX+.3,pic.imgOffsetY+.5,pic.width-1,pic.height-1,pic.x,pic.y,pic.width-1,pic.height-1);
        }
      }else if(typeof(pic.imgOffsetX)==="number"){
        ctx.drawImage(document.getElementById(pic.name+"Pic"),pic.imgOffsetX+.3,.5,pic.width-1,pic.height-1,pic.x,pic.y,pic.width-1,pic.height-1);
      }else if(typeof(pic.imgOffset)==="number"){
        ctx.drawImage(document.getElementById(pic.name+"Pic"),pic.imgOffset,0,pic.width,pic.height,pic.x,pic.y,pic.width,pic.height);
      }else{
        //if(typeof(pic.boxWidth)==="number"){
          //ctx.drawImage(document.getElementById(pic.name+"Pic"),0,0,pic.width,pic.height,pic.x,pic.y,pic.Boxwidth,pic.Boxheight);
        //}else{
    	    ctx.drawImage(document.getElementById(pic.name+"Pic"),0,0,pic.width,pic.height,pic.x,pic.y,pic.width,pic.height);
        //}
      }
    }
  }
}//end draw function

function draw(image, xOffset, yOffset, width, height, x, y, boxWidth, boxHeight){
  //draw images on canvas
	if(x+boxWidth>0 && x<700){
  	if(y+boxHeight>0 && y<450){
    	ctx.drawImage(image,xOffset,yOffset,width,height,x,y,boxWidth,boxHeight);
    }
  }
}//end draw function



function colCheck(shapeA, shapeB, solid) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                if(solid===1){
                  shapeA.y += oY;
                }
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                if(solid===1){
                  shapeA.x += oX;
                }
            } else {
                colDir = "r";
                if(solid===1){
                  shapeA.x -= oX;
                }
            }
        }
    }
    return colDir;
}

function toggleSound(){
  if(soundOn){
    soundOn=false;
    song.pause();
    document.getElementById('soundButton').src="sound.svg";
  }else{
    soundOn="true";
    song.play();
    document.getElementById('soundButton').src="mute.svg";
  }
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
    update();
});

//setInterval(update(), 100);
setInterval(function(){update();}, 16);
