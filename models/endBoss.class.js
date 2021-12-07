class EndBoss extends MovableObj {

    x = 720 * .5;
    y = 480 - 330;
    width = 480 * 0.4;
    height = 720 * 0.4;
    speedX = 5;
    speedY = 0;

    movementTimeout = 200;


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



    constructor() {

        super();
        super.loadImg(this.stackOf_WALKING[1]);
        super.loadImgs(this.stackOf_WALKING)


        // setInterval(() => {
        //     this.changeMovement();
        //     this.stopCurrentMovement();
        // }, 5000);

    }


    changeMovement() {
        setTimeout(() => {
            setInterval(() => {
                super.moveLeft();
                super.playAnimation(this.stackOf_WALKING);
            }, 120);
        }, this.movementTimeout);
    }

    stopCurrentMovement() {
        this.x = 720 * .5;
        this.y = 480 - 330;
        this.width = 480 * 0.4;
        this.height = 720 * 0.4;
        this.speedX = 5;
        this.speedY = 0;
    }

}