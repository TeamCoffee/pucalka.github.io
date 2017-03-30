class spritesheetMaker{
    static background1(){
        return new spritesheet(
            "../images/background2.png",
            new vector(1125,700),
            new vector(1,1));
    }
    
    static background2(){
        return new spritesheet(
            "../images/background3.png",
            new vector(2250,700),
            new vector(1,1));
    }
    
    static background3(){
        return new spritesheet(
            "../images/background4.png",
            new vector(4500,700),
            new vector(1,1));
    }
    
    static background4(){
        return new spritesheet(
            "../images/background5.png",
            new vector(4500,800),
            new vector(1,1));
    }
    
    static player1(){
        return new spritesheet(
            "../images/mainPlayer.png",
            new vector(992,614),
            new vector(6,1));
    }
    
    static enemy1(){
        return new spritesheet(
            "../images/enemy.png",
            new vector(100,136),
            new vector(7,3));
    }
    
    static bullet1(){
        return new spritesheet(
            "../images/bullet1.png",
            new vector(20,20),
            new vector(5,1));
    }
    
    static explosion1(){
        return new spritesheet(
            "../images/explosion1.png",
            new vector(118,118),
            new vector(5,1));
    }
}