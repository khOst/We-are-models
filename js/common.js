$(function() {
	//узнаем высоту экрана и задаем хедеру
	var clientHeight = document.documentElement.clientHeight;
	$(".header_bg").css("height", clientHeight);

	//анимация
	$(".social-copy i, .social i").mouseover(function() {
		$(this).addClass("animated rubberBand");
	});
	$(".social-copy i").mouseleave(function() {

		setTimeout(function() {
			$(this).removeClass("animated rubberBand");
		}, 1000);
		
	});

	$("#logo").addClass("animated fadeInDown");

	$("#nav").addClass("animated fadeInDown");

	$(".social").addClass("animated fadeInLeft");

	$(".header_arrow").addClass("animated pulse");

	$("#nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr("href"),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$("body,html").animate({scrollTop: top}, 1000);
	});

	$(".header_arrow").click(function() {
		$("body,html").animate({scrollTop: clientHeight}, 1000);
			var id = $(this).attr("href"),
				top = $(id).offset().top;
			$("body,html").animate({scrollTop: top}, 300);
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
