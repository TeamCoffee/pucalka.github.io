//Depends on gameObject
//Depends on vector
class bulletHolder{
    constructor() {
        this.bulletsFired = [];
    }
    
    add(bulletFired) {
        this.bulletsFired.push(bulletFired);
    }

    remove(bulletId) {
        this.bulletsFired[bulletId]=this.bulletsFired[this.bulletsFired.length-1];
        this.bulletsFired.pop();
    }

    draw(context){
        for (var i = 0; i < this.bulletsFired.length; i++) {
            this.bulletsFired[i].draw(context);
        }
    }

    update(canvas){
        for (var i = 0; i < this.bulletsFired.length; i++) {
            if(!this.bulletsFired[i].isOnCanvas(canvas)){
                this.remove(i);
                continue;
            }
            this.bulletsFired[i].update(context);
            
        }
    }

    collideWith(gameObject) {
        for (var i = 0; i < this.bulletsFired.length; i++) {
            if(this.bulletsFired[i].collidesWith(gameObject)) {
                return i;
            }
        }
        return null;
    }
}

