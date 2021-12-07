class Chicken extends MovableObj {

    x = 400 + Math.random() * 500; //each chicken is drawed in a random coordinate 300px far from canvas-left
    y = 480 - 110;
    width = 100 * 0.5;
    height = 100 * 0.5;
    speedX = 0.15 + Math.random() * 0.8;
    speedY = 0;
    speedAnimation = 1000 / 24;

    stackOf_WALKING = [
        'img/3.Secuencias_Enemy_b�sico/Versi�n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_b�sico/Versi�n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_b�sico/Versi�n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ]

    stackOf_DEATH = 'img/3.Secuencias_Enemy_b�sico/Versi�n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png';


    constructor() { //creating and initializing objects created within a class

        super();
        super.loadImg(this.stackOf_WALKING[0]);
        super.loadImgs(this.stackOf_WALKING);

        setInterval(() => {
            super.moveLeft();
        }, 16);

        setInterval(() => {
            super.animate(this.stackOf_WALKING);
        }, 1000 / 9 / this.speedX)
        
        this.die();

    }


    // action() {
    //     this.moveLeft();
    //     this.die();
    // }
    // moveleft() {
    //     setInterval(() => {
    //         super.moveLeft();
    //     }, 16);
    //     setInterval(() => {
    //         super.animate(this.stackOf_WALKING);
    //     }, 1000 / 9 / this.speedX)
    // }


    die() {
        setInterval(() => {
            if (this.isDead()) {
                super.loadImg(this.stackOf_DEATH);
            }
        }, 1000 / 10);
    }



}