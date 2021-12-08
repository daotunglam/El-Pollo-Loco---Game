class MovableObj extends Drawableobj {


    speedX;
    speedY;
    speedAnimation;
    acceleration = 4;//increase dropping-speed every specific interval
    energy = 100;
    lastHit;

    currentImg = 0;





    // playAnimation(stackOfIMGS) {
    //     let i = this.currentImg % stackOfIMGS.length; //to keep i < stackOf_IMGS.length
    //     let path = stackOfIMGS[i];
    //     this.img = this.imgCache[path];
    //     this.currentImg++;
    // }
    animate(stackOfIMGS) {
        let i = this.currentImg % stackOfIMGS.length; //to keep i < stackOf_IMGS.length
        let path = stackOfIMGS[i];
        this.img = this.imgCache[path];
        this.currentImg++;
    }

    moveLeft() {
        this.x -= this.speedX;
    }
    moveRight() {
        this.x += this.speedX;
    }
    jump() {
        this.speedY = 30;
    }

    applyGravity() { //make objs drop on the ground
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration; //increase dropping-speed every 20ms
                // if (this.isAboveGround() && this.speedY < 0) {
                //     this.animate(stackOfIMGS)
                // }
            }
        }, 1000 / 10);
    }

    isAboveGround() {
        if (this instanceof Character) {
            return this.y < 180;
        }
        if (this instanceof ThrowableObj) {
            return this.y < 360
        }
        if (this instanceof EndBoss) {
            return this.y < 150
        }
    }

    isColliding(obj) {
        return this.x + this.width > obj.x
            &&
            this.y + this.height > obj.y
            &&
            this.x < obj.x
            &&
            this.y < obj.y + obj.height
    }

    // crash(otherobj){
    //     var myleft = this.x;
    //     var myright = this.x + (this.width);
    //     var mytop = this.y;
    //     var mybottom = this.y + (this.height);
    //     var otherleft = otherobj.x;
    //     var otherright = otherobj.x + (otherobj.width);
    //     var othertop = otherobj.y;
    //     var otherbottom = otherobj.y + (otherobj.height);
    //     var crash = true;
    //     if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
    //         crash = false;
    //     }
    //     return crash;
    // }

    hit() {
        if (this.energy > 0) {
            this.energy -= 1;
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //difference in ms
        timepassed = timepassed / 1000; //difference in s
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    kill(){
        this.energy = 0;
    }

}