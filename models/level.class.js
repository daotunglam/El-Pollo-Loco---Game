class Level {

    level_end_x = 720 * 4; // the end of the map
    
    bg_melody;

    bgs;
    clouds;
    enemies;
    endBoss;
    allBottlesOnGround;
    coins;

    constructor(
        bg_melody,
        bgs,
        clouds,
        enemies,
        allBottlesOnGround,
        coins,
    ) {
        this.bg_melody = bg_melody;
        this.bgs = bgs;
        this.clouds = clouds;
        this.enemies = enemies;
        this.endBoss = enemies[0];
        this.allBottlesOnGround = allBottlesOnGround;
        this.coins = coins;
    }
}