class Character extends MovableObj {


    idl; //idle
    longIdl; //longIdle
    nrBottleCanTrow = 0;
    nrCoin = 0;


    y = 0;
    x = 100;
    width = 200 * 0.5;
    height = canvas.height * 0.5;
    speedAnimation = 1000 / 5;
    speedX = 10;
    speedY = 0;

    energy = 5;

    otherDirection = false; //the characters default direction is RIGHT.

    walking_sound = new Audio('sounds/walk.mp3');
    jumping_sound = new Audio('sounds/jump.mp3');
    screaming_sound = new Audio('sounds/screaming.mp3')
    dangerZone_sound = new Audio('sounds/dangerZone.mp3');
    stomp_sound = new Audio('sounds/rubberChicken.mp3');
    getBottle_sound = new Audio('sounds/getBottle.mp3');
    getCoin_sound = new Audio('sounds/getCoin.mp3');

    stackOf_IDLE = [
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-10.png',
    ]

    stackOf_LONG_IDLE = [
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/LONG_IDLE/I-20.png',
    ]

    stackOf_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correcci�n/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/2.Secuencia_caminata/W-26.png',
    ]

    stackOf_DROPPING = [
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-39.png',
    ]

    stackOf_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-35.png',
    ]

    stackOf_DROPPING = [
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-39.png',
        // 'img/2.Secuencias_Personaje-Pepe-correcci�n/3.Secuencia_salto/J-40.png',
    ]

    stackOf_HURT = [
        'img/2.Secuencias_Personaje-Pepe-correcci�n/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/4.Herido/H-43.png',
    ]

    stackOf_DEATH = [
        'img/2.Secuencias_Personaje-Pepe-correcci�n/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correcci�n/5.Muerte/D-57.png',
    ]

    world; //this declaration is in order to control keyboard of class world



    constructor() { //creating and initializing objects created within a class
        super();

        super.loadImg('img/2.Secuencias_Personaje-Pepe-correcci�n/1.IDLE/IDLE/I-1.png');
        super.loadImgs(this.stackOf_IDLE);
        super.loadImgs(this.stackOf_LONG_IDLE);
        super.loadImgs(this.stackOf_WALKING);
        super.loadImgs(this.stackOf_JUMPING);
        super.loadImgs(this.stackOf_DROPPING);
        super.loadImgs(this.stackOf_HURT);
        super.loadImgs(this.stackOf_DEATH);

        this.action();
    }


    // drawFrame(ctx) {
    //     ctx.beginPath();
    //     ctx.lineWidth = "1";
    //     ctx.strokeStyle = "blue";
    //     ctx.rect(this.x +20, this.y + 90, this.width - 40, this.height - 100);
    //     ctx.stroke();
    // }




    action() {
        super.applyGravity();
        this.moveCameraWith();

        this.collectBottle();
        this.collectCoin();

        this.runFaster();

        this.moveLeft();
        this.moveRight();
        this.jump();

        this.stomp();
        this.throw();

        this.collidesEnemy();
        this.scream();
        this.die();

        this.idle();

        this.playDangerMusic();

    }

    moveCameraWith() {
        setInterval(() => {
            if (this.x < this.world.level.level_end_x - 720 + 100) {
                this.world.camera_x = -this.x + 100; //camera looks at 100px left.
            }
            else {
                this.world.camera_x = -(this.world.level.level_end_x - 720);
            }
        }, 1000 / 10);
    }


    collectBottle() {
        setInterval(() => {
            let bts = this.world.level.allBottlesOnGround
            bts.forEach(bt => {
                if (this.isColliding(bt)) {
                    this.nrBottleCanTrow ++;
                    this.world.level.allBottlesOnGround.splice(bts.indexOf(bt), 1);
                    this.getBottle_sound.play()
                }
            });
        }, 1000 / 10);
    }
    collectCoin() {
        setInterval(() => {
            let coins = this.world.level.coins
            coins.forEach(coin => {
                if (this.isColliding(coin)) {
                    this.nrCoin ++;
                    this.world.level.coins.splice(coins.indexOf(coin), 1);
                    this.getCoin_sound.play()
                }
            });
        }, 1000 / 10);
    }

    runFaster() {
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.speedX = 25;
            } else {
                this.speedX = 10;
            }
        }, 1000 / 10);
    }


    moveLeft() {

        setInterval(() => {

            if
                (this.world.keyboard.LEFT
                && this.x > 0 //keep character not moving over left of map.
            ) {
                this.otherDirection = true;
                super.moveLeft();
                if (! super.isAboveGround()) {
                    super.animate(this.stackOf_WALKING);
                    this.playSound(this.walking_sound, 50 / 100);
                }
            }

        }, 1000 / 10);
    }


    moveRight() {

        setInterval(() => {
            if
                (this.world.keyboard.RIGHT
                && this.x < this.world.level.level_end_x //to keep character not moving over right of map
            ) {
                this.otherDirection = false;
                super.moveRight();
                if (! super.isAboveGround()) {
                    super.animate(this.stackOf_WALKING);
                    this.playSound(this.walking_sound, 50 / 100);
                }
            }

        }, 1000 / 10);

    }


    jump() {

        setInterval(() => {
            if (this.world.keyboard.UP
                && !super.isAboveGround()
            ) {
                super.jump();
                this.playSound(this.jumping_sound, 10 / 100);
            }
        }, 1000 / 10);

        setInterval(() => {
            if (this.speedY >= 0) {
                super.animate(this.stackOf_JUMPING)
            }
        }, 1000 / 5);

        setInterval(() => {
            if (this.isAboveGround() && this.speedY < 0) {
                this.animate(this.stackOf_DROPPING)
            }
        }, 1000 / 5);
    }


    stomp() {
        setInterval(() => {

            let e = this.world.level.enemies;
            for (let i = 0; i < e.length; i++) {

                const enemy = e[i];

                let characterBottom = this.y + (this.height);
                let enemyTop = enemy.y;

                if (super.isColliding(enemy) &&
                    this.isAboveGround() &&
                    this.speedY < 0 &&
                    characterBottom - enemyTop
                ) {
                    enemy.hit();
                    this.nrBottleCanTrow++;
                    this.stomp_sound.play();
                }

            }

        }, 1000 / 10);
    }

    throw() {
        setInterval(() => {
            if (this.world.keyboard.D) {
                if (this.nrBottleCanTrow > 0) {
                    let bottle = new ThrowableObj()
                    this.world.throwingBottles.push(bottle);
                    bottle.world = this.world;
                    bottle.isThrown(this.x +30, this.y + this.height/2, this.otherDirection);

                    this.nrBottleCanTrow --;
                }
            }
        }, 1000 / 5);
    }

    collidesEnemy(){
        setInterval(() => {
            for (let i = 0; i < this.world.level.enemies.length; i++) {
                const enemy = this.world.level.enemies[i];
                if (super.isColliding(enemy) && !enemy.isDead()) {
                    super.hit();
                    this.world.statusBar.setPercentage(this.energy*20);
                }
            }
        }, 1000/10);
    }

    scream() {
        setInterval(() => {
            if (this.isHurt()) {
                super.animate(this.stackOf_HURT)
                this.playSound(this.screaming_sound, 10 / 100);
            }
        }, 1000 / 10);
    }


    die() {
        setInterval(() => {
            if (this.isDead()) {
                super.animate(this.stackOf_DEATH)
            }
        }, 1000 / 10);
    }


    isIdle() {
        return !this.world.keyboard.LEFT &&
            !this.world.keyboard.RIGHT &&
            !this.world.keyboard.D &&
            !this.world.keyboard.UP &&
            !this.world.keyboard.SPACE &&
            !this.isHurt() &&
            !this.isDead()
    }

    idle() {
        // setInterval(() => {

        //     clearInterval(this.longIdl)
        this.idl = setInterval(() => {
            if (this.isIdle()) {
                super.animate(this.stackOf_IDLE);
            }
        }, 1000 / 10);

        //     setTimeout(() => {
        //         clearInterval(this.idl)
        //         this.longIdl = setInterval(() => {
        //             super.animate(this.stackOf_LONG_IDLE);
        //         }, 1000 / 10);
        //     }, 5000);

        // }, 10000);
    }


    playSound(sound, volume) {
        sound.play();
        sound.volume = volume;
    }


    playDangerMusic() {
        //TODO
        return false
    }
}