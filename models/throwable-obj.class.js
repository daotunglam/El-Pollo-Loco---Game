class ThrowableObj extends MovableObj {



    width = 40;
    height = 40;
    x = 200 + Math.random() * 720 * 4;
    y = 370 - Math.random() * 240;
    speedX = 20;
    speedY = 20;

    world;

    throw_sound = new Audio('sounds/throw.mp3')
    bottleBreak_sound = new Audio('sounds/bottleBreak.mp3')

    stackOf_TROW = [
        'img/6.botella/Rotaci�n/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotaci�n/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotaci�n/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotaci�n/Mesa de trabajo 1 copia 6.png',
    ]

    stackOf_BREAK = [
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotaci�n/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ]


    constructor() {
        super();
        super.loadImg('img/6.botella/2.Botella_enterrada1.png');
        super.loadImgs(this.stackOf_TROW);
        super.loadImgs(this.stackOf_BREAK);
    }



    isThrown(x, y, otherDirection) {
        
        this.x = x;
        this.y = y;
        
        setInterval(() => {
            super.applyGravity(this.stackOf_TROW); //only throwing bottle can drop
            if (otherDirection) {
                super.moveLeft();
            }
            else {
                super.moveRight();
            }
            super.animate(this.stackOf_TROW);
            this.collidesEnemy();
            this.collidesGround();
        }, 1000 / 10);
        this.throw_sound.play();

    }

    collidesEnemy() {
        for (let i = 0; i < this.world.level.enemies.length; i++) {
            const enemy = this.world.level.enemies[i];

            if (super.isColliding(enemy) && !enemy.isDead()) {
                enemy.hit();
                this.break();
            }
        }
    }

    collidesGround(){
        if (!super.isAboveGround() && this.y < 480) {
            this.break()
        }
    }

    break() {
            this.bottleBreak_sound.play();
            super.animate(this.stackOf_BREAK);
            this.speedX = 0;
            super.disappear();
    }



}