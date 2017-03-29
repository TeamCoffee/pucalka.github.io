class backgroundTilesMaker{
    static tile1(){
        return new backgroundTile(
            new vector(canvas.width,0),
            new vector(canvas.width*3,canvas.height),
            new vector(-1,0),
            spritesheetMaker.background1(),
            0
        )
    }
    static tile2(){
        return new backgroundTile(
            new vector(canvas.width,0),
            new vector(canvas.width*6,canvas.height),
            new vector(-4,0),
            spritesheetMaker.background2(),
            0
        )
    }
    static tile3(){
        return new backgroundTile(
            new vector(canvas.width,0),
            new vector(canvas.width*12,canvas.height),
            new vector(-8,0),
            spritesheetMaker.background3(),
            0
        )
    }
}