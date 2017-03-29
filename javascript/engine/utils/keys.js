//Returns function Pressed(key) that indicates wheter a key is pressed
function keys() {
    var isPressed = [];

    function keyCodeProvider(args) {
        return args.keyCode;
    }

    window.addEventListener("keydown", function(args) {
        isPressed[keyCodeProvider(args)] = 1;
    }, false);

    window.addEventListener("keyup", function(args) {
        isPressed[keyCodeProvider(args)] = 0;
    }, false);

    //get value for a key if it is pressed or not 
    function Pressed(key) {
        var indexer;

        if (typeof(key) == "number") {
            indexer = key;
        }

        if (typeof(key) == "string") {
            indexer = key.charCodeAt(0) - 32;
        }

        //if not pressed event once returns 0 ;
        //else returns its value;
        if (typeof(isPressed[indexer]) == "undefined") {
            isPressed[indexer] = 0;
        }

        return isPressed[indexer];
    }

    return Pressed;
}