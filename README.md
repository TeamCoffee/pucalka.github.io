# Javascript-Canvas-Game-Engine
This is a simple javascript game engine, that encapsulates and shortens canvas initialisation operations.

##Example

```Js
var engine=new Engine(800, 800, {canvasId:"canvas-id", contextType:"2d", updateCallbackTime:40} );
//Specify canvas width and height, and provide options parameter, 
//used for getting the canvas and setting update refresh rate.

var context=engine.context;
var canvas=engine.canvas;
//Get accessors provided to reduce code

var mouse=Mouse(canvas);
var keys=Keys();
//State of the mouse and keyboard

engine.update=function()
{
    //Code for updating
}

engine.draw=function()
{
    //Code for drawing.
}

engine.start();
//Start the engine

```

##Keys
Keys() returns a function, that returns true if a key with a given keyCode or Char is pressed.
###Simple Use:
```Js
var keys=Keys()
keys("w");  //Returns true if the "w" key on the keyboard is pressed.
keys(115);   //Returns true if the key with a keyCode 68 ("w") is pressed.
```

##Mouse
Mouse() returns an object, representing the mouse coordinates on the canvas.

###Simple Use
```Js
var mouse=Mouse(canvas);  //Returns an object in the format Mouse{x,y}
console.log(mouse.x,mouse.y)    //Logs the mouse's coordinates in the console
