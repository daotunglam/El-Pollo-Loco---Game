class Drawableobj {


    img;
    imgCache = {}; //contains all imgPaths of an Obj 
    x;
    y;
    height;
    width;


    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * Adding imgs's paths in the JSON imgCache.
     * This method agains moveable-objs animations blink.
     * It's better than below method:
     *      this.loadImg(stackOfIMGS[this.currentImg])
     * because doesn't create new Image, what makes the animation blink.
     * @param {array} stackOfIMGS arry contains the imgs's paths of a specific animation
     */
    loadImgs(stackOfIMGS) {
        stackOfIMGS.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        })
    }




    drawFrame(ctx) {
        if (
            this instanceof Character ||
            this instanceof Chicken || 
            this instanceof ThrowableObj || 
            this instanceof EndBoss
        ) {
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

}