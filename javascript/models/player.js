//Depends on vector
//Depends on gameObject
//Depends on spritesheet
class player extends gameObject {
    constructor(pos, size, playerSpritesheet, speed) {
        super(pos, size);
        this.spritesheet = playerSpritesheet;
        this.speed = speed;
        this.spriteTimer = 0;
        this.moving = {
            left:false,
            right:false,
            up:false,
            down:false,
        }
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
        if (isPressedFunction(37) === 1 || isPressedFunction("a")) {
            this.pos.x -= this.speed.x;
            this.moving.left=true;
        }
        if (isPressedFunction(39) === 1 || isPressedFunction("d")) {
            this.pos.x += this.speed.x;
            this.moving.right=true;
        }
        if (isPressedFunction(38) === 1 || isPressedFunction("w")) {
            this.pos.y -= this.speed.y;
            this.moving.up=true;
        }
        if (isPressedFunction(40) === 1 || isPressedFunction("s")) {
            this.pos.y += this.speed.y;
            this.moving.down=true;
        }
    }

    update(isPressedFunction) {
        this.moving = {
            left:false,
            right:false,
            up:false,
            down:false,
        }
        this.playerUpdatePosition(isPressedFunction);
    }

    /*calculateSpriteN() {
        var spriteN = Math.floor(this.spriteTimer) %
            this.spritesheet.allSpritesCount();
        return spriteN;
    }*/

    draw(context) {
        var drawn=false;
        //context.fillStyle = "green";
        //context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        
        if(this.moving.left && !drawn){
            if(this.moving.down){
                this.spritesheet.drawSprite(
                    this.pos,
                    this.size,
                    4,
                    context);
            }else if(this.moving.up){
                this.spritesheet.drawSprite(
                    this.pos,
                    this.size,
                    2,
                    context);
            }else{
                this.spritesheet.drawSprite(
                    this.pos,
                    this.size,
                    0,
                    context);
            }   
            drawn=true;
        }
        
        if(this.moving.right && !drawn){
            if(this.moving.down){
                this.spritesheet.drawSprite(
                    this.pos,
                    this.size,
                    5,
                    context);
            }else if(this.moving.up){
                this.spritesheet.drawSprite(
                    this.pos,
                    this.size,
                    3,
                    context);
            }else{
                this.spritesheet.drawSprite(
                    this.pos,
                    this.size,
                    1,
                    context);
            }
            drawn=true;
        }
        
        if(this.moving.up && !drawn){
            this.spritesheet.drawSprite(
                this.pos,
                this.size,
                2,
                context);
            drawn=true;
        }
        
        if(this.moving.down && !drawn){
            this.spritesheet.drawSprite(
                this.pos,
                this.size,
                4,
                context);
            drawn=true;
        }
        
        
        if(!drawn){
            this.spritesheet.drawSprite(
                this.pos,
                this.size,
                0,
                context);
            drawn=true;
        }
        
        //super.draw(context);
    }

    // draw(context) {
    //     context.fillStyle = "red";

    //     context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    //     super.draw(context);

    //     context.fillStyle = "black";
    // }

}