class MiniChicken extends MovableObj {

    x = 600;
    y = 200;
    width = 50;
    height = 50;
    speedX = 5;
    speedY = 0;

    world;

    stackOf_WALKING = [
        'img/3.Secuencias_Enemy_b�sico/Versi�n_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_b�sico/Versi�n_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_b�sico/Versi�n_pollito/3.Paso_izquierdo.png',
    ]

    stackOf_DEATH = [
        'img/3.Secuencias_Enemy_b�sico/Versi�n_pollito/4.Muerte.png',
    ]

    constructor(endBoss_x) {
        super();

        this.x = endBoss_x + 100;
        super.loadImg(this.stackOf_WALKING[0])
        super.loadImgs(this.stackOf_WALKING);
        super.loadImgs(this.stackOf_DEATH);

        super.applyGravity();

        this.action();
    }

    action() {
        setInterval(() => {
            if (super.isDead()) {
                super.animate(this.stackOf_DEATH);
                super.disappear();
            }
            else {
                if (!super.isAboveGround()) {
                    this.y = 370;
                    super.moveLeft();
                    super.animate(this.stackOf_WALKING)
                }
            }
        }, 1000 / 10);
    }

}