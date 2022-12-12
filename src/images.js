let percLoad = 0;
class imageCanvas {

    imgList = [];
    imageObj = "";
    img_src= "resources/images/";

    resources = [
        {name: "tileset-autumn",          src: this.img_src+"AutumnTileset.png",      sx:0,	sy:0,	width:32,	height:32 },
        {name: "tileset-ice",             src: this.img_src+"IceTileset.png",	        sx:0,	sy:0,	width:32,	height:32	},
        {name: "tileset-nature",          src: this.img_src+"NatureTileset.png",	    sx:0,	sy:0,	width:32,	height:32	},
        {name: "scene1",                  src: this.img_src+"scene1.png",	            sx:0,	sy:0,	width:1800,height:800},
        {name: "branco",                  src: this.img_src+"branco.png",	            sx:0,	sy:0,	width:900,height:400},
        {name: "minotauro",               src: this.img_src+"minotauro.png",	        sx:0,	sy:0,	width:23,	height:32	},
        {name: "spy",                     src: this.img_src+"spy.png",	              sx:0,	sy:0,	width:64,	height:64	},
        {name: "greenGoblin",             src: this.img_src+"greenGoblin.png",	      sx:0,	sy:0,	width:64,	height:64	},
        {name: "skeleton_arow",           src: this.img_src+"skeleton_arow.png",	    sx:0,	sy:0,	width:64,	height:64	},
        {name: "arrows",                  src: this.img_src+"arrows.png",	            sx:0,	sy:0,	width:64,	height:64	},
        {name: "button_a",                src: this.img_src+"button_a.png",	          sx:0,	sy:0,	width:100,	height:100	},
        {name: "btn_center",              src: this.img_src+"btn_center.png",	        sx:0,	sy:0,	width:60,	height:60	},
        {name: "btn_down",                src: this.img_src+"btn_down.png",	          sx:0,	sy:0,	width:60,	height:130 },
        {name: "btn_downleft",            src: this.img_src+"btn_downleft.png",	      sx:0,	sy:0,	width:130,	height:130 },
        {name: "btn_downright",           src: this.img_src+"btn_downright.png",	    sx:0,	sy:0,	width:130,	height:130	},
        {name: "btn_left",                src: this.img_src+"btn_left.png",	          sx:0,	sy:0,	width:130,	height:60	},
        {name: "btn_right",               src: this.img_src+"btn_right.png",	        sx:0,	sy:0,	width:130,	height:60	},
        {name: "btn_up",                  src: this.img_src+"btn_up.png",	            sx:0,	sy:0,	width:60,	height:130	},
        {name: "btn_upleft",              src: this.img_src+"btn_upleft.png",	        sx:0,	sy:0,	width:130,	height:130	},
        {name: "btn_upright",             src: this.img_src+"btn_upright.png",	      sx:0,	sy:0,	width:130,	height:130	},
        {name: "button_a_2",              src: this.img_src+"button_a_2.png",	        sx:0,	sy:0,	width:100,	height:100	},
        {name: "btn_center_2",            src: this.img_src+"btn_center_2.png",	      sx:0,	sy:0,	width:60,	height:60	},
        {name: "btn_down_2",              src: this.img_src+"btn_down_2.png",	        sx:0,	sy:0,	width:60,	height:130	},
        {name: "btn_downleft_2",          src: this.img_src+"btn_downleft_2.png",	    sx:0,	sy:0,	width:130,	height:130	},
        {name: "btn_downright_2",         src: this.img_src+"btn_downright_2.png",	  sx:0,	sy:0,	width:130,	height:130	},
        {name: "btn_left_2",              src: this.img_src+"btn_left_2.png",	        sx:0,	sy:0,	width:130,	height:60	},
        {name: "btn_right_2",             src: this.img_src+"btn_right_2.png",	      sx:0,	sy:0,	width:130,	height:60	},
        {name: "btn_up_2",                src: this.img_src+"btn_up_2.png",	          sx:0,	sy:0,	width:60,	height:130	},
        {name: "btn_upleft_2",            src: this.img_src+"btn_upleft_2.png",	      sx:0,	sy:0,	width:130,	height:130	},
        {name: "btn_upright_2",           src: this.img_src+"btn_upright_2.png",	    sx:0,	sy:0,	width:130,	height:130	},

        {name: "A",                       src: this.img_src+"letters/A.png",	                sx:0,	sy:0,	width:115,	height:140	},
        {name: "B",                       src: this.img_src+"letters/B.png",	                sx:0,	sy:0,	width:94,	  height:140	},
        {name: "C",                       src: this.img_src+"letters/C.png",	                sx:0,	sy:0,	width:83,	  height:140	},
        {name: "D",                       src: this.img_src+"letters/D.png",	                sx:0,	sy:0,	width:100,	height:140	},
        {name: "E",                       src: this.img_src+"letters/E.png",	                sx:0,	sy:0,	width:91,	  height:140	},
        {name: "F",                       src: this.img_src+"letters/F.png",	                sx:0,	sy:0,	width:99, 	height:140	},
        {name: "G",                       src: this.img_src+"letters/G.png",	                sx:0,	sy:0,	width:88, 	height:140	},
        {name: "H",                       src: this.img_src+"letters/H.png",	                sx:0,	sy:0,	width:99, 	height:140	},
        {name: "I",                       src: this.img_src+"letters/I.png",	                sx:0,	sy:0,	width:81, 	height:140	},
        {name: "J",                       src: this.img_src+"letters/J.png",	                sx:0,	sy:0,	width:71, 	height:140	},
        {name: "K",                       src: this.img_src+"letters/K.png",	                sx:0,	sy:0,	width:99, 	height:140	},
        {name: "L",                       src: this.img_src+"letters/L.png",	                sx:0,	sy:0,	width:93, 	height:140	},
        {name: "M",                       src: this.img_src+"letters/M.png",	                sx:0,	sy:0,	width:135,	height:140	},
        {name: "N",                       src: this.img_src+"letters/N.png",	                sx:0,	sy:0,	width:95, 	height:140	},
        {name: "O",                       src: this.img_src+"letters/O.png",	                sx:0,	sy:0,	width:93, 	height:140	},
        {name: "P",                       src: this.img_src+"letters/P.png",	                sx:0,	sy:0,	width:92, 	height:140	},
        {name: "Q",                       src: this.img_src+"letters/Q.png",	                sx:0,	sy:0,	width:90, 	height:140	},
        {name: "R",                       src: this.img_src+"letters/R.png",	                sx:0,	sy:0,	width:93, 	height:140	},
        {name: "S",                       src: this.img_src+"letters/S.png",	                sx:0,	sy:0,	width:109,	height:140	},
        {name: "T",                       src: this.img_src+"letters/T.png",	                sx:0,	sy:0,	width:88, 	height:140	},
        {name: "U",                       src: this.img_src+"letters/U.png",	                sx:0,	sy:0,	width:93, 	height:140	},
        {name: "V",                       src: this.img_src+"letters/V.png",	                sx:0,	sy:0,	width:91, 	height:140	},
        {name: "W",                       src: this.img_src+"letters/W.png",	                sx:0,	sy:0,	width:123,	height:140	},
        {name: "X",                       src: this.img_src+"letters/X.png",	                sx:0,	sy:0,	width:95, 	height:140	},
        {name: "Y",                       src: this.img_src+"letters/Y.png",	                sx:0,	sy:0,	width:93, 	height:140	},
        {name: "Z",                       src: this.img_src+"letters/Z.png",	                sx:0,	sy:0,	width:83, 	height:140	},

        {name: "a",                       src: this.img_src+"letters/_A.png",	                sx:0,	sy:0,	width:56, 	height:140	},
        {name: "b",                       src: this.img_src+"letters/_B.png",	                sx:0,	sy:0,	width:59,	  height:140	},
        {name: "c",                       src: this.img_src+"letters/_C.png",	                sx:0,	sy:0,	width:53,	  height:140	},
        {name: "d",                       src: this.img_src+"letters/_D.png",	                sx:0,	sy:0,	width:56, 	height:140	},
        {name: "e",                       src: this.img_src+"letters/_E.png",	                sx:0,	sy:0,	width:52,	  height:140	},
        {name: "f",                       src: this.img_src+"letters/_F.png",	                sx:0,	sy:0,	width:47, 	height:140	},
        {name: "g",                       src: this.img_src+"letters/_G.png",	                sx:0,	sy:0,	width:63, 	height:140	},
        {name: "h",                       src: this.img_src+"letters/_H.png",	                sx:0,	sy:0,	width:56, 	height:140	},
        {name: "i",                       src: this.img_src+"letters/_I.png",	                sx:0,	sy:0,	width:35, 	height:140	},
        {name: "j",                       src: this.img_src+"letters/_J.png",	                sx:0,	sy:0,	width:31, 	height:140	},
        {name: "k",                       src: this.img_src+"letters/_K.png",	                sx:0,	sy:0,	width:53, 	height:140	},
        {name: "l",                       src: this.img_src+"letters/_L.png",	                sx:0,	sy:0,	width:30, 	height:140	},
        {name: "m",                       src: this.img_src+"letters/_M.png",	                sx:0,	sy:0,	width:83, 	height:140	},
        {name: "n",                       src: this.img_src+"letters/_N.png",	                sx:0,	sy:0,	width:61, 	height:140	},
        {name: "o",                       src: this.img_src+"letters/_O.png",	                sx:0,	sy:0,	width:56, 	height:140	},
        {name: "p",                       src: this.img_src+"letters/_P.png",	                sx:0,	sy:0,	width:57, 	height:140	},
        {name: "q",                       src: this.img_src+"letters/_Q.png",	                sx:0,	sy:0,	width:59, 	height:140	},
        {name: "r",                       src: this.img_src+"letters/_R.png",	                sx:0,	sy:0,	width:45, 	height:140	},
        {name: "s",                       src: this.img_src+"letters/_S.png",	                sx:0,	sy:0,	width:51, 	height:140	},
        {name: "t",                       src: this.img_src+"letters/_T.png",	                sx:0,	sy:0,	width:34, 	height:140	},
        {name: "u",                       src: this.img_src+"letters/_U.png",	                sx:0,	sy:0,	width:62, 	height:140	},
        {name: "v",                       src: this.img_src+"letters/_V.png",	                sx:0,	sy:0,	width:57, 	height:140	},
        {name: "w",                       src: this.img_src+"letters/_W.png",	                sx:0,	sy:0,	width:82, 	height:140	},
        {name: "x",                       src: this.img_src+"letters/_X.png",	                sx:0,	sy:0,	width:56, 	height:140	},
        {name: "y",                       src: this.img_src+"letters/_Y.png",	                sx:0,	sy:0,	width:62, 	height:140	},
        {name: "z",                       src: this.img_src+"letters/_Z.png",	                sx:0,	sy:0,	width:50, 	height:140	},

        {name: "0",                       src: this.img_src+"letters/0.png",	                sx:0,	sy:0,	width:55, 	height:140	},
        {name: "1",                       src: this.img_src+"letters/1.png",	                sx:0,	sy:0,	width:51, 	height:140	},
        {name: "2",                       src: this.img_src+"letters/2.png",	                sx:0,	sy:0,	width:58, 	height:140	},
        {name: "3",                       src: this.img_src+"letters/3.png",	                sx:0,	sy:0,	width:56, 	height:140	},
        {name: "4",                       src: this.img_src+"letters/4.png",	                sx:0,	sy:0,	width:63, 	height:140	},
        {name: "5",                       src: this.img_src+"letters/5.png",	                sx:0,	sy:0,	width:53, 	height:140	},
        {name: "6",                       src: this.img_src+"letters/6.png",	                sx:0,	sy:0,	width:55, 	height:140	},
        {name: "7",                       src: this.img_src+"letters/7.png",	                sx:0,	sy:0,	width:57, 	height:140	},
        {name: "8",                       src: this.img_src+"letters/8.png",	                sx:0,	sy:0,	width:59, 	height:140	},
        {name: "9",                       src: this.img_src+"letters/9.png",	                sx:0,	sy:0,	width:56, 	height:140	},
        {name: " ",                       src: this.img_src+"letters/espace.png",	            sx:0,	sy:0,	width:55, 	height:140	},
      ];


    preloadImage = function (img, onload, onerror) {
        for(var i = 0; i < Object.keys(img).length; i++){
            this.imgList[img[i].name] = Object.assign({image : new Image()});
            this.imgList[img[i].name].image.src = img[i].src;
            this.imgList[img[i].name].image.alt = img[i].name;
            this.imgList[img[i].name].image.sx = img[i].sx;
            this.imgList[img[i].name].image.sy = img[i].sy;
            this.imgList[img[i].name].image.width = img[i].width;
            this.imgList[img[i].name].image.height = img[i].height;
            this.imgList[img[i].name].image.class = img[i].class;
            percLoad = (i+1)/Object.keys(img).length;
        }
    }

    run = function (imgURL, x, y){
        this.imageObj = new Image();
        c.drawImage(
        this.imgList[imgURL].image,
        x,
        y,
        this.imgList[imgURL].image.width,
        this.imgList[imgURL].image.height
        );
        this.imageObj.src = this.imgList[imgURL].image.src;
    }
}
