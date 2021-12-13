class Coin extends Drawableobj{
    
    width = 60;
    height = 60;
    x = 200 + Math.random() * 720 * 4;
    y = 370 - Math.random() * 240;
    
    world;

    getCoin_sound = new Audio('sounds/getCoin.mp3');

    constructor(){
        super().loadImg('img/8.Coin/Moneda2.png')
    }
}