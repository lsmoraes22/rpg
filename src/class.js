class sprite{
    constructor({x, y, imgName, sndName, assX, assY, cropWidth, cropHeight, width, height, imgFrm, loop, next, end, speedAnimation, standartgridSize}){
        this.frames = 0                                //frame atual da imagem
        this.speedAnimation = speedAnimation           //velocidade da animacao 1=100%=30fps; 0.5=50%=15fps
        this.imgName = imgName                         //
        this.position ={x:x, y:y}                      //-scenario.y
        this.standartgridSize = standartgridSize       //tamanho padrao do tileset
        this.image = {
            img: imgName,                              //nome da imagem
            assetPos: {x:assX, y:assY},                //posicao do quadrante dentro do asset
            cropWidth: cropWidth,                      //largura do corte da imagem
            cropHeight: cropWidth,                     //altura do corte da imagem
            width: width,                              //largura da colagem da imagem
            height: height,                            //altura da colagem da imagem
            imgFrm: imgFrm,                            //quantidade de imagens da animacao
            loop: loop,                                //true repeticao infinita da animacao false: animacao apresenta uma vez
            next: next,                                //proxima animacao caso loop = false
            end: end                                   //fim da animacao true / false
        }
        this.sound = (isNull(sndName) || !sndName ? false : snd.audList[sndName])  //som da animacao
    }
    draw(){
      var adjust = ((this.image.width-this.standartgridSize)/2);
        if( this.position.x<canvas.width &&
            this.position.y<canvas.height &&
            this.position.x+this.image.width>0 &&
            this.position.y+this.image.height>0 ){
            c.drawImage(
                img.imgList[this.image.img].image,
                (this.image.assetPos.x * this.image.cropWidth ) + (Math.floor(this.frames*this.speedAnimation) * this.image.cropWidth), //this.image.cropWidth
                this.image.assetPos.y * this.standartgridSize, //this.image.cropHeight
                this.image.cropWidth,
                this.image.cropHeight,
                this.position.x-adjust,
                this.position.y,
                this.image.width,
                this.image.height,
            )
        }
    }
    animation(){
        this.draw();
        if(this.frames==0){
          if(this.sound!=false){this.sound.play();}
        }
        this.frames++;
        if(this.image.loop){ //se for loop
            if(Math.floor(this.frames*this.speedAnimation)==this.image.imgFrm){
              this.frames=0;
              this.image.end=false;
              return false;
            }
        } else {  //se nao for loop
            if(Math.floor(this.frames*this.speedAnimation)==this.image.imgFrm){
              this.frames=0;
              this.image.end=true;
              return true;
            }else{
              this.image.end=false;
              return false;
            }
        }
    }
}

class images{
    constructor({x, y, imgName}){
        this.imgName = imgName
        this.width = img.imgList[this.imgName].image.width
        this.height = img.imgList[this.imgName].image.height
        this.static = false
        this.position ={x:x, y:y}
        this.crop = {
            x:0,
            y:0,
            width: img.imgList[this.imgName].image.width,
            height: img.imgList[this.imgName].image.height
        }
    }
    draw(){
        c.drawImage(
            img.imgList[this.imgName].image,
            this.crop.x,
            this.crop.y,
            this.crop.width,
            this.crop.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    animation(){
        this.draw();
    }
    colision(x,y){
        var colision = {position:{
          x: this.position.x,
          y:this.position.y
        }
    }
        if(x>=colision.position.x &&
           x<=colision.position.x+this.width &&
           y>=colision.position.y &&
           y<=colision.position.y+this.height){
               return true;
           }else{
               return false;
           }
    }
}
class sound{
    constructor({audioName}){
        this.audioName = audioName
        this.musicOn = false
    }
    play = function (){
        snd.audList[this.audioName].play();
    }
    musicPlay= function (){ this.musicOn = true }
    musicRun = function (){
      if(this.musicOn){
        if(snd.audList[this.audioName].currentTime==0 ||
          snd.audList[this.audioName].currentTime==snd.audList[this.audioName].duration){
          snd.audList[this.audioName].play();
        }
      }
    }
    stop = function (){
        this.musicOn = false
        snd.audList[this.audioName].pause();
        snd.audList[this.audioName].currentTime = 0;
    }
    pause = function (){
        snd.audList[this.audioName].pause();
    }
}

class character {                                              //personagem
    constructor({x, y, colx, coly, colw, colh, tilesetName}){
        this.position = {x: x, y: y}
        this.currentSprite = null                              //sprite atual
        this.bodyColision = {x:colx, y:coly, w:colw, h:colh}   //pontos de colisao
        this.tilesetName = tilesetName                         //nome da imagem que contem o tileset
        this.weaponClass = 'melee'                             //melee or ranged
        this.sprites = {
          /*criar new sprite*/
          moveUp: new sprite({
            x:x,
            y:y,
            imgName: tilesetName,
            sndName: null,
            assX:1,
            assY:8,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:8,
            loop: false,
            next: 'stopUp',
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          stopUp: new sprite({
            x:x,
            y:y,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:8,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:1,
            loop: true,
            next: null,
            end: false,
            speedAnimation:0.5,
            standartgridSize: 64
          }),
          moveLeft: new sprite({
            x:x,
            y:y,
            imgName: tilesetName,
            sndName: null,
            assX:1,
            assY:9,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:8,
            loop: false,
            next: 'stopLeft',
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          stopLeft: new sprite({
            x:x,
            y:y,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:9,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:1,
            loop: true,
            next: null,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          stopDown: new sprite({
            x:x,
            y:y,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:10,
            cropWidth:gridSize,
            cropHeight:gridSize,
            width:gridSize,
            height:gridSize,
            imgFrm:1,
            loop: true,
            next: null,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          moveDown: new sprite({
            x:x,
            y:y,
            imgName: tilesetName,
            sndName: null,
            assX:1,
            assY:10,
            cropWidth:gridSize,
            cropHeight:gridSize,
            width:gridSize,
            height:gridSize,
            imgFrm:8,
            loop: false,
            next: 'stopDown',
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          stopRight: new sprite({
            x:x,
            y:y,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:11,
            cropWidth:gridSize,
            cropHeight:gridSize,
            width:gridSize,
            height:gridSize,
            imgFrm:1,
            loop: true,
            next: null,
            end: false,
            speedAnimation:0.05,
            standartgridSize: 64
          }),
          moveRight: new sprite({
            x:x,
            y:y,
            imgName: tilesetName,
            sndName: null,
            assX:1,
            assY:11,
            cropWidth:gridSize,
            cropHeight:gridSize,
            width:gridSize,
            height:gridSize,
            imgFrm:8,
            loop: false,
            next: 'stopRight',
            end: false,
            speedAnimation:0.7,
            standartgridSize: 64
          }),
          attackUp: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:22,
            cropWidth:gridSize*3,
            cropHeight:gridSize*3,
            width:gridSize*3,
            height:gridSize*3,
            imgFrm:6,
            loop: false,
            next: 'stopUp',
            end: false,
            speedAnimation:0.7,
            standartgridSize: 64
          }),
          attackLeft: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:25,
            cropWidth:gridSize*3,
            cropHeight:gridSize*3,
            width:gridSize*3,
            height:gridSize*3,
            imgFrm:6,
            loop: false,
            next: 'stopLeft',
            end: false,
            speedAnimation:0.7,
            standartgridSize: 64
          }),
          attackDown: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:28,
            cropWidth:gridSize*3,
            cropHeight:gridSize*3,
            width:gridSize*3,
            height:gridSize*3,
            imgFrm:6,
            loop: false,
            next: 'stopDown',
            end: false,
            speedAnimation:0.7,
            standartgridSize: 64
          }),
          attackRight: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:31,
            cropWidth:gridSize*3,
            cropHeight:gridSize*3,
            width:gridSize*3,
            height:gridSize*3,
            imgFrm:6,
            loop: false,
            next: 'stopRight',
            end: false,
            speedAnimation:0.7,
            standartgridSize: 64
          }),
          die: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:20,
            cropWidth:gridSize,
            cropHeight:gridSize,
            width:gridSize,
            height:gridSize,
            imgFrm:10,
            loop: false,
            next: null,
            end: false,
            speedAnimation:0.3,
            standartgridSize: 64
          }),
          arrowUp: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:16,
            cropWidth:gridSize,
            cropHeight:gridSize,
            width:gridSize,
            height:gridSize,
            imgFrm:6,
            loop: false,
            next: 'stopUp',
            end: false,
            speedAnimation:0.7,
            standartgridSize: 64
          }),
          arrowLeft: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:17,
            cropWidth:gridSize,
            cropHeight:gridSize,
            width:gridSize,
            height:gridSize,
            imgFrm:6,
            loop: false,
            next: 'stopLeft',
            end: false,
            speedAnimation:0.7,
            standartgridSize: 64
          }),
          arrowDown: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:18,
            cropWidth:gridSize,
            cropHeight:gridSize,
            width:gridSize,
            height:gridSize,
            imgFrm:6,
            loop: false,
            next: 'stopDown',
            end: false,
            speedAnimation:0.7,
            standartgridSize: 64
          }),
          arrowRight: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:19,
            cropWidth:gridSize,
            cropHeight:gridSize,
            width:gridSize,
            height:gridSize,
            imgFrm:6,
            loop: false,
            next: 'stopRight',
            end: false,
            speedAnimation:0.7,
            standartgridSize: 64
          }),
        }
        this.principal = false                                 //personagem controlado pelo joystick
    }
    setNextSprite(sprt){
      this.currentSprite = sprt;
    }
    die(){
      this.nameSprite = 'die';
    }
    attack(){
      if(this.weaponClass == 'melee'){
        if(this.nameSprite=='moveUp' || this.nameSprite=='stopUp'){
            this.nameSprite = 'attackUp';
        } else if (this.nameSprite=='moveLeft' || this.nameSprite=='stopLeft') {
            this.nameSprite = 'attackLeft';
        } else if (this.nameSprite=='moveDown' || this.nameSprite=='stopDown') {
            this.nameSprite = 'attackDown';
        } else if (this.nameSprite=='moveRight' || this.nameSprite=='stopRight') {
            this.nameSprite = 'attackRight';
        }
      } if(this.weaponClass == 'ranged'){
        if(this.nameSprite=='moveUp' || this.nameSprite=='stopUp'){
            this.nameSprite = 'arrowUp';
        } else if (this.nameSprite=='moveLeft' || this.nameSprite=='stopLeft') {
            this.nameSprite = 'arrowLeft';
        } else if (this.nameSprite=='moveDown' || this.nameSprite=='stopDown') {
            this.nameSprite = 'arrowDown';
        } else if (this.nameSprite=='moveRight' || this.nameSprite=='stopRight') {
            this.nameSprite = 'arrowRight';
        }
      }
    }
    action(sprt){                                              //funcao executa a animacao atual
        this.currentSprite = sprt;
        if(this.principal){
            if(scenario.c>scenario.cMin){
                if(this.position.x<=canvas.width*0.33){scenario.x-=principalSpeedMove;this.position.x+=principalSpeedMove;}
            } else {
                if(this.position.x<=0){this.position.x+=principalSpeedMove;}
            }
            if(scenario.y>(scenario.rMin*scenario.rHeight)){
                if(this.position.y<=400*0.3){scenario.y-=principalSpeedMove;this.position.y+=principalSpeedMove;}
            } else {
                if(this.position.y<=400*0.15){this.position.y+=principalSpeedMove;}
            }
            if(scenario.x+canvas.width<=scenario.cWidth*scenario.cMax){
                 if(this.position.x+this.bodyColision.w>=canvas.width*0.66){scenario.x+=principalSpeedMove;this.position.x-=principalSpeedMove;}
            } else {
                 if(this.position.x>=canvas.width-this.bodyColision.w-20){this.position.x-=principalSpeedMove;}
            }
            if(scenario.y+canvas.height<=scenario.rHeight){
                if(this.position.y+this.bodyColision.h>=400*0.55){scenario.y+=principalSpeedMove;this.position.y-=principalSpeedMove;}
            } else {
                if(this.position.y>=400-this.bodyColision.h){this.position.y-=principalSpeedMove;}
            }
            if(keys.left.pressed){this.position.x-=principalSpeedMove; this.nameSprite = 'moveLeft'} else
            if(keys.right.pressed){this.position.x+=principalSpeedMove; this.nameSprite = 'moveRight'} else
            if(keys.up.pressed){this.position.y-=principalSpeedMove; this.nameSprite = 'moveUp'} else
            if(keys.down.pressed){this.position.y+=principalSpeedMove; this.nameSprite = 'moveDown'}
            if(keys.a.pressed){this.attack();}
        }
        this.currentSprite.position.x = this.position.x;
        this.currentSprite.position.y = this.position.y;
        if(
            this.currentSprite.position.x<canvas.width*2 &&
            this.currentSprite.position.x>-canvas.width &&
            this.currentSprite.position.y<canvas.height*2 &&
            this.currentSprite.position.y>-canvas.height
        ){
          if(this.currentSprite.animation()){
            if(this.sprites[this.nameSprite].image.end){
              this.nameSprite = this.sprites[this.nameSprite].image.next;
              this.currentSprite = this.sprites[this.nameSprite];
            }
          }
        }
    }
    colision(x,y){
        var colision = {position:{x: this.position.x, y:this.position.y}}
        if(x>=colision.position.x+this.bodyColision.x &&
           x<=colision.position.x+this.bodyColision.x+this.bodyColision.w &&
           y>=colision.position.y+this.bodyColision.y &&
           y<=colision.position.y+this.bodyColision.y+this.bodyColision.h){
           return true;
           }else{
           return false;
           }
    }
    points(number){                                            //pontos do objeto para colisao
        var ret = {x:null, y:null};
        switch(number) {
           case 1:
               ret.x=this.position.x+this.bodyColision.x;
               ret.y=this.position.y+this.bodyColision.y;
           break;
           case 2:
               ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w;
               ret.y=this.position.y+this.bodyColision.y;
           break;
           case 3:
               ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w;
               ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h;
           break;
           case 4:
               ret.x=this.position.x+this.bodyColision.x;
               ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h;
           break;
           case 5:
               ret.x=this.position.x+this.bodyColision.x+(this.bodyColision.w/2);
               ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h;
           break;
           case 6:
               ret.x=this.position.x+this.bodyColision.x+(this.bodyColision.w/2);
               ret.y=this.position.y+this.bodyColision.y;
           break;
           case 7:
               ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w;
               ret.y=this.position.y+this.bodyColision.y+(this.bodyColision.h/2);
           break;
           case 8:
               ret.x=this.position.x+this.bodyColision.x;
               ret.y=this.position.y+this.bodyColision.y+(this.bodyColision.h/2);
           break;
        }
        return ret;
    }
}
