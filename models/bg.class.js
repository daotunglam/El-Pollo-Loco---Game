class Bg extends MovableObj {

    width = 720;
    height = 480;
    
    constructor(imgPath, x, y){ //creating and initializing objects created within a class
        super();
        super.loadImg(imgPath);
        this.x = x;
        this.y = y;
    }
}