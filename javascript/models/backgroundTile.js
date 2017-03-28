//Depends on gameObject
//Depends on spritesheet
//Depends on vector
//Hold information about a spritesheet and 
//a timer that counts different sprite 
//images on the spritesheet 
class backgroundTile extends gameObject {
    constructor(pos, size, momentum, spritesheet, spriteTimerSpeed) {
        super(pos, size);

        this.momentum = momentum;

        this.spritesheet = spritesheet;
        this.spriteTimer = 0;
        this.spriteTimerSpeed = spriteTimerSpeed;
    }

    //speed on the canvas
    get momentum() {
        return this._momentum;
    }

    set momentum(value) {
        if (!(value instanceof vector)) {
            throw new Error("Passed argument should be vector");
        }

        this._momentum = value;
    }

    get spritesheet() {
        return this._spritesheet;
    }

    set spritesheet(value) {
        if (!(value instanceof spritesheet)) {
            throw new Error("Passed argument should be number");
        }

        this._spritesheet = value;
    }

    //how to change imgs on the sprite
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
        this.pos.x += this.momentum.x;
        this.pos.y += this.momentum.y;

        this.spriteTimer += this.spriteTimerSpeed;
    }

    //calculate which img in the sprite to draw based on spriteTimer starting from 0 img to the last one
    calculateSpriteN() {
        var spriteN = Math.floor(this.spriteTimer) %
            this.spritesheet.allSpritesCount();
        return spriteN;
    }

    draw(context) {
        var spriteN = this.calculateSpriteN();

        this.spritesheet.drawSprite(
            this.pos,
            this.size,
            spriteN,
            context);
    }

}