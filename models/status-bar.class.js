class StatusBar extends Drawableobj {


    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
    ]

    percentage = 100;

    x = 10;
    y = 10;
    width = 400 * 0.5;
    height = 100 * 0.5;

    world;


    constructor() {
        super();
        // super.loadImg(this.IMAGES[5]);
        this.setPercentage(100);
        this.moveStatusBarWithCamera();
    }

    //setPercentage(50);
    setPercentage(percentage) {

        this.percentage = percentage; // => 0 ... 5

        if (this.percentage == 0) {
            this.loadImg(this.IMAGES[0])
        }
        if (this.percentage == 20) {
            this.loadImg(this.IMAGES[1])
        }
        if (this.percentage == 40) {
            this.loadImg(this.IMAGES[2])
        }
        if (this.percentage == 60) {
            this.loadImg(this.IMAGES[3])
        }
        if (this.percentage == 80) {
            this.loadImg(this.IMAGES[4])
        }
        if (this.percentage == 100) {
            this.loadImg(this.IMAGES[5])
        }

    }


    moveStatusBarWithCamera() {
        setInterval(() => {
            this.x = 10 - this.world.camera_x;
        }, 1000/10);
    }
}