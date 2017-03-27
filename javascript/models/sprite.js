class spritesheet {
    //Initializes a new spritesheet with 
    //given path,singleSize and spritesheet gridSize
    constructor(src,singleSpriteSize,gridSize){
        this.image=new Image();
        this.image.src=src;
        
        this.singleSpriteSize=singleSpriteSize;
        
        this.gridSize=gridSize;
    }
    
    get image(){
        return this._image;
    }
    
    set image(value){
        if(!(value instanceof Image)){
            throw new Error("Passed argument should be of type Image");
        }
        
        this._image=value;
    }
        
    get singleSpriteSize(){
        return this._singleSpriteSize;
    }
        
    set singleSpriteSize(value){
        if(!(value instanceof vector)){
            throw new Error("Passed argument should be of type vector");
        }
        
        this._singleSpriteSize=value;
    }
    
    get gridSize(){
        return this._gridSize;
    }
    
    set gridSize(value){
        if(!(value instanceof vector)){
            throw new Error("Passed argument should be of type vector");
        }
        
        this._gridSize=value;
    }
    
    //Calculates the position of a single sprite on the source image
    //based on a single number spriteN
    calculateSourcePosition(spriteN){
        if(!typeof(spriteN)=="number"){
            throw new Error("Passed argument should be number");
        }
        
        console.log()
        var gridX=spriteN%this.gridSize.x;
        var gridY=Math.floor(spriteN/this.gridSize.x);
        var gridPos=new vector(
            gridX,
            gridY);
        
        console.log(gridPos)
        
        var spritePosX=gridPos.x*this.singleSpriteSize.x;
        var spritePosY=gridPos.y*this.singleSpriteSize.y;
        var spritePos=new vector(
            spritePosX,
            spritePosY);
        
        return spritePos;
    }
    
    //Draws single sprite from the spritesheet with
    //given drawPos,drawSize and spriteN on a given context
    drawSprite(pos,size,spriteN,context){
        if(!(pos instanceof vector)){
            throw new Error("Pos parameter should be of type vector");
        }
        
        if(!(size instanceof vector)){
            throw new Error("Size parameter should be of type vector");
        }
        
        if(!typeof(spriteN)=="number"){
            throw new Error("SpriteN should be number");
        }
        
        var sourcePos=this.calculateSourcePosition(spriteN);
        
        context.drawImage(
            this.image,
            sourcePos.x,
            sourcePos.y,
            this.singleSpriteSize.x,
            this.singleSpriteSize.y,
            pos.x,
            pos.y,
            size.x,
            size.y);
    }
}