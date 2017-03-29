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

    remove(bulletId) {
        if (bulletId !== null) {

            var matchingBullet = bulletsFired.find(b => b.id === bulletId);

            if (matchingBullet.pos.x > canvas.width
                ||
                matchingBullet.pos.y > canvas.height
                ||
                matchingBullet.pos.x < 0
                ||
                matchingBullet.pos.y < 0) {

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
        for(var i = 0; i < bulletsFired.length; i++){
            base.draw(bulletFired[i]);
        }
    }

    update() { 
        for (var i = 0; i < bulletsFired.length; i++) {
            base.update(bulletFired[i]);
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
