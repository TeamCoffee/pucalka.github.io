class enemyMaker{
    static enemy1(){
        return new enemy(
            new vector(700,Math.random()*400 + 100),
            new vector(100,150),
            spritesheetMaker.enemy1(),
            new vector(-6,0),
            0.2+Math.random()/3,
            20+Math.floor(Math.random()*60));
    }
}