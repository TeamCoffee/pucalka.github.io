//Depends on vector
//Depends on gameObject
//depends on spritesheet
class player extends gameObject {
    constructor(pos, size, playerImgAsSprite, speed, spriteTimerSpeed) {
        super(pos, size);
        this.playerImgAsSprite = playerImgAsSprite;
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

    get playerImgAsSprite() {
        return this._playerImgAsSprite;
    }

    set playerImgAsSprite(value) {
        if (!(value instanceof spritesheet)) {
            throw new Error('Player image must be a spritesheet');
        }

        this._playerImgAsSprite = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        if (!(value instanceof vector)) {
            throw new Error('Player Speed must be a vector');
        }

        this._speed = value;
    }

    playerUpdatePosition() {
        if (keys(37) === 1) {
            this.pos.x -= this.speed.x;
        }
        if (keys(39) === 1) {
            this.pos.x += this.speed.x;
        }
        if (keys(38) === 1) {
            this.pos.y -= this.speed.y;
        }
        if (keys(40) === 1) {
            this.pos.y += this.speed.y;
        }
    }

    update() {
        this.playerUpdatePosition();
        this.spriteTimer += this.spriteTimerSpeed;
    }

    calculateSpriteN() {
        var spriteN = Math.floor(this.spriteTimer) %
            this.playerImgAsSprite.allSpritesCount();
        return spriteN;
    }

    playerDraw(context) {
        var spriteN = this.calculateSpriteN();
        this.playerImgAsSprite.drawSprite(this.pos,
            this.size,
            spriteN,
            context);
    }

    // draw(context) {
    //     context.fillStyle = "red";

    //     context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    //     super.draw(context);

    //     context.fillStyle = "black";
    // }

}
//TODO: find if possible inheritance and calling super constructor with arguments variable