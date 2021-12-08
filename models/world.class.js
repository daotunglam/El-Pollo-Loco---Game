class World {

    cvs;
    ctx;
    keyboard;
    level = level1;
    character = new Character();
    statusBar = new StatusBar();
    throwableObjs = [];
    camera_x;





    constructor(canvas, keyboard) { //creates everything in canvas
        this.cvs = canvas; // check later with: this.cvs = document.createElement('canvas'),
        this.ctx = canvas.getContext('2d'); //creat a context for the world
        this.keyboard = keyboard;
        this.draw(); //draw everything for the world
        this.setWorld();
        // this.level.bg_melody.play();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.statusBar.world = this;
        this.level.enemies.forEach(chicken => {
           chicken.world = this; 
        });
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjs();
        }, 200);
    }

    checkThrowObjs() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObj(this.character.x, this.character.y);
            this.throwableObjs.push(bottle);
            bottle.world = this;
        }
    }



    draw() {

        this.delContext();

        this.ctx.translate(this.camera_x, 0)
        this.addAllToWorld();
        this.ctx.translate(-this.camera_x, 0)

        // call draw() every 16ms:
        let self = this;
        requestAnimationFrame(() => {
            self.draw(); //"this.draw" doesn't work in this case, no reasion.
        });

    }

    delContext() {
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
    }

    addAllToWorld() {

        this.addToMap(this.level.bgs);
        this.addToMap(this.level.clouds);
        this.addToMap(this.level.enemies);
        this.addToMap(this.level.endBoss);
        this.addToMap(this.throwableObjs);
        
        this.ctx.translate(-this.camera_x, 0)
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0)
        
        this.addToMap(this.character); //draw the character in a new coordinate

    }

    addToMap(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(o => {
                this.addToMap(o);
            });
        } else {

            if (obj.otherDirection) {
                this.flipImg(obj);
            }

            this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);

            obj.drawFrame(this.ctx)

            if (obj.otherDirection) {
                this.flipImgBack(obj)
            }

        }
    }

    flipImg(obj) {
        this.ctx.save();
        this.ctx.translate(obj.width, 0);
        this.ctx.scale(-1, 1);
        obj.x = obj.x * -1;
    }
    flipImgBack(obj) {
        obj.x = obj.x * -1;
        this.ctx.restore();
    }

    checkCollisions() {
        // setInterval(() => {
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy) && !enemy.isDead()) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }


                this.throwableObjs.forEach(to =>{
                    if(enemy.isColliding(to) && !enemy.isDead() ){
                        console.log(to, " hits ", enemy);
                        enemy.kill();

                    }
                });
            });
        // }, 1000);
    }

}