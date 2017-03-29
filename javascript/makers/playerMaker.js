class playerMaker{
    static player1(){
        return new player(
            new vector(400,50),
            new vector(100,50),
            spritesheetMaker.player1(),
            new vector(5,5));
    }
}