//Depends on enemy
//Depends on vector
//it holds all enemy as an array and give a easy way to update and draw them simultaniously on the canvas
class enemyHolder {
    constructor() {
        this.enemy = new Array();
    }

    get enemy() {
        return this._enemy;
    }

    set enemy(value) {
        if (!(value instanceof Array)) {
            throw new Error("Passed argument should be Array");
        }
        this._enemy = value;
    }

    addenemy(added) {
        if (!(added instanceof enemy)) {
            throw new Error("Passed arguments should be of type enemy");
        }

        this.enemy.push(added);
    }

    removeenemy(arrayIndex) {
        var enemysCount = this.enemy.length;
        var lastArrayenemy = this.enemy[enemysCount];

        this.enemy[arrayIndex] = lastArrayenemy;
        this.enemy.pop();
    }

    update() {
        var enemysCount = this.enemy.length;
        for (var i = 0; i < enemysCount; i++) {
            this.enemy.update();
        }
    }

    draw(context) {
        var enemysCount = this.enemy.length;
        for (var i = 0; i < enemysCount; i++) {
            this.enemy.draw(context);
        }
    }

}