class Chicken extends MovableObj {

    x = 400 + Math.random() * (720 * 4); //each chicken is drawed in a random coordinate 300px far from canvas-left
    y = 480 - 130;
    width = 100 * 0.7;
    height = 100 * 0.7;
    speedX = 0.15 + Math.random() * 10;
    speedY = 0;
    speedAnimation = 1000 / 24;
    energy = 1;

    stackOf_WALKING = [
        'img/3.Secuencias_Enemy_b�sico/Versi�n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_b�sico/Versi�n_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_b�sico/Versi�n_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ]

    stackOf_DEATH = ['img/3.Secuencias_Enemy_b�sico/Versi�n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'];

    world;

    constructor() { //creating and initializing objects created within a class

        super();
        super.loadImg(this.stackOf_WALKING[0]);
        super.loadImgs(this.stackOf_WALKING);
        super.loadImgs(this.stackOf_DEATH);

        this.action();

    }

    action() {

        setInterval(() => {
            if (!this.isDead()) {
                super.moveLeft();
            }
            else if (this.isJumping()) {

            }
            else {
                this.die();
            }
        }, 1000 / 10);

        setInterval(() => {
            if (!this.isDead()) {
                super.animate(this.stackOf_WALKING);
            }
        }, 1000 / this.speedX);
    }


    isJumping() {
        //TODO
        return false;
    }


    die() {
        super.animate(this.stackOf_DEATH);
        super.disappear();
    }




}