require.config({
	paths:{
		jquery:"./jquery-1.11.1.min",
		jqueryUI:"./jquery-ui.min"
	}
})


require(["jquery","window"],function($,w){
	$("#a").click(function(){
		var win=new w.Window();
		win.alert({
			title:"提示",
			content:"welcome!",
			text4alertbtn:"关闭",
			skinClassName:"window_skin_b",
			width:200,
			height:100,
			y:50,
			hasClosebtn:true,
			handler4alertbtn:function(){
				alert("you click the alertbutton")
			},
			handler4closebtn:function(){
				alert("you click the closebtn");
			},
			hasMask:true,
			isDraggable:true,
			draghandle:".window_header"

		}).on("alert",function(){alert("the second handler of alertbtn")})
		  .on("close",function(){alert("the second hanlder of closetbn")})

		// console.log(win);
		// win.on("alert",function(){alert("you click the alertbutton")});
		// win.on("alert",function(){
		// 	alert("the second handler of alertbtn");
		// });
		win.on("alert",function(){
			alert("the third handler of alertbtn");
		})

		// win.on("close",function(){alert("you click the closebtn")});
		// win.on("close",function(){
		// 	alert("the second hanlder of closebtn");
		// })
	});

})