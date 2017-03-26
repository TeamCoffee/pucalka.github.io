//Depends on vector
//Depends on gameObject
class player extends gameObject{
    constructor(pos,size){
        super(pos,size);
    }
    
    draw(context){
        context.fillStyle = "red";
        
        context.fillRect(this.pos.x,this.pos.y,this.size.x,this.size.y);
        super.draw(context);
        
        context.fillStyle = "black";
    }
    
    update(){
    }
}