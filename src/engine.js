startAnimating(30);
function animate(){
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    if(pause==false){
      if(screen.width>screen.height){
        canvas.width = (screen.width<=900 ? screen.width : 900)  //640;   //innerWidth; 1024
        canvas.height = (screen.height<=400 ? screen.height : 400) // 360;  //innerHeight;  576
        document.getElementById('turn_device').style.display = 'none';
        //tiles.forEach((item, i) => { item.update();});
        backgrounds.forEach((item, i) => {item.update();});
        tiles.forEach((item, i) => {item.update();});
        Principal.update();
        arrows.forEach((item, i) => { item.update();});
        btns.forEach((item, i) => { item.update();});
/* click mouse */

        btns.forEach((item, i) =>{
          if(Principal.nameSprite != 'explosion' && Principal.nameSprite != 'invisible' && Principal.nameSprite!=null ){
            switch(item.imgName) {
                case "button_a":
                    if(item.colision(touchRight.x,touchRight.y)){Principal.fire();}
                break;
                case "btn_upleft":
                    if(item.colision(touchLeft.x,touchLeft.y)){
                      Principal.position.x-=3; Principal.position.y-=3;
                      Principal.nameSprite = 'upleft';}
                break;
                case "btn_up":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.y-=principalSpeedMove; Principal.nameSprite = 'up'}
                break;
                case "btn_upright":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.y-=principalSpeedMove; Principal.position.x+=principalSpeedMove;Principal.nameSprite = 'upright';}
                break;
                case "btn_left":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.x-=principalSpeedMove;Principal.nameSprite = 'left'}
                break;
                case "btn_right":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.x+=principalSpeedMove;Principal.nameSprite = 'right'}
                break;
                case "btn_downleft":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.y+=principalSpeedMove; Principal.position.x-=principalSpeedMove;Principal.nameSprite = 'downleft';}
                break;
                case "btn_down":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.y+=principalSpeedMove;Principal.nameSprite = 'down';}
                break;
                case "btn_downright":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.y+=principalSpeedMove; Principal.position.x+=principalSpeedMove;Principal.nameSprite = 'downright';}
                break;
            }
          }
        })

/* click mouse */

      }else{
      }
    }
  }
}



if (preload()) {
    init(level);
    document.addEventListener("load",animate());
}
