class backgroundTilesMaker{
    static stars1(){
        return new backgroundTile(
            new vector(canvas.width,0),
            new vector(canvas.width*3,canvas.height),
            new vector(-4,0),
            spritesheetMaker.background1(),
            0
        )
    }
}