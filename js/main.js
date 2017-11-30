
function openNewWindow(url){
	window.open(url, "_blank")
};

function iosHover (cl){
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	if(iOS){
		var clickedClass = document.querySelector("." + cl);
		var hidden = clickedClass.children[1].className;
		document.querySelector('.' + hidden).setAttribute('style', "visibility: visible; transition: visibility 2s ease-in-out;");
	};
};


$(document).ready(function(){
		console.log("up and running!");
		$(window).scrollTop(0);

		var width = $(window).width();

	$(window).scroll(function (event) {
		var scrollVal = $(document).scrollTop().valueOf();
		width = $(window).width();

		if(scrollVal < 1500 && width > 810){	
			$(".sideLeft").css({
				'position' : 'fixed',
				'height' : '100vh'
			});
			$(".sideLeft").css("top", Math.max(0, 689 - $(this).scrollTop()));
		}else if(scrollVal > 1500 && width > 810){
			var height = $(".sideRight").css('height');
			$(".sideLeft").css({
				'position' : 'relative',
				'height' : height,
			});
		};
		
		if(scrollVal < 4180 && width > 810){
			$(".projectLeftSide").css({
				'position' : 'fixed',
				'height' : '100vh'
			});
			$(".projectLeftSide").css("top",Math.max(0,2199-$(this).scrollTop()));
		} else if (scrollVal > 4180 && width > 810){
			let height1 = $(".projectRightSide").css('height')
			$(".projectLeftSide").css({
				'position' : 'relative',
				'height' : height1,
			});
		};
	});

}); //End of doc. Don't modify above!