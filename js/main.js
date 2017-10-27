function openNewWindow(url){
	window.open(url, "_blank")
}

$(document).ready(function(){
		console.log("up and running!");
		
		$(window).scroll(function (event) {
		
			var scrollVal = $(document).scrollTop().valueOf();
			console.log(scrollVal)
			if(scrollVal < 1500){	
				$(".sideLeft").css({
					'position' : 'sticky',
					'height' : '100vh',
				})
			}else if(scrollVal > 1500){
				let height = $(".sideRight").css('height')
				$(".sideLeft").css({
					'position' : 'relative',
					'height' : height,
				})
			}

			$(".projectLeftSide").css("top",Math.max(0,2199-$(this).scrollTop()));
		});

}); //End of doc. Don't modify above!