var engine = new Engine(800,800,{
    canvasId:"canvas-id",
    contextType:"2d",
    updateCallbackTime:40});

var context = engine.context;
var canvas = engine.canvas;

var mouse = mouse(canvas);
var keys = keys();

var a = new player(new vector(10,10),new vector(100,100));

engine.update = function(){
}

engine.draw = function(){
    context.globalAlpha = 1;
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillRect(mouse.x,mouse.y,10,10);
    a.draw(context)
    context.strokeRect(0,0,canvas.width,canvas.height);
}
engine.start();