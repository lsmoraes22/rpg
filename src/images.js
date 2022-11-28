let percLoad = 0;
class imageCanvas {

    imgList = [];
    imageObj = "";
    img_src= "resources/images/";

    resources = [
        {name: "tileset-autumn",          src: this.img_src+"AutumnTileset.png"},
        {name: "tileset-ice",             src: this.img_src+"IceTileset.png",	        	},
        {name: "tileset-nature",          src: this.img_src+"NatureTileset.png",	    sx:0,	sy:0,	width:23,	height:32	},
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
