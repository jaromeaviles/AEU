$(window).on("scroll", function() {
	if($(window).scrollTop() > 200) {
		$("nav").removeClass("navbar-light bg-light");
		$("nav").addClass("navbar-dark bg-dark");
		$(".navbar-brand img").attr("src", "assets/img/AUE-AI2-03.png");
	} else {
		$(".navbar-brand img").attr("src", "assets/img/AUE-AI2-02.png");
		$("nav").removeClass("navbar-dark bg-dark");
		$("nav").addClass("navbar-light bg-light");
	}
});

