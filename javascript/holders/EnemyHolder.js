//Depends on gameObject
//it holds all enemies 

class EnemyHolder extends gameObject {

    constructor() {
        this.totalEnemies = new Array();
    }

    get totalEnemies() {
        return this.totalEnemies;
    }

    set totalEnemies(value) {
        if (!(value instanceof Array)) {
            throw new Error("Passed argument should be an array of enemies");
        }
        this.totalEnemies = value;
    }

    add(enemy) {
        if (enemy === undefined || !(enemy instanceof Enemy)) {
            throw new Error('Argument should be an enemy to add.');
        }

        totalEnemies.push(enemy);
    }

    isEnemyOutsideField(enemy) {
        var enemyIsOutsideField = (enemy.pos.x > canvas.width
                                    ||
                                    enemy.pos.y > canvas.height
                                    ||
                                    enemy.pos.x < 0
                                    ||
                                    enemy.pos.y < 0)

        return enemyIsOutsideField;
    }

    remove(enemyId) {
        if (totalEnemies !== null) {

            var matchingEnemy = totalEnemies.find(e => e.id === enemyId);

            if (isEnemyOutsideField(matchingEnemy)){
                var index = totalEnemies.indexOf(matchingEnemy);
                totalEnemies.splice(index, 1);
            }
            else {
                for (var i = 0; i < totalEnemies.length; i++) {
                    if (enemyId === totalEnemies[i].id) {
                        var index = totalEnemies.indexOf(totalEnemies[i]);
                        totalEnemies.splice(index, 1);
                    }
                }
            }
        }

    }

    update() {
        var enemysCount = this.enemy.length;
        for (var i = 0; i < enemysCount; i++) {
            if (!(isEnemyOutsideField(totalEnemies[i]))) {
                totalEnemies[i].update();
            }
            
        }
    }
    
    draw(context) {
        var enemysCount = this.enemy.length;
        for (var i = 0; i < enemysCount; i++) {
            if (!(isEnemyOutsideField(totalEnemies[i]))) {
                totalEnemies[i].draw(context);
            }
        }
    }

    collidesWith(gameObject) {
        for (var i = 0; i < totalEnemies.length; i++) {
            if (totalEnemies[i].pos.x === gameObject.pos.x
                &&
                totalEnemies[i].pos.y === gameObject.pos.y) {
                return totalEnemies[i].id;
            }
            else {
                return null;
            }
        }
    }
}

