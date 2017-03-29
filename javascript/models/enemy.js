//Depends on vector
//Depends on gameObject
//depends on spritesheet
var counter=0;
class enemy extends gameObject {
    constructor(pos, size, enemyImgAsSprite, speed, spriteTimerSpeed) {
        super(pos, size);
        this.enemyImgAsSprite = enemyImgAsSprite;
        this.speed = speed;
        this.spriteTimer = 0;
        this.spriteTimerSpeed = spriteTimerSpeed;        
    }
    
    get spriteTimer() {
        return this._spriteTimer;
    }

    set spriteTimer(value) {
        if (!(typeof(value) == "number")) {
            throw new Error("Passed argument should be number");
        }

        this._spriteTimer = value;
    }

    get spriteTimerSpeed() {
        return this._spriteTimerSpeed;
    }

    set spriteTimerSpeed(value) {
        if (!(typeof(value) == "number")) {
            throw new Error("Passed argument should be number");
        }

        this._spriteTimerSpeed = value;
    }

    get enemyImgAsSprite() {
        return this._enemyImgAsSprite;
    }

    set enemyImgAsSprite(value) {
        if (!(value instanceof spritesheet)) {
            throw new Error('enemy image must be a spritesheet');
        }

        this._enemyImgAsSprite = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        if (!(value instanceof vector)) {
            throw new Error('enemy Speed must be a vector');
        }

        this._speed = value;
    }

    enemyUpdatePosition() {
        counter++;
        this.pos.x -= (counter/5)*this.speed.x;
        if(this.pos.x > 400){
            this.pos.x += this.speed.x;
            this.pos.y += this.speed.y;
        }  
         if(this.pos.y > 400){
            this.pos.x -= this.speed.x;
            this.pos.y -= this.speed.y;
        }        

        //console.log(this.pos.x);
       
    }
    
    update() {
        this.enemyUpdatePosition();
        
        this.spriteTimer += this.spriteTimerSpeed;
    }

    calculateSpriteN() {
        var spriteN = Math.floor(this.spriteTimer) %
            this.enemyImgAsSprite.allSpritesCount();
        return spriteN;
    }

    enemyDraw(context) {
        var spriteN = this.calculateSpriteN();
        this.enemyImgAsSprite.drawSprite(this.pos,
            this.size,
            spriteN,
            context);
    }
    collidesWith(otherObject){
        if((!otherObject instanceof gameObject)){
            throw new Error("Argument should be of type game object");
        }
        //console.log("colided");
        return true;
    }
}