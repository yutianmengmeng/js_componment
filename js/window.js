define(["widget","jquery","jqueryUI"],function(widget,$,$UI){
	function Window(){
		this.cfg={
			title:"系统消息",
			width:100,
			height:100,
			text4alertbtn:"确定",
			content:"",
			handler:null,
			hasClosebtn:true,
			handler4alertbtn:null,
			handler4closebtn:null,
			skinClassName:null,
			hasMask:true,
			isDraggable:false,
			draghandle:null

		}
		// this.handlers={}
	}
	Window.prototype=$.extend({},new widget.Widget(),{
		// on:function(type,handler){
		// 	if(typeof this.handlers[type] === 'undefined'){
		// 		this.handlers[type]=[];
		// 	}
		// 	this.handlers[type].push(handler);
		// 	return this;
		// },
		// fire:function(type,data){
		// 	if(this.handlers[type] instanceof Array){
		// 		var handlers=this.handlers[type];
		// 		for(var i=0,len=handlers.length;i<len;i++){
		// 			handlers[i](data);
		// 		}
		// 	}
		// 	return this;
		// },
		alert:function(cfg){
			var CFG=$.extend(this.cfg,cfg);
			var boundingBox=$('<div  class="window_boundingbox">'+
								'<div  class="window_header">'+CFG.title+'</div>'+
								'<div  class="window_body">'+CFG.content+'</div>'+
								'<div  class="window_footer"><input type="button" class="alertbtn" value="'+CFG.text4alertbtn+'">'+
				'</div>');
			var mask=null,that=this;
			if(CFG.hasMask){
				mask=$("<div class=window_mask></div");
				mask.appendTo("body");
			}
			boundingBox.appendTo("body");
			var btn=$(".alertbtn");
			btn.click(function(){
				// CFG.handler4alertbtn && CFG.handler4alertbtn();//若是存在handler就执行,不存在就不执行
				boundingBox.remove();
				CFG.hasMask&&mask.remove();
				that.fire("alert");
			});
			boundingBox.css({
				width:CFG.width+"px",
				height:CFG.height+"px",
				left:(CFG.x || (window.innerWidth-CFG.width)/2)+"px",
				top:(CFG.y || (window.innerHeight-CFG.height)/2)+"px"

			});
			if(CFG.hasClosebtn){
				var clsbtn=$('<input type=button value="X" class="clsbtn">');
				clsbtn.appendTo(boundingBox);
				clsbtn.click(function(){
					// CFG.handler4closebtn&&CFG.handler4closebtn();
					boundingBox.remove();
					CFG.hasMask&&mask.remove();
					that.fire("close");
				})
			}
			if(CFG.skinClassName){
				boundingBox.addClass(CFG.skinClassName);
			}
			if(CFG.isDraggable){
				if(CFG.draghandle){
					boundingBox.draggable({handle:CFG.draghandle})
				}else{
					boundingBox.draggable()
				}
				
			}
			if(CFG.handler4alertbtn){
				this.on("alert",CFG.handler4alertbtn)
			}
			if(CFG.handler4closebtn){
				this.on("close",CFG.handler4closebtn)
			}
			return this;
		},
		confirm:function(){},
		prompt:function(){}
	});

	return {
		Window:Window
	}
})