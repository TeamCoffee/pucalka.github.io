class enemyMaker{
    static enemy1(){
        return new enemy(
            new vector(700,Math.random()*600 + 50),
            new vector(100,150),
            spritesheetMaker.enemy1(),
            new vector(-10,0),
            0.2+Math.random()/3);
    }
}