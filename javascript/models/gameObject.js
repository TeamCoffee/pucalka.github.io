//Depends on vector class
class gameObject{
    constructor(pos,size){
        this.pos = new vector(pos);
        this.size = new vector(size);
        
        /*
        if(arguments.length==0){
            this.pos = new vector();
            this.size = new vector();
        }
        
        //Used to define point with no size
        if(arguments.length==1){
            var posArgument = arguments[0];
            
            this.pos = new vector(posArgument);
            this.size = new vector();
        }
        
        if(arguments.length==2){
            var posArgument = arguments[0];
            var sizeArgument = arguments[1];
            
            this.pos = new vector(posArgument);
            this.size = new vector(sizeArgument);
        }
        
        if(arguments.length==4){
            var posX = arguments[0];
            var posY = arguments[1];
            
            var sizeX = arguments[2];
            var sizeY = arguments[3];
        
            this.pos = new vector(posX,posY);
            this.size = new vector(sizeX,sizeY);
        }
        */
    }
    
    get pos(){
        return this._pos;
    }
    
    set pos(value){
        if(!(value instanceof vector)){
            throw new Error("Value should be of type vector");
        }
        
        this._pos = value;
    }
    
    get size(){
        return this._size;
    }
    
    set size(value){
        if(!(value instanceof vector)){
            throw new Error("Value should be of type vector");
        }
        
        this._size = value;
    }
    
    //Draw function that takes as an argument the context to draw on
    draw(context){
        context.strokeRect(
            this.pos.x,
            this.pos.y,
            this.size.x,
            this.size.y);
    }
    
    //Function in which the state of the object is changed
    update(){}
    
    collidesWith(otherObject){
        if((!otherObject instanceof gameObject)){
            throw new Error("Argument should be of type game object");
        }
        
        //rectangle collision check
        
        return true;
    }
}