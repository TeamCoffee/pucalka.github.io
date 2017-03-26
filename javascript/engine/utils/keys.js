//Todo : better realization
//Returns function -> fix
function keys(){
    var isPressed=[];
    
    function keyCodeProvider(args){
        return args.keyCode;
    }
    
    window.addEventListener("keydown", function(args){
        isPressed[keyCodeProvider(args)] = 1;
    },false);
    
    window.addEventListener("keyup", function(args){
        isPressed[keyCodeProvider(args)] = 0;
    },false);
    
    function Pressed(key){
        var indexer;
        
        if(typeof(key)=="number"){
            indexer=key;
        }
        
        if(typeof(key)=="string"){
            indexer = key.charCodeAt(0) - 32;
        }
        
        if(typeof(isPressed[indexer])=="undefined"){
            isPressed[indexer] = 0;
        }
        
        return isPressed[indexer];
    }
    
    return Pressed;
}