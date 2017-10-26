$(document).ready(function(){
		console.log("up and running!");
		
		$(window).scroll(function (event) {
		
			var scrollVal = $(document).scrollTop().valueOf();
			console.log(scrollVal)
			if(scrollVal < 1000){	
				$(".sideLeft").css({
					'position' : 'sticky',
					'height' : '100vh'
				})
			}else if(scrollVal > 1000){
				let height = $(".sideRight").css('height')
				$(".sideLeft").css({
					'position' : 'relative',
					'height' : height,
				})
			}
		});
		
}); //End of doc. Don't modify above!