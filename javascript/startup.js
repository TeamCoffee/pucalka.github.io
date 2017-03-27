var engine = new Engine(800, 800, {
    canvasId: "canvas-id",
    contextType: "2d",
    updateCallbackTime: 40
});

var context = engine.context;
var canvas = engine.canvas;

var mouse = mouse(canvas);
var keys = keys();

var s1 = new spritesheet("images/test1.png",new vector(96,130),new vector(7,3));
var timer=0;
engine.update = function() {
    timer+=0.5;
}


engine.draw = function() {
    context.globalAlpha = 1;
    context.clearRect(0, 0, canvas.width, canvas.height);

    s1.drawSprite(
        new vector(mouse.x,mouse.y),
        new vector(90,130),
        Math.floor(timer)%21,
        context);
    
    context.fillRect(mouse.x, mouse.y, 10, 10);

    context.strokeRect(0, 0, canvas.width, canvas.height);
}
engine.start();