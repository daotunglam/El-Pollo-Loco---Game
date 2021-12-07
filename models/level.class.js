class Level {

    level_end_x = 3 * 720; // the end of the map
    
    bg_melody;

    bgs;
    clouds;
    enemies;
    // throwableObj;
    endBoss;

    constructor(
        bg_melody,
        bgs,
        clouds,
        enemies,
        // throwableObj,
        endBoss,
    ) {
        this.bg_melody = bg_melody;
        this.bgs = bgs;
        this.clouds = clouds;
        this.enemies = enemies;
        // this.throwableObj = throwableObj;
        this.endBoss = endBoss;
    }
}