//Depends on backgroundTile
//Depends on vector
//it holds all backgroundTiles as an array and give a easy way to update and draw them simultaniously on the canvas
class backgroundTileHolder {
    constructor(tileAddTimeInterval) {
        this.backgroundTiles = new Array();
        this.tileAddTime=tileAddTimeInterval;
        this.tileAddTimeInterval=tileAddTimeInterval;
        this.addTile(backgroundTilesMaker.stars1());
        this.backgroundTiles[0].pos.x=0;
    }
    get backgroundTiles() {
        return this._backgroundTiles;
    }

    set backgroundTiles(value) {
        if (!(value instanceof Array)) {
            throw new Error("Passed argument should be Array");
        }
        this._backgroundTiles = value;
    }

    addTile(added) {
        if (!(added instanceof backgroundTile)) {
            throw new Error("Passed arguments should be of type backgroundTyle");
        }

        this.backgroundTiles.push(added);
    }

    get tileAddTime(){
        return this._tileAddTime;
    }
    
    set tileAddTime(value){
        if(!typeof(value)=="number"){
            throw new Error("Passed argument should be of type number");
        }
        
        this._tileAddTime=value;
    }
    
    get tileAddTimeInterval(){
        return this._tileAddTimeInterval;
    }
    
    set tileAddTimeInterval(value){
        if(!typeof(value)=="number"){
            throw new Error("Passed argument should be of type number");
        }
        
        this._tileAddTimeInterval=value;
    }
    
    removeTile(arrayIndex) {
        var tilesCount = this.backgroundTiles.length;
        var lastArrayTile = this.backgroundTiles[tilesCount-1];

        this.backgroundTiles[arrayIndex] = lastArrayTile;
        this.backgroundTiles.pop();
    }

    update(canvas) {
        if(this.tileAddTime%this.tileAddTimeInterval==0){
            this.addTile(backgroundTilesMaker.stars1());
        }
        
        this.tileAddTime++;
        
        for (var i = 0; i < this.backgroundTiles.length; i++) {

            if(!this.backgroundTiles[i].isOnCanvas(canvas)){
                this.removeTile(i);
                continue;
            }
            
            if(this.backgroundTiles.length>0){
                this.backgroundTiles[i].update();
            }
        }
    }

    draw(context) {
        for (var i = 0; i < this.backgroundTiles.length; i++) {
            this.backgroundTiles[i].draw(context);
        }
    }

}
