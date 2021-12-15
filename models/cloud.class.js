class Cloud extends MovableObj {
    

    primaryAction;

    width = 720;
    height = 480;
    speedX = 0.3;
    
    constructor(imgPath, x, y){ //creating and initializing objects created within a class
        super();
        super.loadImg(imgPath);
        this.x = x;
        this.y = y;
        // this.action();
    }

    action(){
        this.primaryAction = setInterval(() => {
            super.moveLeft();
        }, 20);
    }
}