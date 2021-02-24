$(document).ready(function () {
	console.log("document loaded");
});

$(window).on("load", function () {
	console.log("window loaded");
});

$(document).ready(function () {
	$(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 0,
	nav: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 5,
		},
	},
});

var browserWidth = $(window).width(),
	cen = (1920 - browserWidth) / 2;

$(".ani").css("left", -cen);

function morphRect() {
	document.getElementById("ani-rect").beginElement();
}

function morphCircle() {
	document.getElementById("ani-circle").beginElement();
}

var cancel = 1;
$(window).on("scroll", function () {
	if ($(window).scrollTop()) {
		if (cancel == 1) {
			morphRect();
			cancel = 0;
			$("#logo").css({ width: "170px", padding: "7px 0px" });
			$("#nav").css({ visibility: "visible", opacity: "1" });
			console.log("down");
		} else {
			return;
		}
	} else {
		morphCircle();
		var browserWidth = $(window).width();
		if (browserWidth > 860) {
			$("#logo").css({ width: "450px" });
		} else {
		}
		if (browserWidth < 1572) {
			$("#nav").css({ visibility: "hidden", opacity: "0" });
		} else {
		}

		console.log("top");
		cancel = 1;
	}
});

$(window).on("resize", function () {
	var browserWidth = $(window).width();
	var cen = (1920 - browserWidth) / 2;
	$(".ani").css("left", -cen);
	console.log(cen);
	if ((browserWidth < 1572) & $(window).scrollTop()) {
		$("#nav").css({ visibility: "hidden", opacity: "0" });
	} else {
		$("#nav").css({ visibility: "visible", opacity: "1" });
	}
	if ((browserWidth > 860) & $(window).scrollTop()) {
		$("#logo").css({ width: "450px" });
	}
});
