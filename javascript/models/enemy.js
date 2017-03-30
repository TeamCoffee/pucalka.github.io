//Depends on vector
//Depends on gameObject
//depends on spritesheet
var counter=0;
class enemy extends gameObject {
    constructor(pos, size ,enemyImgAsSprite, speed, spriteTimerSpeed,fireTimerSpeed) {
        super(pos, size);
        this.enemyImgAsSprite = enemyImgAsSprite;
        this.speed = speed;
        this.spriteTimer = 0;
        this.spriteTimerSpeed = spriteTimerSpeed;
        this.health=30+Math.random()*100;
        this.fireTimerSpeed=fireTimerSpeed;
        this.fireTimer=0;
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
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
    
    update(bulletsHolder) {
        if(this.fireTimer%this.fireTimerSpeed==0){
            bulletsHolder.add(
                bulletMaker.bullet1(
                    new vector(this.pos.x-20,this.pos.y+60),
                    new vector(-8,0)));
        }
        this.fireTimer+=1;
        this.enemyUpdatePosition();
        this.spriteTimer += this.spriteTimerSpeed;
    }

    calculateSpriteN() {
        var spriteN = Math.floor(this.spriteTimer) %
            this.enemyImgAsSprite.allSpritesCount();
        return spriteN;
    }
    
    draw(context) {
        var spriteN = this.calculateSpriteN();
        this.enemyImgAsSprite.drawSprite(this.pos,
            this.size,
            spriteN,
            context);
    }
}