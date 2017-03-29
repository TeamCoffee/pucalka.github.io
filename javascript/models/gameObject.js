//Depends on vector class
class gameObject{
    constructor(pos,size){
        this.pos = new vector(pos);
        this.size = new vector(size);
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
        
        if(this.pos.x<otherObject.pos.x+otherObject.size.x && 
            this.pos.x + this.size.x > otherObject.pos.x &&
            this.pos.y < otherObject.pos.y + otherObject.size.y &&
            this.pos.y + this.size.y > otherObject.pos.y){
            return true;
        }
        
        return false;
    }
    
    isOnCanvas(canvas){
        if(!(canvas instanceof HTMLCanvasElement)){
            throw new Error("Passed argument should be of type HTMLCanvasElement");
        }
        
        var canvasObject=new gameObject(
            new vector(-100,-100),
            new vector(canvas.width+200,canvas.height+200))
        
        if(this.collidesWith(canvasObject)){
            return true;
        }
        
        return false;
    }
}