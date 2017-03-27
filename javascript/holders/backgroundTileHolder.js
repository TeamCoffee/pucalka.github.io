//Depends on backgroundTile
//Depends on vector
class backgroundTileHolder{
    constructor(){
        this.backgroundTiles=new Array();
    }
    
    get backgroundTiles(){
        return this._backgroundTiles;
    }
    
    set backgroundTiles(value){
        if(!(value instanceof Array)){
            throw new Error("Passed argument should be Array");
        }
        this._backgroundTiles=value;
    }
    
    addTile(added){
        if(!(added instanceof backgroundTile)){
            throw new Error("Passed arguments should be of type backgroundTyle");
        }
        
        this.backgroundTiles.push(added);
    }
    
    removeTile(arrayIndex){
        var tilesCount=this.backgroundTile.length;
        var lastArrayTile=this.backgroundTile[tilesCount];
        
        this.backgroundTiles[arrayIndex]=lastArrayTile;
        this.backgroundTiles.pop();
    }
    
    update(){
        var tilesCount=this.backgroundTiles.length;
        for(var i=0;i<tilesCount;i++){
            this.backgroundTiles.update();
        }
    }
    
    draw(context){
        var tilesCount=this.backgroundTiles.length;
        for(var i=0;i<tilesCount;i++){
            this.backgroundTiles.draw(context);
        }
    }
    
}