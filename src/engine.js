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
        enemys.forEach((item, i) => {item.update();});
        shaps.forEach((item, i) => {item.update();});
        arrows.forEach((item, i) => { item.update();});
        tiles_layer0.forEach((item, i) => {item.update();});
        tiles_layer1.forEach((item, i) => {item.update();});
        btns.forEach((item, i) => { item.update();});
        if(FullScreen!=null){FullScreen.draw();}
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
          if( item.colision(p1.x,p1.y) ){ Principal.position.x-=principalSpeedMove; Principal.position.y+=principalSpeedMove;}
          if( item.colision(p3.x,p3.y) ){ Principal.position.x-=principalSpeedMove; Principal.position.y+=principalSpeedMove; }
          if( item.colision(p5.x,p5.y) ){ Principal.position.x+=principalSpeedMove; Principal.position.y-=principalSpeedMove; }
          if( item.colision(p7.x,p7.y) ){ Principal.position.x+=principalSpeedMove; Principal.position.y-=principalSpeedMove;}
          if( item.colision(p2.x,p2.y) ){ Principal.position.x-=principalSpeedMove; Principal.position.y+=principalSpeedMove; }
          if( item.colision(p4.x,p4.y) ){ Principal.position.x-=principalSpeedMove; Principal.position.y-=principalSpeedMove;}
          if( item.colision(p6.x,p6.y) ){ Principal.position.x+=principalSpeedMove;Principal.position.y-=principalSpeedMove;}
          if( item.colision(p8.x,p8.y) ){ Principal.position.x+=principalSpeedMove;Principal.position.y+=principalSpeedMove;}
          /*
          c.beginPath();
          c.moveTo(item.currentSprite.position.x, item.currentSprite.position.y);
          c.lineTo(item.currentSprite.position.x, item.currentSprite.position.y+item.height);
          c.lineTo(item.currentSprite.position.x +item.width, item.currentSprite.position.y+item.height);
          c.lineTo(item.currentSprite.position.x +item.width, item.currentSprite.position.y);
          c.closePath();
          c.stroke();

          c.beginPath();
          c.moveTo(p1.x, p1.y);
          c.lineTo(p2.x, p2.y);
          c.lineTo(p3.x, p3.y);
          c.lineTo(p4.x, p4.y);
          c.lineTo(p5.x, p5.y);
          c.lineTo(p6.x, p6.y);
          c.lineTo(p7.x, p7.y);
          c.lineTo(p8.x, p8.y);
          c.closePath();
          c.stroke();
          /**/
        });

        enemys.forEach((item, i) => {
          var p1 = Principal.points(1);     //ponto 0 do relogio analogico
          var p2 = Principal.points(2);     //ponto 2 do relogio analogico
          var p3 = Principal.points(3);     //ponto 3 do relogio analogico
          var p4 = Principal.points(4);     //ponto 4 do relogio analogico
          var p5 = Principal.points(5);     //ponto 6 do relogio analogico
          var p6 = Principal.points(6);     //ponto 7 do relogio analogico
          var p7 = Principal.points(7);     //ponto 9 do relogio analogico
          var p8 = Principal.points(8);     //ponto 11 do relogio analogico

          var e1 = item.points(1);     //ponto 0 do relogio analogico
          var e2 = item.points(2);     //ponto 2 do relogio analogico
          var e3 = item.points(3);     //ponto 3 do relogio analogico
          var e4 = item.points(4);     //ponto 4 do relogio analogico
          var e5 = item.points(5);     //ponto 6 do relogio analogico
          var e6 = item.points(6);     //ponto 7 do relogio analogico
          var e7 = item.points(7);     //ponto 9 do relogio analogico
          var e8 = item.points(8);     //ponto 11 do relogio analogico

          var p1x = Principal.attackColision.x + Principal.attackColision.posSpriteX,
              p1y = Principal.attackColision.y + Principal.attackColision.posSpriteY,
              p2x = Principal.attackColision.x + Principal.attackColision.posSpriteX,
              p2y = Principal.attackColision.y + Principal.attackColision.posSpriteY + Principal.attackColision.h,
              p3x = Principal.attackColision.x + Principal.attackColision.posSpriteX + Principal.attackColision.w,
              p3y = Principal.attackColision.y + Principal.attackColision.posSpriteY + Principal.attackColision.h,
              p4x = Principal.attackColision.x + Principal.attackColision.posSpriteX + Principal.attackColision.w,
              p4y = Principal.attackColision.y + Principal.attackColision.posSpriteY;

          if( item.colision(p2.x,p2.y) ){ Principal.position.x-=principalSpeedMove; Principal.position.y+=principalSpeedMove; } else
          if( item.colision(p4.x,p4.y) ){ Principal.position.x-=principalSpeedMove; Principal.position.y-=principalSpeedMove;} else
          if( item.colision(p6.x,p6.y) ){ Principal.position.x+=principalSpeedMove;Principal.position.y-=principalSpeedMove;} else
          if( item.colision(p8.x,p8.y) ){ Principal.position.x+=principalSpeedMove;Principal.position.y+=principalSpeedMove;} else
          if( item.colision(p1.x,p1.y) ){ Principal.position.y+=principalSpeedMove;} else
          if( item.colision(p3.x,p3.y) ){ Principal.position.x-=principalSpeedMove; } else
          if( item.colision(p5.x,p5.y) ){ Principal.position.y-=principalSpeedMove; } else
          if( item.colision(p7.x,p7.y) ){ Principal.position.x+=principalSpeedMove;}

          if(Principal.isAttack()){
            if(item.isAlive() &&
              ( Principal.attackColision.colision(e1.x,e1.y) ||
                Principal.attackColision.colision(e2.x,e2.y) ||
                Principal.attackColision.colision(e3.x,e3.y) ||
                Principal.attackColision.colision(e4.x,e4.y) ||
                Principal.attackColision.colision(e5.x,e5.y) ||
                Principal.attackColision.colision(e6.x,e6.y) ||
                Principal.attackColision.colision(e7.x,e7.y) ||
                Principal.attackColision.colision(e8.x,e8.y)
              )){
                item.hurt();
                console.log(item.liveBarr);
              }
          }
        })
/*colisions*/
/* click mouse */

if(FullScreen.colision(touchRight.x,touchRight.y)){
  fullScreen();
}

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
