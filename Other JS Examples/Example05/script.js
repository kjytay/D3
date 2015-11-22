// Source: Stephen A. Thomas, "Data Visualization with Javascript."

// draw the sparkline (for any element in "sparkline" class)
// function 1st param is data. Here, we put "html" to say that
// our data is in the HTML markup.
$(function() {
	$(".sparkline").sparkline("html", {
		lineColor: "dimgray",
		fillColor: false,
		defaultPixelsPerValue: 1,
		spotColor: "red",
		minSpotColor: "red",
		maxSpotColor: "red",
		normalRangeMin: 82,
		normalRangeMax: 180
	});
});