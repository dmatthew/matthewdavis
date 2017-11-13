/*
File: main.js
*/

$(document).ready(function () {
	$(".inner-link").on("click", function (e) {
		e.preventDefault();
		var myTarget = $(this).attr("href");
		var scrollPos = $(myTarget).offset().top;
		$("html, body").animate({ scrollTop: scrollPos }, 1000);
	});
});