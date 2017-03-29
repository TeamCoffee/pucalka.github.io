var engine = new Engine(
    800,
    800, {
    canvasId: "canvas-id",
    contextType: "2d",
    updateCallbackTime: 20
});

var context = engine.context;
var canvas = engine.canvas;

var mouse = mouse(canvas);
var keys = keys();

var player1= playerMaker.player1();
var backgroundHolder = new backgroundTileHolder(590);

engine.update = function () {
    backgroundHolder.update(canvas);
    player1.update(keys);
}

engine.draw = function () {
    context.globalAlpha = 1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    backgroundHolder.draw(context);
    
    player1.draw(context);
    
    context.fillStyle="red";
    context.fillRect(mouse.x, mouse.y, 10, 10);
    context.fillStyle="black";
    context.strokeRect(0, 0, canvas.width, canvas.height);
}
engine.start();