var tpl = {
	mask : $(".mask"),
	show : function(cls){
		this.mask.show();
		$(cls).show();
	},
	hide:function(cls){
		this.mask.hide();
		$(cls).hide();
	},
	select:function(){
		$(document).on("click",".header_right",function(){
			$(".select").show(0);
			setTimeout(function(){
				$(".select").addClass("open")
			},0)
		})
		$(document).on("click",".back",function(){
			$(".select").removeClass("open")
			setTimeout(function(){
				$(".select").hide(0);
			},300)
		})
	}
}
