// 首页
var indexheight={
	headerDiv:$(".header"),
	linkNode:$(".links-center"),
	liNodes:$(".links-center ul li"),
	indexbg01:$(".indexbg01"),
	indexbg01img:$(".indexbg01 img"),
	indexbg02li:$(".indexbg02 ul li"),
	className:"bg02-current",
	indexbg02ul:$(".indexbg02 ul"),
	indexbg02img:$(".indexbg02 ul li img"),
	claenblock:$(".cleanblock"),
	indexretwo:function(){
		var _this=this;
		var windowidth=$(window).width();
		var height=$(window).height();
		var imgwh=1920/800;
		var winwh=windowidth/height;
		if(winwh<imgwh){//根据高度定宽度
			var widthW=height*1920/800;
			marginW=(widthW-windowidth)/2;
			_this.indexbg02img.attr("style","width:"+widthW+"px;height:"+height+"px;margin-left:-"+marginW+"px")

		}
		else{//根据宽度定高度
			var heightH=windowidth*800/1920;
			if(heightH>height){
				marginH=(heightH-height)/2
			_this.indexbg02img.attr("style","width:"+windowidth+"px;height:"+heightH+"px;margin-top:-"+marginH+"px")

			}
			

		}
	},
	indexreone:function(){
		
		var _this=this;
		var windowidth=$(window).width();
		var height=$(window).height();
		var imgwh=1920/932;
		var winwh=windowidth/height;
		if(winwh<imgwh){//根据高度定宽度
			var widthW=height*1920/932;
			marginW=(widthW-windowidth)/2;
			_this.indexbg01img.attr("style","width:"+widthW+"px;height:"+height+"px;margin-left:-"+marginW+"px")

		}
		else{//根据宽度定高度
			var heightH=windowidth*932/1920;
			if(heightH>height){
				marginH=(heightH-height)/2
			_this.indexbg01img.attr("style","width:"+windowidth+"px;height:"+heightH+"px;margin-top:-"+marginH+"px")

			}
			

		}


		
	},
	indextwo:function(){//根据高度定宽度
		var _this=this;
		var windowidth=$(window).width();
		var height=$(window).height();
		var imgwh=1920/932;
		var winwh=windowidth/height;
		if(winwh<imgwh){//根据高度定宽度
			var widthW=height*1920/932;
			marginW=(widthW-windowidth)/2;

			_this.indexbg02img.attr("style","width:"+widthW+"px;height:"+height+"px;margin-left:-"+marginW+"px")

		}
		else{//根据宽度定高度
			var heightH=windowidth*932/1920;
			if(heightH>height){
				marginH=(heightH-height)/2
			_this.indexbg02img.attr("style","width:"+windowidth+"px;height:"+heightH+"px;margin-top:-"+marginH+"px")

			}
			

		}

	},
	indexone:function(){
		
		var _this=this;
		var windowidth=$(window).width();
		var height=$(window).height();
		var imgwh=1920/932;
		var winwh=windowidth/height;
		console.log(imgwh,winwh,)
		if(winwh<imgwh){//根据高度定宽度
			var widthW=height*1920/932;
			console.log(widthW)
			marginW=(widthW-windowidth)/2;
			_this.indexbg01img.attr("style","width:"+widthW+"px;height:"+height+"px;margin-left:-"+marginW+"px")

		}
		else{//根据宽度定高度
			var heightH=windowidth*932/1920;
			if(heightH>height){
				marginH=(heightH-height)/2
			_this.indexbg01img.attr("style","width:"+windowidth+"px;height:"+heightH+"px;margin-top:-"+marginH+"px")

			}


		}

		
	},
	fade:function(newPos,oldPos){
		var _this=this;
		_this.indexbg02li.eq(newPos).addClass(_this.className).siblings("."+_this.className).removeClass(_this.className);
		_this.indexbg02li.eq(newPos).stop(false,true).fadeIn(1000);
		_this.indexbg02li.eq(oldPos).stop(false,true).fadeOut(1000);

	},
	next:function(){
		var _this=this;

			var oldPos=$(".indexbg02 ul").find("."+_this.className).index();
			var lastPos=_this.indexbg02li.length-1;
			var newPos=oldPos==lastPos?0:oldPos+1;
			_this.fade(newPos,oldPos);
	},
	bgimg:function(){
		var _this=this;
		_this.liNodes.mouseenter(function(){
			$(this).find("strong").show();
			$(this).find("i").show();
			$(this).find("img").stop(true,false).animate({width:"110%",marginLeft:"-10px",height:"110%",marginTop:"-10px"},"normal")
			
			$(this).find(".linkword").stop(true,false).animate({marginTop:"-55px"})

		});
		_this.liNodes.mouseleave(function(){
			$(this).find("strong").hide();
			$(this).find("i").hide();
			$(this).find("img").stop(true,false).animate({width:"100%",marginLeft:"0px",height:"100%",marginTop:"0px"},"normal")
			$(this).find(".linkword").stop(true,false).animate({marginTop:"-27px"})
		});
	},
	heightchange:function(){
		var _this=this;
		var width=$(window).width();
		var height=$(window).height();
		_this.headerDiv.height(height);
		_this.claenblock.height(height);
		if(width>470){
		var top=height/3;
		$(".header-title").attr("style","top:"+top+"px")}
		_this.indexone();//第一块定图自适应
		_this.indextwo();//第二块定图自适应
		_this.indexbg02ul.height(height);
		_this.indexbg02ul.width(width);

		
		$(window).resize(function(){
			var width=$(window).width();
			var height=$(window).height();
			_this.headerDiv.height(height);
			_this.claenblock.height(height);
			_this.indexbg02ul.height(height);
			_this.indexbg02ul.width(width);
		if(width>470){
		var top=height/3;
		$(".header-title").attr("style","top:"+top+"px")}
			_this.indexreone();
			_this.indexretwo();
		});
			
		$(window).scroll(function(){
			
			_this.indexbg01.height($(window).height()-$("body").scrollTop());
		});
	},
	init:function(){
		var _this=this;
		_this.heightchange();
		_this.bgimg();
		setInterval(function(){
		_this.next();
				},3000);


	}
}
indexheight.init();


//点击导航栏伸缩
var nav={
	spanbtn:$(".header-nav .navbtn"),
	navul:$(".navbtn-list"),
	bool:0,//表示未显示
	scbool:0,//表示输入框未显示
	searchbtn:$(".search-btn"),//搜索切换颜色出现ip框按钮
	searchip:$(".header-search"),
	ipval:$(".header-search input"),
	subbtn:$(".search-btn input"),
	value:"",
	timeout:null,
	kuangshow:function(){
		var _this=this;
		console.log(_this.value)
		if(_this.scbool==0){//出现input框
		_this.searchbtn.attr("style","background-color:rgb(113, 113, 113);")
		_this.searchip.animate({right:"63px"},500)
		_this.scbool=1;
		}
		else{
			if(_this.value==""){
			_this.subbtn.hide();
			_this.searchbtn.attr("style","background-color:#fff;")
			_this.searchip.animate({right:"-150px"},500)
			_this.scbool=0;}
			else{
				_this.subbtn.show();
			}
			
		}
	},
	low:function(){
		var _this=this;
		_this.bool=0;
		_this.navul.stop(true,false).animate({right:"-800px"},500)
	},
	long:function(){
		var _this=this;
		_this.bool=1;
		_this.navul.stop(true,false).animate({right:0},500)
		_this.timeout=setTimeout(function(){_this.low()},5000)
	},
	init:function(){
		var _this=this;
		_this.spanbtn.click(function(){
			if(_this.bool==0){
				_this.long();
				
			}
			else{
				_this.low();
				
			}
			
		});
		_this.spanbtn.mouseenter(function(){
			clearTimeout(_this.timeout)
		});
		_this.navul.mouseenter(function(){
			clearTimeout(_this.timeout)
		});
		_this.navul.mouseleave(function(){
			_this.timeout=setTimeout(function(){_this.low()},5000)
		});

		_this.ipval.change(function(){
			_this.value=_this.ipval.val().trim();
		});
		_this.searchbtn.click(function(){
			_this.kuangshow();
		});

	}
}
nav.init();

//about.html
var Fun={
	closebtn:$(".closebtn"),
	popup:$(".Popup"),
	ulnode:$(".about-list ul"),
	liNodes:$(".about-list ul li"),
	titlenav:$(".title-nav"),
	titlenavh:$(".title-nav h3"),
	imgleftbtn:$(".leftbtn"),//图片前切换
	imgrightbtn:$(".rightbtn"),//图片后切换
	next:function(obj){
		var _this=this;
		var className="li-current";
		var oldPos=obj.parent().find("."+className).index()-2;
		var lastPos=obj.parent().find("li").length-1;
		var newPos=oldPos==lastPos?0:oldPos+1;
		_this.fade(newPos,oldPos,obj);

	},
	fade:function(newPos,oldPos,obj){
		var _this=this;
		var className="li-current";
		var imgli=obj.parent().find("li");
		imgli.eq(newPos).addClass(className).siblings("."+className).removeClass(className);
		imgli.eq(newPos).stop(false,true).fadeIn(500);
		imgli.eq(oldPos).stop(false,true).fadeOut(500);

	},
	before:function(obj){
		var _this=this;
		var className="li-current";
		var oldPos=obj.parent().find("."+className).index()-2;
		var lastPos=obj.parent().find("li").length-1;
		var newPos=oldPos==0?lastPos:oldPos-1;
		_this.fade(newPos,oldPos,obj);

	},
	artictab:function(obj){
		obj.addClass("title-current").siblings(".title-current").removeClass("title-current");
		var num=obj.index();
		obj.parent().parent().find(".artic-current").hide();
		obj.parent().parent().find(".about-artic").eq(num).addClass("artic-current").show();
		$('.scroll-pane').jScrollPane();
	},
	showart:function(obj){
		var _this=this;
		var num=obj.index();
		_this.popup.eq(num).show();
		$(".Popupbig").jScrollPane();
		$('.scroll-pane').jScrollPane();
	},
	init:function(){
		var _this=this;
		_this.liNodes.click(function(){
			_this.showart($(this));
		});
		_this.closebtn.click(function(){
			_this.popup.hide();
		});
		_this.titlenavh.click(function(){
			_this.artictab($(this));//文章切换
		});
		_this.imgleftbtn.click(function(){
			_this.before($(this));
		})
		_this.imgrightbtn.click(function(){
			_this.next($(this));
		});


	}
}
Fun.init();

//ul自适应
var size={
	listdiv:$(".about-list"),
	ulNode:$(".about-list ul"),
	liNodes:$(".about-list ul li"),
	imgNodes:$(".about-list ul li img"),


	size:function(){
		var _this=this;
		var windowidth=$(window).width();
		var height=$(window).height();
		var listW=1200*windowidth/1349;
		var ulH=343*height/637;
		var imgW=314*listW/1215;
		var marginW=32*imgW/314;
		var padW=63*windowidth/1200;
		var lipaW=imgW*12/314;
		_this.listdiv.attr("style","width:"+listW+"px;margin-left:-"+listW/2+"px;padding-left:"+padW+"px");
		_this.ulNode.height(ulH);
		_this.imgNodes.width(imgW);
		_this.liNodes.attr("style","margin-right:"+marginW/2+"px;padding-left:"+lipaW+"px;padding-right:"+lipaW+"px")
		if(windowidth<700){
		_this.listdiv.attr("style","width:314px;margin-left:-155px;padding-left:1px");
		_this.liNodes.attr("style","margin-right:4px;padding:3px;")
		_this.imgNodes.width(94);
		$(".about-list ul li dt").attr("style","font-size:14px;line-height:24px;");	
		}
		$(".about-list ul li i span").attr("style","transform:scale(0.5,0.5);margin: -50px 0 0 -40px")

	},
	init:function(){
		var _this=this;
		_this.size();
		$(window).resize(function(){
			_this.size();
		})

		

	}
}
size.init();



//品牌世界

//品牌切换
var brandtab={
	nextbtn:$(".brandlogobtn .brandlogo-next"),
	beforebtn:$(".brandlogobtn .brandlogo-before"),
	ulNode:$(".brandlogo ul"),
	mgtop:0,
	divNode:$(".brandlogo"),
	liNodes:$(".brandlogo li"),
	productli:$(".product_navs ul li"),
	popdiv:$(".pop_adv"),
	closebtn:$(".pop_adv .layer a"),
	popshow:function(){
		var _this=this;
		
		_this.popdiv.show();
	},
	init:function(){
		var _this=this;
		_this.liNodes.click(function(){
			
			_this.popshow();
		});
		_this.closebtn.click(function(){
			_this.popdiv.hide();
		});
		
		_this.nextbtn.click(function(){
		_this.mgtop+=_this.liNodes.height();
		var lastmg=_this.ulNode.height()-_this.divNode.height()+20;
		if(_this.mgtop>lastmg){
			_this.mgtop=lastmg
		}
			_this.ulNode.stop(false,true).animate({marginTop:-_this.mgtop+"px"},"normal")
		});
		_this.beforebtn.click(function(){

			_this.mgtop-=_this.liNodes.height();
			if(_this.mgtop<0){
				_this.mgtop=0;
			}
			_this.ulNode.stop(false,true).animate({marginTop:-_this.mgtop+"px"},"normal")
		});
		_this.productli.click(function(){
			_this.ulNode.stop(false,true).animate({marginTop:"0px"},"normal")
		})

	}
}
brandtab.init();