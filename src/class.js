class sprite{
  constructor({x, y, imgName, sndName, assX, assY, cropWidth, cropHeight, width, height, imgFrm, loop, next, end, speedAnimation, standartgridSize}){
    this.static = false
    this.frames = 0                                //frame atual da imagem
    this.speedAnimation = speedAnimation           //velocidade da animacao 1=100%=30fps; 0.5=50%=15fps
    this.imgName = imgName                         //
    this.position ={x:x, y:y}                      //-scenario.y
    this.standartgridSize = standartgridSize       //tamanho padrao do tileset
    this.image = {
      x:x,
      y:y,
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
  //  if( this.position.x<canvas.width && this.position.y<canvas.height && this.position.x+this.image.width>0 && this.position.y+this.image.height>0 ){
      c.drawImage(
        img.imgList[this.image.img].image,
        (this.image.assetPos.x * this.image.cropWidth ) + (Math.floor(this.frames*this.speedAnimation) * this.image.cropWidth), //this.image.cropWidth
        this.image.assetPos.y * this.standartgridSize,
        this.image.cropWidth,
        this.image.cropHeight,
        this.position.x+this.image.x,
        this.position.y+this.image.y,
        this.image.width,
        this.image.height,
      )
  //  }
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

class write{
  constructor({x, y, px, color, family, text, bold}){
    this.position = {x:x, y:y}
    this.px = px
    this.family = family
    this.text = text
    this.bold = ( bold ? 'bold ' : '' )
    this.color = color
  }
  update(){
    c.font = this.bold+this.px+"px "+this.family;
    c.fillStyle = this.color;
    c.fillText(this.text, this.position.x, this.position.y);
  }
}

class rectFill{
  constructor({x, y, width, height, color, border_size, border_color}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.color = color
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    if(this.border_size>0){
      c.fillStyle = this.border_color;
      c.fillRect(this.position.x-this.border_size, this.position.y-this.border_size, this.width+(this.border_size*2), this.height+(this.border_size*2));
    }
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}


class rectStroke{
  constructor({x, y, width, height, border_color, border_size}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    c.strokeStyle = this.color;
    c.lineWidth = this.border_size;
    c.strokeRect(this.position.x, this.position.y, this.width, this.height);
  }
}

class roundRectStroke{
  constructor({x, y, width, height, border_size, border_color, radius}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.border_size = border_size
    this.border_color = border_color
    this.radius = radius
  }
  update(){
    c.strokeStyle = this.border_color;
    c.lineWidth = this.border_size;
    c.roundRect(this.position.x, this.position.y, this.width, this.height, this.radius).stroke();
  }
}

class roundRectFill{
  constructor({x, y, width, height, color, border_size, border_color, radius}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.color = color
    this.border_size = border_size
    this.border_color = border_color
    this.radius = radius
  }
  update(){
    if (this.border_size>0) {
      c.fillStyle = this.border_color;
      c.roundRect(
        this.position.x-this.border_size,
        this.position.y-this.border_size,
        this.width+(this.border_size*2),
        this.height+(this.border_size*2),
        this.radius+this.border_size
      ).fill();
    }
    c.fillStyle = this.color;
    c.roundRect(this.position.x, this.position.y, this.width, this.height, this.radius).fill();
  }
}

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  this.moveTo(x+r, y);
  this.arcTo(x+w, y,   x+w, y+h, r);
  this.arcTo(x+w, y+h, x,   y+h, r);
  this.arcTo(x,   y+h, x,   y,   r);
  this.arcTo(x,   y,   x+w, y,   r);
  this.closePath();
  return this;
}

class triangle_arrow_up_fill{
  constructor({x, y, width, height, color, border_size, border_color}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.color = color
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    if(this.border_size>0){
      c.beginPath();
      c.moveTo(this.position.x+(this.width/2), this.position.y-this.border_size);
      c.lineTo(this.position.x-this.border_size, this.position.y+this.height+(this.border_size/2));
      c.lineTo(this.position.x+this.width+this.border_size, this.position.y+this.height+(this.border_size/2));
      c.fillStyle = this.border_color;
      c.fill();
      c.closePath();
    }
    c.beginPath();
    c.moveTo(this.position.x+(this.width/2), this.position.y);
    c.lineTo(this.position.x, this.position.y+this.height);
    c.lineTo(this.position.x+this.width, this.position.y+this.height);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
}

class triangle_arrow_up_stroke{
  constructor({x, y, width, height, border_size, border_color}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    c.beginPath();
    c.moveTo(this.position.x+(this.width/2), this.position.y);
    c.lineTo(this.position.x, this.position.y+this.height);
    c.lineTo(this.position.x+this.width, this.position.y+this.height);
    c.closePath();
    c.lineWidth = this.border_size
    c.strokeStyle = this.border_color;
    c.stroke();
  }
}

class triangle_arrow_down_fill{
  constructor({x, y, width, height, color, border_size, border_color}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.color = color
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    if(this.border_size>0){
      c.beginPath();
      c.moveTo(this.position.x-(this.border_size/2), this.position.y-(this.border_size/2));
      c.lineTo(this.position.x+this.width+(this.border_size/2), this.position.y-(this.border_size/2));
      c.lineTo(this.position.x+(this.width/2), this.position.y+this.height+this.border_size);
      c.fillStyle = this.border_color;
      c.fill();
      c.closePath();
    }
    c.beginPath();
    c.moveTo(this.position.x, this.position.y);
    c.lineTo(this.position.x+this.width, this.position.y);
    c.lineTo(this.position.x+(this.width/2), this.position.y+this.height);
    c.closePath();
    c.fillStyle = this.color;
    c.fill();
  }
}

class triangle_arrow_down_stroke{
  constructor({x, y, width, height, border_size, border_color}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    c.beginPath();
    c.moveTo(this.position.x, this.position.y);
    c.lineTo(this.position.x+this.width, this.position.y);
    c.lineTo(this.position.x+(this.width/2), this.position.y+this.height);
    c.closePath();
    c.lineWidth = this.border_size
    c.strokeStyle = this.border_color;
    c.stroke();
  }
}


class triangle_arrow_left_stroke{
  constructor({x, y, width, height, border_size, border_color}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    c.beginPath();
    c.moveTo(this.position.x, this.position.y+(this.width/2));
    c.lineTo(this.position.x+this.width, this.position.y);
    c.lineTo(this.position.x+this.width, this.position.y+this.height);
    c.closePath();
    c.lineWidth = this.border_size
    c.strokeStyle = this.border_color;
    c.stroke();
  }
}

class triangle_arrow_left_fill{
  constructor({x, y, width, height, color, border_size, border_color}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.color = color
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    if(this.border_size>0){
      c.beginPath();
      c.moveTo(this.position.x-(this.border_size/2), this.position.y+(this.width/2));
      c.lineTo(this.position.x+this.width+(this.border_size/2), this.position.y-(this.border_size/2));
      c.lineTo(this.position.x+this.width+(this.border_size/2), this.position.y+this.height+(this.border_size/2));
      c.fillStyle = this.border_color;
      c.fill();
      c.closePath();
    }
    c.beginPath();
    c.moveTo(this.position.x, this.position.y+(this.width/2));
    c.lineTo(this.position.x+this.width, this.position.y);
    c.lineTo(this.position.x+this.width, this.position.y+this.height);
    c.fillStyle = this.color;
    c.closePath();
    c.fill();
  }
}

class triangle_arrow_right_stroke{
  constructor({x, y, width, height, border_size, border_color}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    c.beginPath();
    c.moveTo(this.position.x+this.width, this.position.y+(this.width/2));
    c.lineTo(this.position.x, this.position.y);
    c.lineTo(this.position.x, this.position.y+this.height);
    c.closePath();
    c.lineWidth = this.border_size
    c.strokeStyle = this.border_color;
    c.stroke();
  }
}

class triangle_arrow_right_fill{
  constructor({x, y, width, height, color, border_size, border_color}){
    this.position = {x:x, y:y}
    this.width = width
    this.height = height
    this.color = color
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    if(this.border_size>0){
      c.beginPath();
      c.moveTo(this.position.x-(this.border_size/2), this.position.y-(this.border_size/2));
      c.lineTo(this.position.x-(this.border_size/2), this.position.y+this.height+(this.border_size/2));
      c.lineTo(this.position.x+this.width+(this.border_size/2), this.position.y+(this.width/2));
      c.fillStyle = this.border_color;
      c.fill();
      c.closePath();
    }
    c.beginPath();
    c.moveTo(this.position.x, this.position.y);
    c.lineTo(this.position.x, this.position.y+this.height);
    c.lineTo(this.position.x+this.width, this.position.y+(this.width/2));
    c.fillStyle = this.color;
    c.closePath();
    c.fill();
  }
}

class circleStroke{
  constructor({x, y, radius, border_size, border_color}){
    this.position = {x:x, y:y}
    this.radius = radius
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    c.beginPath();
    c.strokeStyle = this.border_color;
    c.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2,true);
    c.stroke();
    c.closePath();
  }
}


class circleFill{
  constructor({x, y, radius, color, border_size, border_color}){
    this.position = {x:x, y:y}
    this.color = color
    this.radius = radius
    this.border_size = border_size
    this.border_color = border_color
  }
  update(){
    if(this.border_size>0){
      c.fillStyle = this.border_color;
      c.beginPath();
      c.arc(this.position.x,this.position.y,this.radius+this.border_size,0,Math.PI*2,true);
      c.fill();
      c.closePath();
    }
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2,true);
    c.fill();
    c.closePath();
  }
}

class images{
    constructor({x, y, imgName}){
        this.imgName = imgName
        this.width = img.imgList[this.imgName].image.width
        this.height = img.imgList[this.imgName].image.height
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
    points(number){                                            //pontos do objeto para colisao
        var ret = {x:null, y:null};
        switch(number) {
          case 1:
            ret.x=this.position.x+this.bodyColision.x+(this.bodyColision.w/2);
            ret.y=this.position.y+this.bodyColision.y;
          break;
          case 2:
            ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w;
            ret.y=this.position.y+this.bodyColision.y;
          break;
          case 3:
            ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w;
            ret.y=this.position.y+this.bodyColision.y+(this.bodyColision.h/2);
          break;
          case 4:
            ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w;
            ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h;
          break;
          case 5:
            ret.x=this.position.x+this.bodyColision.x+(this.bodyColision.w/2);
            ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h;
          break;
          case 6:
            ret.x=this.position.x+this.bodyColision.x;
            ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h;
          break;
          case 7:
            ret.x=this.position.x+this.bodyColision.x;
            ret.y=this.position.y+this.bodyColision.y+(this.bodyColision.h/2);
          break;
          case 8:
            ret.x=this.position.x+this.bodyColision.x;
            ret.y=this.position.y+this.bodyColision.y;
          break;
        }
        return ret;
    }
}

class invisibleColision{
  constructor({x, y, w, h, visible}){
    this.position = {x:x, y:y}
    this.width = w
    this.height = h
    this.visible = visible
  }
  colision(x,y){
    if(this.visible){
        var t = new roundRectFill({
          x: this.position.x-scenario.x,
          y: this.position.y-scenario.y,
          width: this.width,
          height: this.height,
          color: '#000',
          border_size: 1,
          border_color: '#000',
          radius: 0
        });
        t.update();
      }
    if(
      x>=this.position.x-scenario.x
      && y>=this.position.y-scenario.y
      && y<=this.position.y+this.height-scenario.y
      && x<=this.position.x+this.width-scenario.x
    ){
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

class tile {                                              //personagem
    constructor({x, y, tilesetName, gridX, gridY}){
        this.position = {x: x, y: y}
        this.width = gridSize/2
        this.height = gridSize/2
        this.currentSprite = null                              //sprite atual
        this.tilesetName = tilesetName                         //nome da imagem que contem o tileset
        this.sprites = {
          /*criar new sprite*/
          tile: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:gridX,
            assY:gridY,
            cropWidth: gridSize/2,
            cropHeight: gridSize/2,
            width: gridSize/2,
            height: gridSize/2,
            imgFrm:1,
            loop: true,
            next: null,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 32
          }),
        }
    }
    isActive(){
      if(this.nameSprite !== null){
        return true;
      }else {
        return false;
      }
    }
    action(sprt){                                              //funcao executa a animacao atual
        this.currentSprite = sprt;
        this.currentSprite.position.x = this.position.x-scenario.x;
        this.currentSprite.position.y = this.position.y-scenario.y;
          if(this.currentSprite.animation()){
            if(this.sprites[this.nameSprite].image.end){
              this.nameSprite = this.sprites[this.nameSprite].image.next;
              this.currentSprite = this.sprites[this.nameSprite];
            }
          }
    }
    colision(x,y){
        var colision = {position:{
          x: this.currentSprite.position.x,
          y:this.currentSprite.position.y
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
    points(number){                                            //pontos do objeto para colisao
        var ret = {x:null, y:null};
        switch(number) {
          case 1:
            ret.x=this.position.x+this.bodyColision.x+(this.bodyColision.w/2);
            ret.y=this.position.y+this.bodyColision.y;
          break;
          case 2:
            ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w;
            ret.y=this.position.y+this.bodyColision.y;
          break;
          case 3:
            ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w;
            ret.y=this.position.y+this.bodyColision.y+(this.bodyColision.h/2);
          break;
          case 4:
            ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w;
            ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h;
          break;
          case 5:
            ret.x=this.position.x+this.bodyColision.x+(this.bodyColision.w/2);
            ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h;
          break;
          case 6:
            ret.x=this.position.x+this.bodyColision.x;
            ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h;
          break;
          case 7:
            ret.x=this.position.x+this.bodyColision.x;
            ret.y=this.position.y+this.bodyColision.y+(this.bodyColision.h/2);
          break;
          case 8:
            ret.x=this.position.x+this.bodyColision.x;
            assX:0,
            ret.y=this.position.y+this.bodyColision.y;
          break;
        }
        return ret;
    }
}

class liveBarr2  {
    constructor({x,y}){
      this.position = {x:x,y:y}
      this.imgName = "liveBarr2"
      this.width = 62 //img.imgList[this.imgName].image.width
      this.height = 8 //img.imgList[this.imgName].image.height
    }
    draw(){
        c.drawImage(
            img.imgList[this.imgName].image,
            0,
            0,
            307,
            34,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
}

class liveBarr1 {
    constructor({x,y,perc}){
      this.position = {x:x,y:y}
      this.imgName = "liveBarr1"
      this.percentual = perc
    }
      draw(){
          c.drawImage(
              img.imgList[this.imgName].image,
              0,
              0,
              307*this.percentual,
              34,
              this.position.x,
              this.position.y,
              62*this.percentual,
              8
          )
      }
}

class character {                                              //personagem
    constructor({x, y, colx, coly, colw, colh, tilesetName}){
        this.position = {x: x, y: y}                           //posicao no cenario
        this.currentSprite = null                              //sprite atual
        this.bodyColision = {x:colx, y:coly, w:colw, h:colh}   //pontos de colisao
        this.tilesetName = tilesetName                         //nome da imagem que contem o tileset
        this.weaponClass = 'melee'                             //melee or ranged
        this.isBoss = false
        this.liveBarrFull = 90
        this.liveBarr = (this.isBoss ? this.liveBarrFull : 1 )
        this.liveBarrPicture = {
          background: new liveBarr2({x: this.position.x ,y: this.position.y}),
          barr: new liveBarr1({x: this.position.x ,y: this.position.y, perc: this.liveBarr/this.liveBarrFull}),
        }
        this.sprites = {
          /*criar new sprite*/
          moveUp: new sprite({
            x:0,
            y:0,
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
            x:0,
            y:0,
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
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:1,
            assY:9,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:8,
            next: 'stopLeft',
            loop: false,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          stopLeft: new sprite({
            x:0,
            y:0,
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
            x:0,
            y:0,
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
            x:0,
            y:0,
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
            x:0,
            y:0,
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
            x:0,
            y:0,
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
/* diagonals */
          moveLeftUp: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:1,
            assY:9,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:8,
            next: 'stopLeftUp',
            loop: false,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          stopLeftUp: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:9,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:1,
            next: null,
            loop: true,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          moveRightUp: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:1,
            assY:11,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:8,
            next: 'stopRightUp',
            loop: false,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          stopRightUp: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:11,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:1,
            next: null,
            loop: true,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          moveLeftDown: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:1,
            assY:9,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:8,
            next: 'stopLeftDown',
            loop: false,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          stopLeftDown: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:9,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:1,
            next: null,
            loop: true,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          moveRightDown: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:1,
            assY:11,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:8,
            next: 'stopRightDown',
            loop: false,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
          stopRightDown: new sprite({
            x:0,
            y:0,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:11,
            cropWidth: gridSize,
            cropHeight: gridSize,
            width: gridSize,
            height: gridSize,
            imgFrm:1,
            next: null,
            loop: true,
            end: false,
            speedAnimation:0.9,
            standartgridSize: 64
          }),
/* diagonals */
          attackUp: new sprite({
            x:-62,
            y:-62,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:21,
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
            x:-62,
            y:-62,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:24,
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
            x:-62,
            y:-62,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:27,
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
            x:-62,
            y:-62,
            imgName: tilesetName,
            sndName: null,
            assX:0,
            assY:30,
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
          dead: new sprite({
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
        this.attackColision = {
          x:null,
          y:null,
          w:null,
          h:null,
          posSpriteX: null,
          posSpriteY: null,
          loadSpritePos: function(posSpriteX,posSpriteY){
            this.posSpriteX = posSpriteX;
            this.posSpriteY = posSpriteY;
          },
          colision: function(x,y){
            if(
              x>this.x+this.posSpriteX &&
              x<this.x+this.posSpriteX+this.w &&
              y>this.y+this.posSpriteY &&
              y<this.y+this.posSpriteY+this.h
            ){
              return true;
            }else{
              return false;
            }
          }
        }
    }
    setNextSprite(sprt){ this.currentSprite = sprt; }
    die(){ this.nameSprite = 'dead'; }
    isAlive(){ if(this.nameSprite !== null && !(this.nameSprite == 'dead') ){
      console.log(this.nameSprite);
      return true;}}
    isAttack(){
      if(this.nameSprite == 'attackUp' || this.nameSprite == 'attackDown' ||
         this.nameSprite == 'attackRight' || this.nameSprite == 'attackLeft'){
           return true;
         } else {
           return false;
         }
    }
    attack(){
      if(this.weaponClass == 'melee'){
        if(this.nameSprite=='moveUp' || this.nameSprite=='stopUp'){
            this.nameSprite = 'attackUp';
            this.attackColision.loadSpritePos(
              this.position.x+this.sprites[this.nameSprite].image.x,
              this.position.y+this.sprites[this.nameSprite].image.y
            );
            this.attackColision.w = 92;
            this.attackColision.h = 36;
            this.attackColision.x = 60;
            this.attackColision.y = 60;
          } else if (this.nameSprite=='moveLeft' || this.nameSprite=='stopLeft') {
            this.nameSprite = 'attackLeft';
            this.attackColision.loadSpritePos(
              this.position.x+this.sprites[this.nameSprite].image.x,
              this.position.y+this.sprites[this.nameSprite].image.y
            );
            this.attackColision.w = 50;
            this.attackColision.h = 52;
            this.attackColision.x = 45;
            this.attackColision.y = 80;
        } else if (this.nameSprite=='moveDown' || this.nameSprite=='stopDown') {
            this.nameSprite = 'attackDown';
            this.attackColision.loadSpritePos(
              this.position.x+this.sprites[this.nameSprite].image.x,
              this.position.y+this.sprites[this.nameSprite].image.y
            );
            this.attackColision.w = 82;
            this.attackColision.h = 56;
            this.attackColision.x = 70;
            this.attackColision.y = 96;
        } else if (this.nameSprite=='moveRight' || this.nameSprite=='stopRight') {
            this.nameSprite = 'attackRight';
            this.attackColision.loadSpritePos(
              this.position.x+this.sprites[this.nameSprite].image.x,
              this.position.y+this.sprites[this.nameSprite].image.y
            );
            this.attackColision.w = 50;
            this.attackColision.h = 52;
            this.attackColision.x = 96;
            this.attackColision.y = 80;
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
          if(this.isAlive()){
            if(keys.left.pressed && keys.up.pressed){this.position.x-=principalSpeedMove; this.position.y-=principalSpeedMove; this.nameSprite = 'moveLeftUp'} else
            if(keys.right.pressed && keys.up.pressed){this.position.x+=principalSpeedMove; this.position.y-=principalSpeedMove; this.nameSprite = 'moveRightUp'} else
            if(keys.left.pressed && keys.down.pressed){this.position.x-=principalSpeedMove; this.position.y+=principalSpeedMove; this.nameSprite = 'moveLeftDown'} else
            if(keys.right.pressed && keys.down.pressed){this.position.x+=principalSpeedMove; this.position.y+=principalSpeedMove; this.nameSprite = 'moveRightDown'} else
            if(keys.left.pressed){this.position.x-=principalSpeedMove; this.nameSprite = 'moveLeft'} else
            if(keys.right.pressed){this.position.x+=principalSpeedMove; this.nameSprite = 'moveRight'} else
            if(keys.up.pressed){this.position.y-=principalSpeedMove; this.nameSprite = 'moveUp'} else
            if(keys.down.pressed){this.position.y+=principalSpeedMove; this.nameSprite = 'moveDown'}
            if(keys.a.pressed){this.attack();}
          }
          if(scenario.c>scenario.cMin){
              if(this.position.x<=canvas.width*0.33){scenario.x-=(principalSpeedMove/2);this.position.x+=(principalSpeedMove);}
          } else {
              if(this.position.x<=0){this.position.x+=principalSpeedMove;}
          }
          if(scenario.y>(scenario.rMin*scenario.rHeight)){
              if(this.position.y<=400*0.3){scenario.y-=(principalSpeedMove/2);this.position.y+=principalSpeedMove;}
          } else {
              if(this.position.y<=400*0.15){this.position.y+=principalSpeedMove;}
          }
          if(scenario.x+canvas.width<=scenario.cWidth*scenario.cMax){
               if(this.position.x+this.bodyColision.w>=canvas.width*0.66){scenario.x+=(principalSpeedMove/2);this.position.x-=principalSpeedMove;}
          } else {
               if(this.position.x>=canvas.width-this.bodyColision.w-20){this.position.x-=principalSpeedMove;}
          }
          if(scenario.y+canvas.height<=scenario.rHeight){
              if(this.position.y+this.bodyColision.h>=400*0.55){scenario.y+=(principalSpeedMove/2);this.position.y-=principalSpeedMove;}
          } else {
              if(this.position.y>=400-this.bodyColision.h){this.position.y-=principalSpeedMove;}
          }
          this.currentSprite.position.x = this.position.x;
          this.currentSprite.position.y = this.position.y;
        }else{
          this.currentSprite.position.x = this.position.x-scenario.x;
          this.currentSprite.position.y = this.position.y-scenario.y;
        }
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
      if(this.currentSprite!=null){
        if(x>=this.currentSprite.position.x + this.bodyColision.x &&
           x<=this.currentSprite.position.x + this.bodyColision.x + this.bodyColision.w &&
           y>=this.currentSprite.position.y + this.bodyColision.y &&
           y<=this.currentSprite.position.y + this.bodyColision.y + this.bodyColision.h ){
             return true;
        }else{
             return false;
        }
      }
    }
    points(number){                                            //pontos do objeto para colisao
        var ret = {x:null, y:null};
        var w=0, h=0;
        if(!this.principal){w = scenario.x; h = scenario.y;}
        switch(number) {
          case 1:
            ret.x=this.position.x+this.bodyColision.x+(this.bodyColision.w/2)-w;
            ret.y=this.position.y+this.bodyColision.y-h;
          break;
          case 2:
            ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w-w;
            ret.y=this.position.y+this.bodyColision.y-h;
          break;
          case 3:
            ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w-w;
            ret.y=this.position.y+this.bodyColision.y+(this.bodyColision.h/2)-h;
          break;
          case 4:
            ret.x=this.position.x+this.bodyColision.x+this.bodyColision.w-w;
            ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h-h;
          break;
          case 5:
            ret.x=this.position.x+this.bodyColision.x+(this.bodyColision.w/2)-w;
            ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h-h;
          break;
          case 6:
            ret.x=this.position.x+this.bodyColision.x-w;
            ret.y=this.position.y+this.bodyColision.y+this.bodyColision.h-h;
          break;
          case 7:
            ret.x=this.position.x+this.bodyColision.x-w;
            ret.y=this.position.y+this.bodyColision.y+(this.bodyColision.h/2)-h;
          break;
          case 8:
            ret.x=this.position.x+this.bodyColision.x-w;
            ret.y=this.position.y+this.bodyColision.y-h;
          break;
        }
        return ret;
    }
}
