var engine = new Engine(
    900,
    700, 
    {canvasId: "canvas-id",
    contextType: "2d",
    updateCallbackTime: 20
});

var context = engine.context;
var canvas = engine.canvas;

var mouse = mouse(canvas);
var keys = keys();

var player1= playerMaker.player1();

var enemy1=enemyMaker.enemy1();

var backgroundHolder1 = new backgroundTileHolder(2040,backgroundTilesMaker.tile1);
var backgroundHolder2 = new backgroundTileHolder(1040,backgroundTilesMaker.tile2);
var backgroundHolder3 = new backgroundTileHolder(1048,backgroundTilesMaker.tile3);

var enemyHolder1=new enemyHolder(50);

var bulletHolder1=new bulletHolder();

var score={value:0};

engine.update = function () {
    backgroundHolder1.update(canvas);
    backgroundHolder2.update(canvas);
    backgroundHolder3.update(canvas);
    
    enemyHolder1.update(canvas,bulletHolder1,score);
    
    bulletHolder1.update(canvas);
    
    if(player1.health>0){
        player1.update(keys,bulletHolder1);
    }
    
    var collisionResult=enemyHolder1.collideWith(player1);
    if(typeof(collisionResult)=="number"){
        player1.health-=10;
        enemyHolder1.remove(collisionResult);
    }
    
    var collisionResult=bulletHolder1.collideWith(player1);
    if(typeof(collisionResult)=="number"){
        bulletHolder1.remove(collisionResult);
        player1.health-=20;
    }
    
    for(var i=0;i<bulletHolder1.bulletsFired.length;i++){
        collisionResult=enemyHolder1.collideWith(bulletHolder1.bulletsFired[i]);
        
        if(typeof(collisionResult)=="number"){
            bulletHolder1.remove(i);
            enemyHolder1.totalEnemies[collisionResult].health-=20;
        }
    }
}

engine.draw = function () {
    context.globalAlpha = 1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    backgroundHolder1.draw(context);
    backgroundHolder2.draw(context);
    backgroundHolder3.draw(context);
    enemyHolder1.draw(context);
    
    if(player1.health>0){
        player1.draw(context);
    }
    
    bulletHolder1.draw(context);
    
    drawScore();
    
    context.strokeRect(0, 0, canvas.width, canvas.height);
    
    if(player1.health<=0){
        context.font="72px Verdana";
        context.fillStyle="#e67e22";
        context.fillText("Game over",150,350);
    }
}

function drawScore(){
    context.font="30px Verdana";
    context.fillStyle="#e67e22";
    context.fillText(score.value,10,30);
}

engine.start();