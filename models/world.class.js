class World {

    cvs;
    ctx;
    keyboard;
    level = level1;
    character = new Character();
    statusBar = new StatusBar();
    statusBarEndBoss = new StatusBarEndBoss();
    statusBarNrBottle = new StatusBarNrBottle();
    statusBarNrCoin = new StatusBarNrCoin();
    throwingBottles = [];
    camera_x;





    constructor(canvas, keyboard) { //creates everything in canvas
        this.cvs = canvas; // check later with: this.cvs = document.createElement('canvas'),
        this.ctx = canvas.getContext('2d'); //creat a context for the world
        this.keyboard = keyboard;
        this.draw(); //draw everything for the world
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
        this.statusBar.world = this;
        this.statusBarEndBoss.world = this;
        this.statusBarNrBottle.world = this;
        this.statusBarNrCoin.world = this;
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
        });
        this.level.coins.forEach(coin => {
            coin.world = this;
        });
    }


    startGame() {
            this.level.bg_melody.play();
            this.level.clouds.forEach(cloud => { cloud.action() });
            this.character.action();
            this.level.enemies.forEach(enemy => { enemy.action() });
    }
    pauseGame(){
        this.pauseCharacter();
        this.pauseEnemies();
        this.pauseEndBoss();
        this.pauseClouds();
        this.pauseBgMelody();
    }
    pauseCharacter(){
        clearInterval(this.character.primaryAction);
        clearInterval(this.character.j)
        clearInterval(this.character.ju)
        clearInterval(this.character.jd)
    }
    pauseEnemies(){
        this.level.enemies.forEach(enemy =>{
            clearInterval(enemy.primaryAction)
            clearInterval(enemy.primaryAction2)
        });
    }
    pauseEndBoss(){
        let eBoss = this.level.enemies[0];
        clearInterval(eBoss.gBirth);
        clearTimeout(eBoss.rF)
        clearTimeout(eBoss.agr)
        clearTimeout(eBoss.atk)
        clearTimeout(eBoss.rB)
        clearTimeout(eBoss.scr)
    }
    pauseClouds(){
        this.level.clouds.forEach(cloud =>{
            clearInterval(cloud.primaryAction)
        })
    }
    pauseBgMelody(){
        this.level.bg_melody.pause();
    }
    gameoverScreen(){
        document.getElementById('gameoverScreen').classList.remove('d-none');
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
        this.addToMap(this.level.allBottlesOnGround);
        this.addToMap(this.level.coins);
        this.addToMap(this.throwingBottles);
        this.addToMap(this.statusBarEndBoss);

        this.ctx.translate(-this.camera_x, 0)
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarNrBottle);
        this.addToMap(this.statusBarNrCoin);
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

            if (obj instanceof Drawableobj) {
                this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
            }
            if (obj instanceof Text) {
                this.ctx.font = obj.font;
                this.ctx.fillText(obj.text, obj.x, obj.y);
                this.addBottleImgNextToNrBottle();
                this.addCoinImgNextToNrCoin();
            }

            // obj.drawFrame(this.ctx)

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
    addBottleImgNextToNrBottle() {
        let bottleImg = new Image();
        bottleImg.src = 'img/6.botella/1.Marcador.png';
        this.ctx.drawImage(bottleImg, 2, 52, 45, 40);
    }
    addCoinImgNextToNrCoin() {
        let coinImg = new Image();
        coinImg.src = 'img/8.Coin/Moneda2.png';
        this.ctx.drawImage(coinImg, -5, 80, 60, 60);
    }

}