class EndBoss extends MovableObj {

    x = 700;
    y = 150;
    width = 480 * 0.4;
    height = 720 * 0.4;
    speedX = 15;


    stackOf_WALKING = [
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/1.Caminata/G4.png',
    ];
    stackOf_ANGRY = [
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/1.Alerta/G12.png',
    ];
    stackOf_ATTACK = [
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/2.Ateci�n-ataque/2.Ataque/G20.png',
    ];
    stackOf_HURT = [
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/3.Herida/G23.png',
    ];
    stackOf_DEATH = [
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigant�n-Do�a_Gallinota-/4.Muerte/G26.png',
    ];


    mlf;//moveLeft
    agr;// angry
    atk;// attack;
    mrt;// moveRight


    constructor() {

        super();
        super.loadImg(this.stackOf_WALKING[1]);
        super.loadImgs(this.stackOf_WALKING);
        super.loadImgs(this.stackOf_ANGRY);
        super.loadImgs(this.stackOf_ATTACK);
        super.loadImgs(this.stackOf_HURT);
        super.loadImgs(this.stackOf_DEATH);

        super.applyGravity();

        setInterval(() => {
            this.changeMovement();
        }, 10000);

    }


    changeMovement() {

        this.runForward();

        setTimeout(() => {
            clearInterval(this.mlf);
            this.angry();
        }, 2000);

        setTimeout(() => {
            clearInterval(this.agr);
            this.attack();
        }, 4000);

        setTimeout(() => {
            clearInterval(this.atk);
            this.runBack();
        }, 6000);

        setTimeout(() => {
            clearInterval(this.mrt)
        }, 10000);

    }


    runForward() {
        this.mlf =
            setInterval(() => {
                if (this.x > 0) {
                    super.moveLeft();
                    super.animate(this.stackOf_WALKING);
                }
            }, 1000 / 10);
    }

    angry() {
        this.agr =
            setInterval(() => {
                this.x -= 0;
                super.animate(this.stackOf_ANGRY);
            }, 1000 / 10);
    }

    attack() {
        this.atk =
            setInterval(() => {
                if (!super.isAboveGround()) {
                    super.jump();
                }
                this.moveLeft();
                super.animate(this.stackOf_ATTACK);
            }, 1000 / 10);
    }

    runBack() {
        this.mrt =
            setInterval(() => {
                super.moveRight()
                super.animate(this.stackOf_WALKING)
            }, 1000 / 10);
    }

}