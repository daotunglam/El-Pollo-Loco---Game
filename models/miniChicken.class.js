class MiniChicken extends MovableObj{

    x = 600;
    y = 480 / 2;
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

    constructor(){
        super();

        super.loadImg(this.stackOf_WALKING[0])
        super.loadImgs(this.stackOf_WALKING);
        super.loadImgs(this.stackOf_DEATH);

        super.applyGravity();

        this.action();
    }

    action(){
        setInterval(() => {
            if(!super.isAboveGround()){
                super.moveLeft();
                super.animate(this.stackOf_WALKING)
            }
        }, 1000/10);
    }
}