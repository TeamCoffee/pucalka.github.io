class playerMaker{
    static player1(){
        return new player(
            new vector(400,50),
            new vector(110,70),
            spritesheetMaker.player1(),
            new vector(5,5));
    }
}