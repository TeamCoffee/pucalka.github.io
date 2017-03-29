class bullet extends gameObject{
    constructor(pos, size, speed, spriteImg, spriteTimerSpeed){
        super(pos, size);
        this.speed=speed;
        this.spriteImg=spriteImg;
        this.spriteTimer = 0;
        this.spriteTimerSpeed = spriteTimerSpeed;
    }
     
    get speed() {
        return this._speed;
    }

    set speed(value) {
        if (!(value instanceof vector)) {
            throw new Error('Bullet speed must be a vector');
        }

        this._speed = value;
    }

    get spriteImg() {
        return this._spriteImg;
    }

    set spriteImg(value) {
        if (!(value instanceof spritesheet)) {
            throw new Error('Bullet image must be a spritesheet');
        }

        this._spriteImg = value;

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

    update() {
        this.pos.x+=this.speed.x;
        this.pos.y+=this.speed.y;
        this.spriteTimer+=this.spriteTimerSpeed;
    }
    
    calculateSpriteN() {
        var spriteN = Math.floor(this.spriteTimer) %
            this.spriteImg.allSpritesCount();
        return spriteN;
    }
    
    draw(context) {
        var spriteN = this.calculateSpriteN();
        this.spriteImg.drawSprite(this.pos,
            this.size,
            spriteN,
            context);
    }
}