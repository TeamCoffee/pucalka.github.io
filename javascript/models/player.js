//Depends on vector
//Depends on gameObject
//Depends on spritesheet
class player extends gameObject {
    constructor(pos, size, playerSpritesheet, speed) {
        super(pos, size);
        this.playerSpritesheet = playerSpritesheet;
        this.speed = speed;
        this.spriteTimer = 0;
    }

    get spritesheet() {
        return this._spritesheet;
    }

    set spritesheet(value) {
        if (!(value instanceof spritesheet)) {
            throw new Error('Passed argument should be spritesheet');
        }

        this._spritesheet = value;
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
    
    playerUpdatePosition(isPressedFunction) {
        if (isPressedFunction(37) === 1) {
            this.pos.x -= this.speed.x;
        }
        if (isPressedFunction(39) === 1) {
            this.pos.x += this.speed.x;
        }
        if (isPressedFunction(38) === 1) {
            this.pos.y -= this.speed.y;
        }
        if (isPressedFunction(40) === 1) {
            this.pos.y += this.speed.y;
        }
    }

    update(isPressedFunction) {
        this.playerUpdatePosition(isPressedFunction);
    }

    /*calculateSpriteN() {
        var spriteN = Math.floor(this.spriteTimer) %
            this.spritesheet.allSpritesCount();
        return spriteN;
    }*/

    draw(context) {
        //var spriteN = this.calculateSpriteN();
        /*this.playerImgAsSprite.drawSprite(this.pos,
            this.size,
            spriteN,
            context);
        */
        console.log("asd")
        context.fillStyle = "red";
        context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        
        super.draw(context);
    }

    // draw(context) {
    //     context.fillStyle = "red";

    //     context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    //     super.draw(context);

    //     context.fillStyle = "black";
    // }

}