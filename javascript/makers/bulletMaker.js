class bulletMaker{
    static bullet1(pos,speed){
        return new  bullet(
            new vector(pos.x,pos.y),
            new vector(20,20),
            new vector(speed.x,speed.y),
            spritesheetMaker.bullet1(),
            0.1);
    }
}