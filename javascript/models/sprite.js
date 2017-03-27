//sprite inner images should be positioned with equal padding from one another and with equal size;
class Sprite extends gameObject {
    //source is image source
    //pos where should the image be positioned on the canavas;
    //size of the image on the canvas;
    //how many images are in the sprite;
    constructor(pos, size, numberOfImagesOnSprite, imgId) {
        super(pos, size);
        this._img = document.getElementById(imgId);
        this.src = this._img.getAttribute('src');
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
        if (numberOfImg > this.numberOfImages - 1) {
            throw "can`t draw image that is not on the sprite";
        }
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
        context.drawImage(this.img, imageStartCordinateX, imageStartCordinateY, imageSizeX, imageSizeY, this.pos.x, this.pos.y, this.size.x, this.size.y)

    }
}