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
            resetObjects();
            scenario.cMin=0;
            scenario.cMax=2;
            scenario.rMin=-1;
            scenario.rMax=0;
            backgrounds = [
              new background({x:0,y:-1*(scenario.rHeight),imgName:'scene1'})
            ]
            enemys = [
              new enemy({x:200,y:100, tilesetName: "skeleton_arow", isBoss: false}),
              new enemy({x:300,y:-100,tilesetName: "minotauro",     isBoss: true}),
            ]
            invisibleColisions = [
              new invisibleColision({x:30, y:350, w:2000, h:50, visible:false})
            ]
            /*
            texts = [
              new write({x:100, y:100, px:50, color:'#fff', family:'Comic Sans MS', text:'Lucas Sangiorato Moraes', bold:false }),
            ]

            /*
            shaps = [
              new roundRectFill({x:300, y:200, width:50, height:50, color:'red', border_size:10, border_color:'black', radius:10 }),
              new rectFill({x:100, y:100, width:50, height:50, color:'red', border_size:10, border_color:'#000' }),
              new circleFill({x:100, y:100, radius:10, color:'yellow', border_size:2, border_color:'#00FF00'}),
              new triangle_arrow_right_fill({x:200, y:200, width:50, height:50, color:'#37B', border_size:10, border_color:'#333' }),
           ]
            //texts.forEach((item, i) => { item.load(); });
            /**/
            tiles_layer1 = [
              new map({x:17*(gridSize/2), y:-1*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
/*
              new map({x:18*(gridSize/2), y:-1*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
              new map({x:19*(gridSize/2), y:-1*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
              new map({x:20*(gridSize/2), y:-1*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
              new map({x:21*(gridSize/2), y:-1*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
              new map({x:22*(gridSize/2), y:-1*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:0}),
              /**/
            ]
            tiles_layer0 = [
              new map({x:17*(gridSize/2), y:0*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
/*
              new map({x:18*(gridSize/2), y:0*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
              new map({x:19*(gridSize/2), y:0*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
              new map({x:20*(gridSize/2), y:0*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
              new map({x:21*(gridSize/2), y:0*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
              new map({x:22*(gridSize/2), y:0*(gridSize/2), tilesetName:'tileset-autumn', gridX:0, gridY:1}),
/**/
            ]
            FullScreen = new images({x: canvas.width-55, y: 10, imgName:"full_screen"});
            arrows = [ new arrow({x:200,y:200}), ]
            btns = create_joystick('b');
            /**/
            Principal = new principal({x:50,y:150, tilesetName: 'greenGoblin'});
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
