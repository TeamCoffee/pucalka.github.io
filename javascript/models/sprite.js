//sprite inner images should be positioned with equal padding from one another and with equal size;
class Sprite() {
    //source is image source
    //pos where should the image be positioned on the canavas;
    //size of the image on the canvas;
    //how many images are in the sprite;
    constructor(source, pos, size, numberOfImagesOnSprite) {
        super(pos, size);
        this.src = source;
        this._img = document.createElement('img');
        _img.setAttribute('src', source);
        this._numberOfImages = numberOfImagesOnSprite;


    }
    get numberOfImages() {
        return this._numberOfImages;
    }

    get src() {
        return this._src;
    }

    set src(value) {
        if (typeof value !== 'string') {
            throw "src must be string ";
        }
        this._src = value;
    }

    get img() {
        return this._img;
    }

    //nubmerOfImg is 0 based (number of image on the sprite)
    //context to use
    //fullHeight means should we use full height of the sprite or no
    //fullWidht -//-
    draw(context, numberOfImg, fullHeight, fullWidth) {
        var imageStartCordinateY, imageStartCordinateX;
        var imageSizeX, imageSizeY;

        if (fullWidth) {
            imageStartCordinateX = 0;
            imageSizeX = this.img.width;
        } else {
            imageSizeX = this.img.width / this.numberOfImages;
            imageStartCordinateX = imageSizeX * numberOfImg;

        }
        if (fullHeight) {
            imageStartCordinateY = 0;
            imageSizeY = this.img.height;
        } else {
            imageSizeY = (this.img.height / this.numberOfImages);
            imageStartCordinateY = imageSizeY * numberOfImg;

        }
        context.drawImage(this.img, imageStartCordinateX, imageStartCordinateY, imageSizeX, imageSizeY, this.size.x, this.size.y)

    }
}