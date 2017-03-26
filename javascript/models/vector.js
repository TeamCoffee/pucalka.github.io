//A class that encapsulates a X and Y variable
//Suitable for keeping size, position, momentum, etc.
class vector{
    //Default constructor sets X and Y to (0;0)
    constructor(){
        if(arguments.length==0){
            this.x = 0;
            this.y = 0;
        }
        
        if(arguments.length==1){
            var passedArgument = arguments[0];
            
            if(!(passedArgument instanceof vector)){
                throw new Error("Only passed argument should be of type vector");
            }
            
            this.x = passedArgument.x;
            this.y = passedArgument.y;
        }
        
        if(arguments.length==2){
            var xArgument = arguments[0];
            var yArgument = arguments[1];
            
            this.x = xArgument;
            this.y = yArgument;
        }
    }
    
    get x(){
        return this._x;
    }
    
    set x(value){
        if(!typeof(value)=="number"){
            throw new Error("X variable should be number");
        }
        
        this._x = value;
    }
    
    get y(){
        return this._y;
    }
    
    set y(value){
        if(!typeof(value)=="number"){
            throw new Error("Y variable should be number");
        }
        
        this._y = value;
    }
    
    translate(delta){
        if(!(delta instanceof vector)){
            throw new Error("Argument should be of type vector");
        }
        
        this.x += delta.x;
        this.y += delta.y;
    }
    
    rotate(center,angle){
        
    }
    
}