class StatusBarNrCoin extends Text {



    x = 60;
    y = 118;

    world;


    constructor() {
        super();
        // this.addBottleImg();
        this.showNrCoin();
    }

    //WHY it doesn't work???
    addBottleImg() {
        setInterval(() => {
            let coinImg = new Image();
            coinImg.src = 'img/8.Coin/Moneda1.png';
            this.world.ctx.drawImage(coinImg, 10, 50, 40, 40)
        }, 16);
    }

    showNrCoin() {
        setInterval(() => {
            this.text = this.world.character.nrCoin;
            this.world.ctx.fillStyle = 'white';
        }, 1000 / 10);
    }

}