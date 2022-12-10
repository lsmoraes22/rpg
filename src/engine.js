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
        scenario.update();
        backgrounds.forEach((item, i) => {item.update();});
        texts.forEach((item, i) => {item.update();});
        if(Principal!=null){Principal.update();}
        arrows.forEach((item, i) => { item.update();});
        tiles_layer0.forEach((item, i) => {item.update();});
        tiles_layer1.forEach((item, i) => {item.update();});
        btns.forEach((item, i) => { item.update();});
/*colisions*/
        tiles_layer0.forEach((item, i) => {
          var p1 = Principal.points(1);     //ponto 0 do relogio analogico
          var p2 = Principal.points(2);     //ponto 2 do relogio analogico
          var p3 = Principal.points(3);     //ponto 3 do relogio analogico
          var p4 = Principal.points(4);     //ponto 4 do relogio analogico
          var p5 = Principal.points(5);     //ponto 6 do relogio analogico
          var p6 = Principal.points(6);     //ponto 7 do relogio analogico
          var p7 = Principal.points(7);     //ponto 9 do relogio analogico
          var p8 = Principal.points(8);     //ponto 11 do relogio analogico
          if( item.colision(p2.x,p2.y) ){ Principal.position.x-=principalSpeedMove; Principal.position.y+=principalSpeedMove; } else
          if( item.colision(p4.x,p4.y) ){ Principal.position.x-=principalSpeedMove; Principal.position.y-=principalSpeedMove;} else
          if( item.colision(p6.x,p6.y) ){ Principal.position.x+=principalSpeedMove;Principal.position.y-=principalSpeedMove;} else
          if( item.colision(p8.x,p8.y) ){ Principal.position.x+=principalSpeedMove;Principal.position.y+=principalSpeedMove;} else
          if( item.colision(p1.x,p1.y) ){ Principal.position.y+=principalSpeedMove;} else
          if( item.colision(p3.x,p3.y) ){ Principal.position.x-=principalSpeedMove; } else
          if( item.colision(p5.x,p5.y) ){ Principal.position.y-=principalSpeedMove; } else
          if( item.colision(p7.x,p7.y) ){ Principal.position.x+=principalSpeedMove;}
        });
/*colisions*/
/* click mouse */
btns.forEach((item, i) =>{
          if(Principal.nameSprite != 'explosion' && Principal.nameSprite != 'invisible' && Principal.nameSprite!=null ){
            switch(item.imgName) {
                case "button_a":
                    if(item.colision(touchRight.x,touchRight.y)){Principal.attack();}
                break;
                case "btn_upleft":
                    //if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.x-=3; Principal.position.y-=3;Principal.nameSprite = 'upleft';}
                break;
                case "btn_up":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.y-=principalSpeedMove; Principal.nameSprite = 'moveUp'}
                break;
                case "btn_upright":
                    //if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.y-=principalSpeedMove; Principal.position.x+=principalSpeedMove;Principal.nameSprite = 'upright';}
                break;
                case "btn_left":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.x-=principalSpeedMove;Principal.nameSprite = 'moveLeft'}
                break;
                case "btn_right":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.x+=principalSpeedMove;Principal.nameSprite = 'moveRight'}
                break;
                case "btn_downleft":
                    //if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.y+=principalSpeedMove; Principal.position.x-=principalSpeedMove;Principal.nameSprite = 'downleft';}
                break;
                case "btn_down":
                    if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.y+=principalSpeedMove;Principal.nameSprite = 'moveDown';}
                break;
                case "btn_downright":
                    //if(item.colision(touchLeft.x,touchLeft.y)){Principal.position.y+=principalSpeedMove; Principal.position.x+=principalSpeedMove;Principal.nameSprite = 'downright';}
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
