var engine = new Engine(800, 800, {
    canvasId: "canvas-id",
    contextType: "2d",
    updateCallbackTime: 40
});



var context = engine.context;
var canvas = engine.canvas;

var mouse = mouse(canvas);
var keys = keys();

var s1 = new spritesheet("../images/test1.png", new vector(96, 130), new vector(7, 3));

debugger;
var p1 = new player(new vector(100, 100), new vector(100, 130), s1, new vector(2, 4), 0.5);

//enemy creation
var alive = true;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


var enemyStartPos = getRandomArbitrary(50, 750);
var enemySprite = new spritesheet("../images/enemy.png", new vector(96, 130), new vector(7, 3));
var enemyUnit = new enemy(new vector(800, enemyStartPos), new vector(100, 130), enemySprite, new vector(5, 10), 0.25);

var b1 = new backgroundTile(
    new vector(500, 100),
    new vector(100, 130),
    new vector(-2, 0),
    s1,
    0.5);



engine.update = function () {
    b1.update();
    p1.update();
    enemyUnit.update();

}


engine.draw = function () {
    context.globalAlpha = 1;
    context.clearRect(0, 0, canvas.width, canvas.height);

    /*s1.drawSprite(
        new vector(mouse.x,mouse.y),
        new vector(90,130),
        Math.floor(timer)%21,
        context);
        */

    b1.draw(context);
    p1.playerDraw(context);
    enemyUnit.enemyDraw(context);

    context.fillRect(mouse.x, mouse.y, 10, 10);

    context.strokeRect(0, 0, canvas.width, canvas.height);
}
engine.start();