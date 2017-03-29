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

var backgroundHolder1 = new backgroundTileHolder(500,backgroundTilesMaker.tile1);
var backgroundHolder2 = new backgroundTileHolder(500,backgroundTilesMaker.tile2);
var backgroundHolder3 = new backgroundTileHolder(500,backgroundTilesMaker.tile3);

engine.update = function () {
    backgroundHolder1.update(canvas);
    backgroundHolder2.update(canvas);
    backgroundHolder3.update(canvas);
    
    player1.update(keys);
}

engine.draw = function () {
    context.globalAlpha = 1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    backgroundHolder1.draw(context);
    backgroundHolder2.draw(context);
    backgroundHolder3.draw(context);
    
    player1.draw(context);
    
    context.fillStyle="red";
    context.fillRect(mouse.x, mouse.y, 10, 10);
    context.fillStyle="black";
    context.strokeRect(0, 0, canvas.width, canvas.height);
}
engine.start();