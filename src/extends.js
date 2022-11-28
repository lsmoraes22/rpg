class tile extends character{
    constructor({x,y,imgName,assX,assY}){
      super({x: x,y: y}) //, colx:4, coly:4, colw:26, colh:31})
      this.nameSprite = 'tile'                                 //sprite atual
      this.principal = false                                 //personagem controlado pelo joystick
      this.sprites = {
        tile: new sprite({
        x:100,
        y:100,
        imgName:'tileset-autumn',
        sndName: null,
        assX:0,
        assY:2,
        cropWidth: gridSize/2,
        cropHeight: gridSize/2,
        width: gridSize/2,
        height: gridSize/2,
        imgFrm:1,
        loop: true,
        next: null,
        end: false,
        speedAnimation:0.1,
        standartgridSize: 32
        }),
        tile2: new sprite({
        x:100,
        y:100,
        imgName:'tileset-autumn',
        sndName: null,
        assX:0,
        assY:3,
        cropWidth: gridSize/2,
        cropHeight: gridSize/2,
        width: gridSize/2,
        height: gridSize/2,
        imgFrm:1,
        loop: true,
        next: null,
        end: false,
        speedAnimation:0.1,
        standartgridSize: 64
        }),
    }
  }
  update(){
    if(this.nameSprite !== null){
      this.action(this.sprites[this.nameSprite]);
    }
  }
}

class principal extends character{
  constructor({x,y,tilesetName}){
    super({x: x,y: y, tilesetName: tilesetName })
    this.nameSprite = 'stopUp'                             //sprite atual
    this.bodyColision = {x:20, y:20, w:20, h:20}           //pontos de colisao
    this.principal = true                                  //personagem controlado pelo joystick
    this.tilesetName = tilesetName
  }
  isAlive(){if(this.nameSprite !== null){return true;}}
  update(){
    if(this.isAlive()){
      if(this.nameSprite !== null){
        this.action(this.sprites[this.nameSprite]);
      }
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

let tiles = [];
let Principal = null;
let btns = [];

function resetObjects(){

}
