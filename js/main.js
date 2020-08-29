// var btn = document.getElementById('btn');

// btn.onclick = function (e) {
// 	e.preventDefault();
// 	var text = document.querySelector('p.intro');
// 	text.classList.add('red');
// 	var img = document.querySelector('.desktop');
// 	img.style.display = 'none';
// 	document.querySelector('.skill-change').style.marginLeft = '50px';
// }

$(function () {
	$(window).scroll(function() {
	    $(' .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.future-item').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
})
