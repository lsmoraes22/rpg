function init(level){
    anuncio();
    switch(level) {
        case 'game_over':
            if(!isNull(music)){music.stop();music = null;}
            resetObjects();
            music = new sound({audioName:"game_over"})
            music.musicPlay();
            backgrounds = [ new background({imgName: 'game-over'}),]
            play_agains = [ new play_again({x:140, y:240}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        case 0:
            //if(!isNull(music)){music.stop();}
            resetObjects();
            scenario.cMin=0;
            scenario.cMax=2;
            scenario.rMin=-1;
            scenario.rMax=0;
            backgrounds = [
              new background({x:0,y:0*(scenario.rHeight),imgName:'branco'})
            ]
            texts = [
              new text({x:0,y:150,text:'in a kingdom far far away',height:80}),
            ]
            texts.forEach((item, i) => {
                item.load();
            });

            /*
            tiles_layer1 = [
              new map({x:7*(gridSize/2), y:6*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
              new map({x:8*(gridSize/2), y:6*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
              new map({x:9*(gridSize/2), y:6*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
              new map({x:10*(gridSize/2), y:6*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
              new map({x:11*(gridSize/2), y:6*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
              new map({x:12*(gridSize/2), y:6*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
            ]
            tiles_layer0 = [
              new map({x:7*(gridSize/2), y:7*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
              new map({x:8*(gridSize/2), y:7*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
              new map({x:9*(gridSize/2), y:7*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
              new map({x:10*(gridSize/2), y:7*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
              new map({x:11*(gridSize/2), y:7*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
              new map({x:12*(gridSize/2), y:7*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
            ]
            arrows = [ new arrow({x:200,y:200}), ]

            Principal = new principal({x:50,y:150, tilesetName: 'greenGoblin'});
            btns = create_joystick('b');
            /**/
        break;
    }
}
function create_joystick(color){
    var refjst = {x:0,y:100}
    var sBtn = 65; //comprimento curto
    var lBtn = 95; //comprimento longo
    btns = [
        new btn_a({x:refjst.x+canvas.width-170,y:refjst.y+130, color:color}),
        new btn_upleft({x:refjst.x,y:refjst.y, color:color}),
        new btn_up({x:refjst.x+sBtn+sBtn,y:refjst.y, color:color}),
        new btn_upright({x:refjst.x+lBtn+lBtn,y:refjst.y, color:color}),
        new btn_left({x:refjst.x,y:refjst.y+sBtn+sBtn, color:color}),
        new btn_center({x:refjst.x+sBtn+sBtn,y:refjst.y+sBtn+sBtn, color:color}),
        new btn_right({x:refjst.x+lBtn+lBtn,y:refjst.y+sBtn+sBtn, color:color}),
        new btn_downleft({x:refjst.x,y:refjst.y+lBtn+lBtn, color:color}),
        new btn_down({x:refjst.x+sBtn+sBtn,y:refjst.y+lBtn+lBtn, color:color}),
        new btn_downright({x:refjst.x+lBtn+lBtn,y:refjst.y+lBtn+lBtn, color:color}),
    ];
    return btns;
}
function lava1_create(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(new lava({x: (x+i)*gridSize, y:y*gridSize, type: 'surface'}));
    }
    return arr;
}
function lava2_create(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(new lava({x: (x+i)*gridSize, y:y*gridSize, type: 'deep'}));
    }
    return arr;
}
function water1_create(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(new water1({x: (x+i)*gridSize, y:y*gridSize}));
    }
    return arr;
}
function water2_create(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(new water2({x: (x+i)*gridSize, y:y*gridSize}));
    }
    return arr;
}
function create_brownHill1(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==0 ?
                new map({x:x*gridSize, y:(y+i)*gridSize, tileName: 'brownHill1'})
            :
                new map({x:x*gridSize, y:(y+i)*gridSize, tileName: 'brownHill2'})
            )
        );
    }
    return arr;
}
function create_greenHill(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==0 ?
                new map({x:x*gridSize, y:(y+i)*gridSize, tileName: 'greenHill1'})
            :
                new map({x:x*gridSize, y:(y+i)*gridSize, tileName: 'greenHill2'})
            )
        );
    }
    return arr;
}
function create_building(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==(number-1) ?
                new building2({x:x*gridSize, y:(y+i)*gridSize})
            :
                new building1({x:x*gridSize, y:(y+i)*gridSize})
            )
        );
    }
    return arr;
}
function create_alien_building(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==(number-1) ?
                new alien_building3({x:x*gridSize, y:(y+i)*gridSize})
            :
                (i==0 ?
                    new alien_building1({x:x*gridSize, y:(y+i)*gridSize})
                :
                    new alien_building2({x:x*gridSize, y:(y+i)*gridSize})
                )
            )
        );
    }
    return arr;
}
function create_shock_v(x,y,number,continuous){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==(number-1) ?
                new shock_v({x:x*gridSize, y:(y+i)*gridSize, shockNumber:3,continuous:continuous})
            :
                ((i==0) ?
                    new shock_v({x:x*gridSize, y:(y+i)*gridSize, shockNumber:1,continuous:continuous})
                :
                    new shock_v({x:x*gridSize, y:(y+i)*gridSize, shockNumber:2,continuous:continuous})
                )
            )
        );
    }
    return arr;
}
function create_shock_h(x,y,number,continuous){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==(number-1) ?
                new shock_h({x:(x+i)*gridSize, y:y*gridSize, shockNumber:3,continuous:continuous})
            :
                ((i==0) ?
                    new shock_h({x:(x+i)*gridSize, y:y*gridSize, shockNumber:1,continuous:continuous})
                :
                    new shock_h({x:(x+i)*gridSize, y:y*gridSize, shockNumber:2,continuous:continuous})
                )
            )
        );
    }
    return arr;
}
function create_greenMountain(x,y,numberX,numberY){

    var arr = []
    for (let i2 = 0; i2 < numberY; i2++) {
        for (let i = 0; i < numberX; i++) {
            arr.push(
                (i2==(numberY-1) ?
                    (i==(numberX-1) ?
                        new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile9' })
                    :
                        ((i==0) ?
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile7' })
                        :
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile8' })
                        )
                    )
                :
                    (i2==0 ?
                        (i==(numberX-1) ?
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile3' })
                        :
                            ((i==0) ?
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile1' })
                            :
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile2' })
                            )
                        )
                    :
                        (i==(numberX-1) ?
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile6' })
                        :
                            ((i==0) ?
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile4' })
                            :
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile5' })
                            )
                        )
                    )
                )
            );
        }
    }
    return arr;
}
function create_whiteMountain(x,y,numberX,numberY){

    var arr = []
    for (let i2 = 0; i2 < numberY; i2++) {
        for (let i = 0; i < numberX; i++) {
            arr.push(
                (i2==(numberY-1) ?
                    (i==(numberX-1) ?
                        new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile9' })
                    :
                        ((i==0) ?
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile7' })
                        :
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile8' })
                        )
                    )
                :
                    (i2==0 ?
                        (i==(numberX-1) ?
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile3' })
                        :
                            ((i==0) ?
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile1' })
                            :
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile2' })
                            )
                        )
                    :
                        (i==(numberX-1) ?
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile6' })
                        :
                            ((i==0) ?
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile4' })
                            :
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile5' })
                            )
                        )
                    )
                )
            );
        }
    }
    return arr;
}
function create_brownMountain(x,y,numberX,numberY){

    var arr = []
    for (let i2 = 0; i2 < numberY; i2++) {
        for (let i = 0; i < numberX; i++) {
            arr.push(
                (i2==(numberY-1) ?
                    (i==(numberX-1) ?
                        new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile9' })
                    :
                        ((i==0) ?
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile7' })
                        :
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile8' })
                        )
                    )
                :
                    (i2==0 ?
                        (i==(numberX-1) ?
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile3' })
                        :
                            ((i==0) ?
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile1' })
                            :
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile2' })
                            )
                        )
                    :
                        (i==(numberX-1) ?
                            new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile6' })
                        :
                            ((i==0) ?
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile4' })
                            :
                                new map({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile5' })
                            )
                        )
                    )
                )
            );
        }
    }
    return arr;
}
