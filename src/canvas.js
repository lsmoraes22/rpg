/* variaveis globais do canvas */
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d', { alpha: false });
canvas.width = (screen.width<=900 ? screen.width : 900)  //640;   //innerWidth; 1024
canvas.height = (screen.height<=400 ? screen.height : 400) // 360;  //innerHeight;  576
c.font = "30px Comic Sans MS";
c.fillStyle = "white";
c.textAlign = "center";
c.fillText("Loading...", canvas.width/2, canvas.height/2);
/* variaveis globais do canvas */
/* variaveis globais de jogo */
const gravity = 0;
let gridSize = 64;                                      //tamanho padrao em pixels dos tiles e sprites
let principalSpeedMove = 5;                             //velocida de movimento da nave
let varScore = 0;
let game_lives_initial = 5;
let game_lives = game_lives_initial;
let level = 0;
let action = false;   //carrega o jogador
let pause = false;    /*  */
let scenario = {
    c:0,                 //coluna cenario atual
    r:0,                 //linha cenario atual
    x:0 ,                //usado no calculo
    y:0,                 //usado no calculo
    cMin:0,              //coluna minima horizontal
    cMax:0,              //coluna maxima horizontal
    rMin:0,              //linha minima vertical
    rMax:0,              //linha maxima vertical
    cWidth: 900,         //largura do cenario
    rHeight: 400,        //altura do cenario
    update: function(){
        this.c = Math.ceil(this.x/this.cWidth);     //canvas.width 640
        this.r = Math.ceil(this.y/this.rHeight);    // canvas.height 360
    },
    reset: function(){
        this.x = 0;
        this.y = 0;
        this.c = 0;
        this.r = 0;
    }
};
let timeMerchan = new Date().getTime();
/* variaveis globais de jogo */
/* variaveis globais de controle "joystick" */
const keys = {
    right: {pressed: false},
    up:    {pressed: false},
    left:  {pressed: false},
    down:  {pressed: false},
    a:     {pressed: false},
    s:     {pressed: false},
    null_keys: function(){
        this.right.pressed = false;
        this.up.pressed = false;
        this.left.pressed = false;
        this.down.pressed = false;
        this.a.pressed = false;
        this.s.pressed = false;
    }
}
let mousePosition = {};
let touchPosition1 = {};
let touchPosition2 = {};
let touchLeft = {};
let touchRight = {};
let clickRight = false
/* variaveis globais de controle "joystick" */
//let scrollOffset = 0; //posicao da tela /*verificar necessidade*/
/* variaveis de tempo da execucao do jogo*/
let fps, fpsInterval, startTime, now, then, elapsed;
/* variaveis de tempo da execucao do jogo*/
/* funcoes */
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
}
function preload() {
  /*carrega todas as imagens e audios*/
    img = new imageCanvas();
    img.preloadImage(img.resources);
    snd = new audioCanvas();
    snd.preloadAudio();
    return true;
}
function isEmpty(obj) { return Object.keys(obj).length === 0; }
function testUndefined(t){
  if (typeof t !== 'undefined') {
    return false;
  }
  return true;
}

function anuncio(){
  var t = new Date().getTime();
  if(t>timeMerchan+60000){
    if(typeof sdk !== 'undefined'){sdk.showBanner();}else{console.log('sdk not defined');} //merchan
    timeMerchan=t;
  }
}

function isNull(obj) {
    return obj === null;
}
function fullScreen(){
    var elem = document.documentElement;
    if( window.innerHeight == screen.height) {
        if (elem.exitFullscreen) {
            elem.exitFullscreen();
        } else if (elem.webkitExitFullscreen) { /* Safari */
            elem.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            elem.msExitFullscreen();
        }
    } else {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        } else {
            console.log(error.message);
        }
    }
}

function getRandomArbitrary(min, max) { return Math.random() * (max - min) + min; }
function pausar(){pause=true;if(!isNull(music)){music.pause();}snd.pauseAll();}
function startar(){pause=false;if(!isNull(music)){music.musicPlay();music.play();}}
