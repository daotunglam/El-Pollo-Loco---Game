class EndBoss extends MovableObj {

    x = 720 * 4 - 300;
    y = 150;
    width = 480 * 0.4;
    height = 720 * 0.4;
    speedX = 10;

    energy = 100;

    world;

    dst;//distance between endBoss and Character


    walking_sound = new Audio('sounds/endBossRun.mp3');
    attack_sound = new Audio('sounds/endBossAttack.mp3')
    dead_sound = new Audio('sounds/endBossDead.mp3');
    birthTime_sound = new Audio('sounds/givingBirthTime.mp3');
    giveBirth_sound = new Audio('sounds/giveBirth.mp3')


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


    move;
    rF;//runForward
    agr;// angry
    atk;// attack;
    rB;// moveRight
    scr;//scream
    d;//die
    gB;//giveBirth


    constructor() {

        super();
        super.loadImg(this.stackOf_WALKING[1]);
        super.loadImgs(this.stackOf_WALKING);
        super.loadImgs(this.stackOf_ANGRY);
        super.loadImgs(this.stackOf_ATTACK);
        super.loadImgs(this.stackOf_HURT);
        super.loadImgs(this.stackOf_DEATH);

        this.action()

    }


    /**
     * endBoss changes movements,
     * when endBoss isHurt too much, energy under 50, runBack to createMiniChicken.
     */
    action() {
        super.applyGravity();
        

        this.move = setInterval(() => {

            this.rF = setInterval(() => {
                if (super.isDead()) { this.die() }
                else if (super.isHurt()) { this.scream() }
                else { this.runForward() }
            }, 1000 / 10);

            setTimeout(() => {
                clearInterval(this.rF);
                this.agr = setInterval(() => {
                    if (super.isDead()) { this.die() }
                    else if (super.isHurt()) { this.scream() }
                    else { this.angry() }
                }, 1000 / 10);
            }, 1000 * 2);

            setTimeout(() => {
                clearInterval(this.agr);
                this.atk = setInterval(() => {
                    if (super.isDead()) { this.die() }
                    else if (super.isHurt()) { this.scream() }
                    else { this.attack() }
                }, 1000 / 10);
            }, 1000 * 4);

            setTimeout(() => {
                clearInterval(this.atk);
                this.rB = setInterval(() => {
                    if (super.isDead()) { this.die() }
                    else if (super.isHurt()) { this.scream() }
                    else { this.runBack() }
                }, 1000 / 10);
            }, 1000 * 6);

            setTimeout(() => {
                clearInterval(this.rB)
                if (super.isHurt()) { this.scream() }
            }, 1000 * 9);

        }, 1000 * 10);

        this.gB = setInterval(() => {
            if (super.isHurt()) { this.scream() }
            if (super.isDead()) { this.die() }
            else { 
                if (this.energy <= 50) {
                    clearInterval(this.move);
                    if(this.x < 720*4 - 240){
                        this.x += 30;
                        this.birthTime_sound.play();
                    }
                    this.createMiniChicken();
                }
             }
        }, 1000 / 1);
    }


    die() {
        this.animate(this.stackOf_DEATH)
        this.dead_sound.play();
    }

    scream() {
        this.animate(this.stackOf_HURT);
        this.world.statusBarEndBoss.setPercentage(this.energy)
    }




    runForward() {
        if (this.x > 720 * 3) {
            super.moveLeft();
            super.animate(this.stackOf_WALKING);
            this.walking_sound.play();
        }
    }

    angry() {
        this.x -= 0;
        super.animate(this.stackOf_ANGRY);
    }

    attack() {
        if (!super.isAboveGround()) {
            super.jump();
        }
        this.moveLeft();
        super.animate(this.stackOf_ATTACK);
        this.attack_sound.play();
    }

    runBack() {
        super.moveRight()
        super.animate(this.stackOf_WALKING)
    }





    createMiniChicken() {
        if (!super.isAboveGround()) {
            super.jump();
            this.world.level.enemies.push(new MiniChicken(this.x))
            this.giveBirth_sound.play();
        }
    }





}