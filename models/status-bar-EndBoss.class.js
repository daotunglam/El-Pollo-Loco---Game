class StatusBarEndBoss extends Drawableobj {


    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/60_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/80_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png',
    ]

    percentage = 100;

    width = 400 * 0.3;
    height = 100 * 0.3;

    world;




    constructor(){
        super();
        // this.x = 0;
        // this.y = 200;
        // super.loadImg('img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png')
        this.attachToEndBossHead();
        this.setPercentage(5000);
    }

    attachToEndBossHead(){
        setInterval(() => {
            this.x = this.world.level.endBoss.x
            this.y = this.world.level.endBoss.y
        }, 1000/10);
    }

    setPercentage(endBossEnergy){
        this.percentage = endBossEnergy/50;

        console.log(this.percentage)
        if (this.percentage == 100) {
            this.loadImg(this.IMAGES[5])
        }
        else if (this.percentage >= 80) {
            this.loadImg(this.IMAGES[4])
        }
        else if (this.percentage >= 60) {
            this.loadImg(this.IMAGES[3])
        }
        else if (this.percentage >= 40) {
            this.loadImg(this.IMAGES[2])
        }
        else if (this.percentage >= 20) {
            this.loadImg(this.IMAGES[1])
        }
        else {
            this.loadImg(this.IMAGES[0])
        }
    }

}