class map extends tile {
  constructor({x, y, tilesetName, gridX, gridY}) {
    super({x:x, y:y, tilesetName:tilesetName, gridX:gridX, gridY:gridY})
    this.nameSprite = 'tile';
    this.tilesetName = tilesetName
  }
  update(){
    if(this.isActive()){
      this.action(this.sprites[this.nameSprite]);
    }
  }
}

class arrow extends character{
  constructor({x,y}) {
    super({x:x, y:y, tilesetName:'arrows'})
    this.nameSprite = 'moveUp'                             //sprite atual
    this.bodyColision = {x:20, y:20, w:20, h:20}           //pontos de colisao
    this.principal = true                                  //personagem controlado pelo joystick
    this.tilesetName = 'arrows'
    this.weaponClass = 'ranged'
    this.sprites.moveUp.imgName = 'arrows'
    this.sprites.moveUp.sndName = null
    this.sprites.moveUp.assX = 0
    this.sprites.moveUp.assY = 0
    this.sprites.moveUp.cropWidth = gridSize
    this.sprites.moveUp.cropHeight = gridSize
    this.sprites.moveUp.width = gridSize
    this.sprites.moveUp.height = gridSize
    this.sprites.moveUp.imgFrm = 1
    this.sprites.moveUp.loop = true
    this.sprites.moveUp.next = null
    this.sprites.moveUp.speedAnimation = 0.9


    this.sprites.stopUp.imgName = 'arrows'
    this.sprites.stopUp.sndName = null
    this.sprites.stopUp.assX = 1
    this.sprites.stopUp.assY = 1
    this.sprites.stopUp.cropWidth = gridSize
    this.sprites.stopUp.cropHeight = gridSize
    this.sprites.stopUp.width = gridSize
    this.sprites.stopUp.height = gridSize
    this.sprites.stopUp.imgFrm = 1
    this.sprites.stopUp.loop = true
    this.sprites.stopUp.next = null
    this.sprites.stopUp.speedAnimation = 0.9

    this.sprites.moveLeft.imgName = 'arrows'
    this.sprites.moveLeft.sndName = null
    this.sprites.moveLeft.assX = 0
    this.sprites.moveLeft.assY = 1
    this.sprites.moveLeft.cropWidth = gridSize
    this.sprites.moveLeft.cropHeight = gridSize
    this.sprites.moveLeft.width = gridSize
    this.sprites.moveLeft.height = gridSize
    this.sprites.moveLeft.imgFrm = 1
    this.sprites.moveLeft.loop = true
    this.sprites.moveLeft.next = null
    this.sprites.moveLeft.speedAnimation = 0.9

    this.sprites.moveDown.imgName = 'arrows'
    this.sprites.moveDown.sndName = null
    this.sprites.moveDown.assX = 0
    this.sprites.moveDown.assY = 2
    this.sprites.moveDown.cropWidth = gridSize
    this.sprites.moveDown.cropHeight = gridSize
    this.sprites.moveDown.width = gridSize
    this.sprites.moveDown.height = gridSize
    this.sprites.moveDown.imgFrm = 1
    this.sprites.moveDown.loop = true
    this.sprites.moveDown.next = null
    this.sprites.moveDown.speedAnimation = 0.9

    this.sprites.moveRight.imgName = 'arrows'
    this.sprites.moveRight.sndName = null
    this.sprites.moveRight.assX = 0
    this.sprites.moveRight.assY = 2
    this.sprites.moveRight.cropWidth = gridSize
    this.sprites.moveRight.cropHeight = gridSize
    this.sprites.moveRight.width = gridSize
    this.sprites.moveRight.height = gridSize
    this.sprites.moveRight.imgFrm = 1
    this.sprites.moveRight.loop = true
    this.sprites.moveRight.next = null
    this.sprites.moveRight.speedAnimation = 0.9

  }
  isActive(){if(this.nameSprite !== null){return true;}}
  update(){
    if(this.isActive()){
      if(this.nameSprite !== null){
        this.action(this.sprites[this.nameSprite]);
      }
    }
  }
}

class principal extends character{
  constructor({x,y,tilesetName}){
    super({x: x,y: y, tilesetName: tilesetName })
    this.nameSprite = 'stopUp'                             //sprite atual
    this.bodyColision = {x:20, y:15, w:25, h:45}           //pontos de colisao
    this.principal = true                                  //personagem controlado pelo joystick
    this.tilesetName = tilesetName
    this.weaponClass = 'melee'                             //melee or ranged
  }
  update(){
    if(this.isAlive()){
      if(this.nameSprite !== null){
        this.action(this.sprites[this.nameSprite]);
      }
    }
  }
}


class enemy extends character{
  constructor({x,y,tilesetName,isBoss}){
    super({x: x,y: y, tilesetName: tilesetName })
    this.nameSprite = 'stopDown'                           //sprite atual
    this.bodyColision = {x:20, y:15, w:25, h:45}           //pontos de colisao
    this.principal = false                                 //personagem controlado pelo joystick
    this.tilesetName = tilesetName
    this.weaponClass = 'melee'                             //melee or ranged
    this.isBoss = isBoss
    this.liveBarr = (this.isBoss ? 90 : 1 )
  }
  hurt(){ this.liveBarr-=1; if(this.liveBarr<=0){this.die();} }
  update(){
    if(this.isAlive()){
      if(this.nameSprite !== null){
        this.action(this.sprites[this.nameSprite]);
      }
    }
  }
}

class background extends tile {
  constructor({x, y, imgName}) {
    super({x:x, y:y, tilesetName:imgName, gridX:0, gridY:0})
    this.nameSprite = 'tile'
    this.width = img.imgList[imgName].image.width;
    this.height = img.imgList[imgName].image.height
    this.tilesetName = imgName
    this.sprites.tile.image.img = imgName                         //nome da imagem
    this.sprites.tile.image.assetPos.x = 0                        //posicao x do quadrante dentro do asset
    this.sprites.tile.image.assetPos.y = 0                        //posicao y do quadrante dentro do asset
    this.sprites.tile.image.width = this.width                    //largura da colagem da imagem
    this.sprites.tile.image.height = this.height                  //altura da colagem da imagem
    this.sprites.tile.image.cropWidth = this.width                //largura do corte da imagem
    this.sprites.tile.image.cropHeight = this.height              //altura do corte da imagem
    this.sprites.tile.image.imgFrm = 1                            //quantidade de imagens da animacao
  }
  update(){
    if(this.isActive()){
      this.action(this.sprites[this.nameSprite]);
    }
  }
}

class btn_a extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "button_a" : "button_a_2") }) }
    update(){ this.animation(); }
}
class btn_upleft extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_upleft" : "btn_upleft_2")}) }
    update(){ this.animation(); }
}
class btn_up extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_up" : "btn_up_2")}) }
    update(){ this.animation(); }
}
class btn_upright extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_upright" : "btn_upright_2")}) }
    update(){ this.animation(); }
}
class btn_left extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_left" : "btn_left_2")}) }
    update(){ this.animation(); }
}
class btn_center extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_center" : "btn_center_2")}) }
    update(){ this.animation(); }
}
class btn_right extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_right" : "btn_right_2")}) }
    update(){ this.animation(); }
}
class btn_downleft extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_downleft" : "btn_downleft_2")}) }
    update(){ this.animation(); }
}
class btn_down extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_down" : "btn_down_2")}) }
    update(){ this.animation(); }
}
class btn_downright extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_downright" : "btn_downright_2")}) }
    update(){ this.animation(); }
}

class text{
    constructor({x,y,text,height}){
      this.x = x
      this.y = y
      this.text = text
      this.xAccumulated = 0
      this.height = height
      this.letters = []
    }
    load(){
      var l;
      this.xAccumulated = this.x;
      for (var i = 0; i < this.text.length; i++) {
        l = this.text.charAt(i);
        this.letters.push(new images({x: this.xAccumulated, y: this.y, imgName:l}) );
        this.letters[i].width = this.letters[i].width*(this.height / this.letters[i].height)
        this.letters[i].height = this.height;
        this.xAccumulated += this.letters[i].width;
      }
    }
    update(){
      this.letters.forEach((item, i) => {
        item.draw();
      });
    }
}

let tiles_layer0 = [];
let tiles_layer1 = [];
let backgrounds = [];
let btns = [];
let enemys = [];
let arrows = [];
let texts = [];
let rects =[];
let Principal = null;
let FullScreen = null;

function resetObjects(){
  scenario.reset();
  tiles_layer0 = [];
  tiles_layer1 = [];
  backgrounds = [];
  btns = [];
  enemys = [];
  arrows = [];
  texts = [];
  shaps =[];
  Principal = null;
  FullScreen = null;
}
