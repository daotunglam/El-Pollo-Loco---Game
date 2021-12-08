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

    stackOf_DEATH = ['img/3.Secuencias_Enemy_b�sico/Versi�n_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'];

    world;

    constructor() { //creating and initializing objects created within a class

        super();
        super.loadImg(this.stackOf_WALKING[0]);
        super.loadImgs(this.stackOf_WALKING);
        super.loadImgs(this.stackOf_DEATH);

        this.action();

        this.die();

    }

    isJumping() {
        //TODO
        return false;
    }


    action() {

        setInterval(() => {
            if (!this.isDead()) {
                super.moveLeft();
            }
        }, 16);

        setInterval(() => {
            if (this.isDead()) {
                super.animate(this.stackOf_DEATH);
            }
            else if (this.isJumping()) {

            } else {
                super.animate(this.stackOf_WALKING);
            }

        }, 1000 / 10 / this.speedX)

    }


    die() {
        // setInterval(() => {
        //     this.world.throwableObjs.forEach(bottle => {
        //         console.log(this.is(bottle))
        //     })
        // }, 2000);
        // setInterval(() => {
        //     if (
        //         this.world.throwableObjs.forEach(bottle => {
        //             this.crash(bottle)
        //         })
        //     ) {
        //         super.loadImg(this.stackOf_DEATH);
        //     }
        // }, 1000 / 10);
    }

    // isColliding(bottle) {
    //     return (
    //         this.x < bottle.x && bottle.x < this.x + this.width
    //         && (
    //             (this.y < bottle.y && bottle.y < this.y + this.width) ||
    //             (this.y < bottle.y + bottle.width && bottle.y + bottle.width < this.y + this.width)
    //         )
    //     )
    //         ||
    //         (
    //             this.x < bottle.x + bottle.width && bottle.x + bottle.width < this.x + this.width
    //             && (
    //                 (this.y < bottle.y && bottle.y < this.y + this.width) ||
    //                 (this.y < bottle.y + bottle.width && bottle.y + bottle.width < this.y + this.width)
    //             )
    //         )
    // }



}