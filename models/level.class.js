class Level {

    level_end_x = 720 * 4; // the end of the map
    
    bg_melody;

    bgs;
    clouds;
    enemies;
    endBoss;
    // throwableObj;

    constructor(
        bg_melody,
        bgs,
        clouds,
        enemies,
        // throwableObj,
    ) {
        this.bg_melody = bg_melody;
        this.bgs = bgs;
        this.clouds = clouds;
        this.enemies = enemies;
        this.endBoss = enemies[enemies.length - 1] //endBoss is the last enemy
        // this.throwableObj = throwableObj;
    }
}