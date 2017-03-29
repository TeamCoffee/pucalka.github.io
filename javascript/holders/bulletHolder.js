//Depends on gameObject
//it holds all fired bullets as an array and makes sure bullets shot outside the canvas are deleted

class BulletHolder extends gameObject {

    constructor() {
        this.totalBullets = 1000;
        this.sniperBullets = 100;
        this.shotgunShells = 100;
        this.nuclearBullets = 10;
        this.AKFortySevenBullets = 790;
        
        this.bulletsFired = [];
        this.enemiesShot = [];
    }

    add(bulletFired, enemyShot) {
        if(bulletFired === undefined || !(bulletFired instanceof Bullet)){
            throw new Error('Argument should be bullet fired.');
        }
        if(enemyShot === undefined || !(enemyShot instanceof Enemy)){
            throw new Error('Argument should be target enemy shot.');
        }

        bulletsFired.push(bulletFired);
        enemiesShot.push(enemyShot);
    }

    isBulletOutsideField(bullet) {
        var bulletIsOutsideField = (bullet.pos.x > canvas.width
                                    ||
                                    bullet.pos.y > canvas.height
                                    ||
                                    bullet.pos.x < 0
                                    ||
                                    bullet.pos.y < 0)

        return bulletIsOutsideField;
    }

    remove(bulletId) {
        if (bulletId !== null) {

            var matchingBullet = bulletsFired.find(b => b.id === bulletId);

            if (isBulletOutsideField(matchingBullet)) {
                var index = bulletsFired.indexOf(matchingBullet);
                bulletsFired.splice(index, 1);
            }
            else {
                for (var i = 0; i < totalEnemies.length; i++) {
                    if (bulletId === totalEnemies[i].id) {
                        var index = totalEnemies.indexOf(totalEnemies[i]);
                        totalEnemies.splice(index, 1);
                    }
                }
            }
        }

    }

    draw() {
        for (var i = 0; i < bulletsFired.length; i++) {
            if (!(isBulletOutsideField(bulletsFired[i]))) {
                bulletsFired[i].draw();
            }
        }
    }

    update(context) { 
        for (var i = 0; i < bulletsFired.length; i++) {
            if (!(isBulletOutsideField(bulletsFired[i]))) {
                bulletsFired[i].update(context);
            }
            
        }
    }

    collidesWith(gameObject) {
        for (var i = 0; i < bulletsFired.length; i++) {
            if (bulletsFired[i].pos.x === gameObject.pos.x
                &&
                bulletsFired[i].pos.y === gameObject.pos.y) {
                return bulletsFired[i].id;
            }
            else {
                return null;
            }
        }
    }
}

