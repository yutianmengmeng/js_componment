define(['mod0'],function(a){
	function mod2(){
		this.mod0=a.mod0();
		alert("mod2");
	}
	return {mod2:mod2}
})