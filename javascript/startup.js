var engine = new Engine(
    700,
    700, {
    canvasId: "canvas-id",
    contextType: "2d",
    updateCallbackTime: 20
});

var context = engine.context;
var canvas = engine.canvas;

var mouse = mouse(canvas);
var keys = keys();

var player1= playerMaker.player1();

var enemy1=enemyMaker.enemy1();

var backgroundHolder1 = new backgroundTileHolder(500,backgroundTilesMaker.tile1);
var backgroundHolder2 = new backgroundTileHolder(500,backgroundTilesMaker.tile2);
var backgroundHolder3 = new backgroundTileHolder(500,backgroundTilesMaker.tile3);


var enemyHolder1=new enemyHolder(300);

var bulletHolder1=new bulletHolder();

engine.update = function () {
    backgroundHolder1.update(canvas);
    backgroundHolder2.update(canvas);
    backgroundHolder3.update(canvas);
    
    enemyHolder1.update(canvas);
    
    bulletHolder1.update(canvas);
    
    player1.update(keys,bulletHolder1);
    
    var collisionResult=enemyHolder1.collideWith(player1);
    if(typeof(collisionResult)=="number"){
        player1.health-=10;
        enemyHolder1.remove(collisionResult);
    }
}

engine.draw = function () {
    context.globalAlpha = 1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    backgroundHolder1.draw(context);
    backgroundHolder2.draw(context);
    backgroundHolder3.draw(context);
    enemyHolder1.draw(context);
    
    player1.draw(context);
    
    bulletHolder1.draw(context);
    
    context.fillStyle="red";
    context.fillRect(mouse.x, mouse.y, 10, 10);
    context.fillStyle="black";
    context.strokeRect(0, 0, canvas.width, canvas.height);
}
engine.start();