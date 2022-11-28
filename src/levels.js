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
            tiles = [
              new tile({ x:0*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:1*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:2*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:3*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:4*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:5*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:6*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:7*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:8*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:9*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:10*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:11*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:12*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:13*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:14*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:15*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:16*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:17*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:18*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:19*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:20*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:21*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:22*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:23*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:24*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:25*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:26*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:27*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:28*(gridSize/2), y:0*(gridSize/2), imgName: 'tileset-autumn'}),


              new tile({ x:0*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:1*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:2*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:3*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:4*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:5*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:6*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:7*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:8*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:9*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:10*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:11*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:12*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:13*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:14*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:15*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:16*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:17*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:18*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:19*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:20*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:21*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:22*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:23*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:24*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:25*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:26*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:27*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:28*(gridSize/2), y:1*(gridSize/2), imgName: 'tileset-autumn'}),

              new tile({ x:0*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:1*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:2*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:3*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:4*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:5*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:6*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:7*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:8*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:9*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:10*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:11*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:12*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:13*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:14*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:15*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:16*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:17*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:18*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:19*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:20*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:21*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:22*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:23*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:24*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:25*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:26*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:27*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:28*(gridSize/2), y:2*(gridSize/2), imgName: 'tileset-autumn'}),

              new tile({ x:0*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:1*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:2*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:3*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:4*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:5*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:6*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:7*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:8*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:9*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:10*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:11*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:12*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:13*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:14*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:15*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:16*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:17*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:18*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:19*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:20*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:21*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:22*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:23*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:24*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:25*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:26*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:27*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:28*(gridSize/2), y:3*(gridSize/2), imgName: 'tileset-autumn'}),

              new tile({ x:0*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:1*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:2*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:3*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:4*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:5*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:6*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:7*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:8*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:9*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:10*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:11*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:12*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:13*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:14*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:15*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:16*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:17*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:18*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:19*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:20*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:21*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:22*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:23*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:24*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:25*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:26*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:27*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:28*(gridSize/2), y:4*(gridSize/2), imgName: 'tileset-autumn'}),

              new tile({ x:0*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:1*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:2*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:3*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:4*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:5*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:6*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:7*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:8*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:9*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:10*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:11*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:12*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:13*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:14*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:15*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:16*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:17*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:18*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:19*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:20*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:21*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:22*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:23*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:24*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:25*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:26*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:27*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:28*(gridSize/2), y:5*(gridSize/2), imgName: 'tileset-autumn'}),

              new tile({ x:0*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:1*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:2*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:3*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:4*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:5*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:6*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:7*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:8*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:9*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:10*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:11*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:12*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:13*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:14*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:15*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:16*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:17*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:18*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:19*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:20*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:21*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:22*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:23*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:24*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:25*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:26*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:27*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:28*(gridSize/2), y:6*(gridSize/2), imgName: 'tileset-autumn'}),

              new tile({ x:0*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:1*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:2*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:3*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:4*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:5*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:6*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:7*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:8*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:9*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:10*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:11*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:12*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:13*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:14*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:15*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:16*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:17*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:18*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:19*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:20*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:21*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:22*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:23*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:24*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:25*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:26*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:27*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              new tile({ x:28*(gridSize/2), y:7*(gridSize/2), imgName: 'tileset-autumn'}),
              /**/
            ]
            Principal = new principal({x:300,y:150, tilesetName: 'spy'});
            btns = create_joystick('b');
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
                new tile({x:x*gridSize, y:(y+i)*gridSize, tileName: 'brownHill1'})
            :
                new tile({x:x*gridSize, y:(y+i)*gridSize, tileName: 'brownHill2'})
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
                new tile({x:x*gridSize, y:(y+i)*gridSize, tileName: 'greenHill1'})
            :
                new tile({x:x*gridSize, y:(y+i)*gridSize, tileName: 'greenHill2'})
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
                        new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile9' })
                    :
                        ((i==0) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile7' })
                        :
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile8' })
                        )
                    )
                :
                    (i2==0 ?
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile3' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile1' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile2' })
                            )
                        )
                    :
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile6' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile4' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile5' })
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
                        new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile9' })
                    :
                        ((i==0) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile7' })
                        :
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile8' })
                        )
                    )
                :
                    (i2==0 ?
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile3' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile1' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile2' })
                            )
                        )
                    :
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile6' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile4' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile5' })
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
                        new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile9' })
                    :
                        ((i==0) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile7' })
                        :
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile8' })
                        )
                    )
                :
                    (i2==0 ?
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile3' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile1' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile2' })
                            )
                        )
                    :
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile6' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile4' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile5' })
                            )
                        )
                    )
                )
            );
        }
    }
    return arr;
}
