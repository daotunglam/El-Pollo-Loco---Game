class Character extends MovableObj {


    // keyD = false;
    // keyLeft = false;
    // keyRight = false;
    // keySpace = false;
    // keyUp = false;

    y = 0;
    x = 100;
    width = 200 * 0.5;
    height = canvas.height * 0.5;
    speedAnimation = 1000 / 5;
    speedX = 10;
    speedY = 0;

    otherDirection = false; //the characters default direction is RIGHT.

    walking_back_sound = new Audio('sounds/walkRubberduck.mp3');
    walking_sound = new Audio('sounds/walk.mp3');
    jumping_sound = new Audio('sounds/jump.mp3');
    screaming_sound = new Audio('sounds/screaming.mp3')

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

        super.applyGravity(this.stackOf_DROPPING);
        // this.checkPressedKey(); //doesn't work, don't know why
        // this.animate();
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

        // this.dropAtGameStart()
        // this.idle();
        this.moveLeft();
        this.moveRight();
        this.jump();
        this.scream();
        this.die();
        // this.stomp();
        // this.bounce();
        // this.trow();

    }



    dropAtGameStart() {
        this.y = 0;
    }

    idle() {
        setTimeout(() => {
            setInterval(() => {
                super.animate(this.stackOf_IDLE);
            }, 1000 * 2);
        }, 3000);

        setTimeout(() => {
            setInterval(() => {
                super.animate(this.stackOf_LONG_IDLE);
            }, 1000 * 2);
        }, 9000);
    }

    // checkPressedKey() {
    //     setInterval(() => {
    //         if (this.world.keyboard.D) { this.keyD = true;} else { this.keyD = false;}
    //         if (this.world.keyboard.UP) { this.keyUp = true; } else { this.keyUp = false;}
    //         if (this.world.keyboard.LEFT) { this.keyLeft = true; } else { this.keyLeft = false;}
    //         if (this.world.keyboard.RIGHT) { this.keyRight = true; } else { this.keyRight = false;}
    //         if (this.world.keyboard.SPACE) { this.keySpace = true; } else { this.keySpace = false;}
    //     }, 16);
    // }


    moveLeft() {

        setInterval(() => {
            // this.walking_sound.pause();

            if (this.world.keyboard.LEFT
                && this.x > 0 //keep character not moving over left of map.
            ) {
                this.otherDirection = true;
                super.moveLeft();
                if (! super.isAboveGround()) {
                    super.animate(this.stackOf_WALKING);
                    this.playSound(this.walking_sound, 50 / 100);
                }
            } 
            // else{this.idle()}
            this.world.camera_x = -this.x + 100; //camera looks at 100px left.
        }, 1000 / 10);

    }


    moveRight() {

        setInterval(() => {
            // this.walking_sound.pause(); //agains the working of playSound in moveLeft

            if (this.world.keyboard.RIGHT
                && this.x < this.world.level.level_end_x //to keep character not moving over right of map
            ) {
                this.otherDirection = false;
                super.moveRight();
                if (! super.isAboveGround()) {
                    super.animate(this.stackOf_WALKING);
                    this.playSound(this.walking_sound, 50 / 100);

                }
            }
            this.world.camera_x = -this.x + 100; //camera looks at 100px left.
        }, 1000 / 10);

    }


    jump() {

        setInterval(() => {
            if (this.world.keyboard.UP
                && !super.isAboveGround()
            ) {
                super.jump();
                if (this.speedY >= 0) {
                    super.animate(this.stackOf_JUMPING)
                }
                this.playSound(this.jumping_sound, 10 / 100);
            }
        }, 1000 / 10);

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


    playSound(sound, volume) {
        sound.play();
        sound.volume = volume;
    }



    // animate() {


    //     setInterval(() => {

    //         this.walking_sound.pause();

    //         if (
    //             this.world.keyboard.RIGHT ||
    //             this.world.keyboard.LEFT
    //         ) {
    //             super.playAnimation(this.stackOf_WALKING);
    //             this.walking_sound.volume = 0.05;
    //             this.walking_sound.play();
    //         }

    //         if (this.world.keyboard.UP && super.isAboveGround()) {
    //             super.playAnimation(this.stackOf_JUMPING);
    //         }

    //         if (this.isHurt()) {
    //             super.playAnimation(this.stackOf_HURT)
    //         }

    //         if (this.isDead()) {
    //             if (
    //                 this instanceof Character
    //                 ||
    //                 this instanceof EndBoss
    //             ) {
    //                 this.playAnimation(this.stackOf_DEATH);
    //             }

    //             if (this instanceof Chicken) {
    //                 this.loadImg(img_DEATH)
    //             }
    //         }

    //     }, 1000 / 9);


    //     setInterval(() => {

    //         if (
    //             this.world.keyboard.RIGHT
    //             && this.x < this.world.level.level_end_x //to keep character not moving over right of map
    //         ) {
    //             this.otherDirection = false;
    //             super.moveRight();
    //         }

    //         if (
    //             this.world.keyboard.LEFT
    //             && this.x > 0 //keep character not moving over left of map.
    //         ) {
    //             this.otherDirection = true;
    //             super.moveLeft();
    //         }

    //         if (
    //             this.world.keyboard.UP &&
    //             !super.isAboveGround()
    //         ) {
    //             super.jump()
    //         }

    //         this.world.camera_x = -this.x + 100; //camera looks at 100px left.

    //     }, 60);


    // }




    // cancelMovability(){
    //     this.moveRight(){
    //         return;
    //     }
    // }



}