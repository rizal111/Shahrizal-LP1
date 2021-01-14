var browserWidth = $(window).width(),
	cen = (1920 - browserWidth) / 2;

$(".ani").css("left", -cen);

// $("#path1").attr(
// 	"d",
// 	"M 344.88932,-0.29156356 C 345.12602,34.128848 305.13997,70.05644 254.52296,69.957983 203.90595,69.859525 163.04602,34.329486 162.57486,-0.35770935 Z"
// );

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
			console.log("down");
		} else {
			return;
		}
	} else {
		morphCircle();
		$("#logo").css({ width: "450px", padding: "25px 25px 25px" });
		console.log("top");
		cancel = 1;
	}
});

$(window).on("resize", function () {
	var browserWidth = $(window).width();
	var cen = (1920 - browserWidth) / 2;
	$(".ani").css("left", -cen);
	console.log(cen);
});
