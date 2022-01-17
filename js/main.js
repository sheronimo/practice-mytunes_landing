$(function () {
	menu = $(".nav-menu");

	$("#openup").on("click", function (e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function () {
		var w = $(this).width();
		if (w > 480 && menu.is(":hidden")) {
			menu.removeAttr("style");
		}
	});

	$(".nav-item").on("click", function (e) {
		var w = $(window).width();
		if (w < 480) {
			menu.slideToggle();
		}
	});
	$(".open-menu").height($(window).height());
});
