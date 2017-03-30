//Depends on gameObject
//Depends on vector
//Depends on enemy
class enemyHolder {
    constructor(spawnTimerSize) {
        this.totalEnemies = new Array();
        this.spawnTimer=0;
        this.spawnTimerSize=spawnTimerSize;
    }

    get totalEnemies() {
        return this._totalEnemies;
    }

    set totalEnemies(value) {
        if (!(value instanceof Array)) {
            throw new Error("Passed argument should be an array of enemies");
        }
        
        this._totalEnemies = value;
    }

    add(added) {
        if (added === undefined || !(added instanceof enemy)) {
            throw new Error('Argument should be of type enemy');
        }

        this.totalEnemies.push(added);
    }

    remove(enemyId) {
        this.totalEnemies[enemyId]=
            this.totalEnemies[this.totalEnemies.length-1];
        this.totalEnemies.pop();
    }

    update(canvas,bulletsHolder,scoreVariable) {
        this.spawnTimer+=1;
        if(this.spawnTimer%this.spawnTimerSize==0){
            this.add(enemyMaker.enemy1())
        }
        
        for (var i = 0; i < this.totalEnemies.length; i++) {
            if(!this.totalEnemies[i].isOnCanvas(canvas)){
                this.remove(i);
                break;
            }
            if(this.totalEnemies[i] instanceof enemy &&
               this.totalEnemies[i].health){
                if(this.totalEnemies[i].health<-60){
                    this.remove(i);
                    scoreVariable.value+=1;
                }
                if(this.totalEnemies[i].health<0 &&
                  this.totalEnemies[i].health>-40){
                    this.totalEnemies[i].enemyImgAsSprite=
                        spritesheetMaker.explosion1();
                }
                this.totalEnemies[i].update(bulletsHolder);
            }
        }
    }
    
    draw(context) {
        for (var i = 0; i < this.totalEnemies.length; i++) {
            this.totalEnemies[i].draw(context);
        }
    }

    collideWith(gameObject) {
        for (var i = 0; i < this.totalEnemies.length; i++) {
            if (this.totalEnemies[i].collidesWith(gameObject)){
                return i;
            }
        }
        return null;
    }
}

