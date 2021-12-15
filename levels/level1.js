const level1 = new Level(


    new Audio('sounds/background_melody.mp3'), //don't give this only-obj the brackets [], it won't work.

    [
        new Bg('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1 - 720, 0),
        new Bg('img/5.Fondo/Capas/3.Fondo3/2.png', 1 - 720, 0),
        new Bg('img/5.Fondo/Capas/2.Fondo2/2.png', 1 - 720, 0),
        new Bg('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1 - 720, 0),

        new Bg('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0),
        new Bg('img/5.Fondo/Capas/3.Fondo3/1.png', 0, 0),
        new Bg('img/5.Fondo/Capas/2.Fondo2/1.png', 0, 0),
        new Bg('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0, 0),

        new Bg('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 - 1, 0),
        new Bg('img/5.Fondo/Capas/3.Fondo3/2.png', 720 - 1, 0),
        new Bg('img/5.Fondo/Capas/2.Fondo2/2.png', 720 - 1, 0),
        new Bg('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 720 - 1, 0),

        new Bg('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 2*(720 - 1), 0),
        new Bg('img/5.Fondo/Capas/3.Fondo3/1.png', 2*(720 - 1), 0),
        new Bg('img/5.Fondo/Capas/2.Fondo2/1.png', 2*(720 - 1), 0),
        new Bg('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 2*(720 - 1), 0),

        new Bg('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 3*(720 - 1), 0),
        new Bg('img/5.Fondo/Capas/3.Fondo3/2.png', 3*(720 - 1), 0),
        new Bg('img/5.Fondo/Capas/2.Fondo2/2.png', 3*(720 - 1), 0),
        new Bg('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 3*(720 - 1), 0),
    ],

    [
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 0, 0),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 720, 0),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 720*2, 0),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 720*3, 0),
    ],

    [
        new EndBoss(), //endBoss is the first of this array to be called easier
        
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ],

    [
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
        new ThrowableObj,
    ],

    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
    ]

);