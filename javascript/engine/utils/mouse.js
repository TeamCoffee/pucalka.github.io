//TODO : Implement with vector
function mouse(canvas){
    var mouse={
        x:0,
        y:0,
    }
    
    window.addEventListener("mousemove", function (args) {
        var x = args.x || args.clientX;
        var y = args.y || args.clientY;
        mouse.x = x - canvas.offsetLeft;
        mouse.y = y - canvas.offsetTop;
    }, false);
    
    return mouse;
}