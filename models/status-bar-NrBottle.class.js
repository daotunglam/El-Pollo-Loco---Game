class StatusBarNrBottle extends Text {



    x = 60;
    y = 86;

    world;


    constructor() {
        super();
        // this.addBottleImg();
        this.showNrBottle();
    }

    //WHY it doesn't work???
    addBottleImg() {
        setInterval(() => {
            let bottleImg = new Image();
            bottleImg.src = 'img/6.botella/1.Marcador.png';
            this.world.ctx.drawImage(bottleImg, 10, 50, 40, 40)
        }, 16);
    }

    showNrBottle() {
        setInterval(() => {
            this.text = this.world.character.nrBottleCanTrow;
            this.world.ctx.fillStyle = 'white';
        }, 1000 / 10);
    }

}