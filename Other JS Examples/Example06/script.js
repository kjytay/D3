// Source: Stephen A. Thomas, "Data Visualization with Javascript."

// default sparkline options
var sparkline_default = {
	lineColor: "#006363",
	fillColor: "#2D9999",
	spotColor: false,
	minSpotColor: false,
	maxSpotColor: false,
	// these options allow for sparkline to take in options entered
	// directly in the HTML
	enableTagOptions: true,
	tagOptionsPrefix: "data-"
};

// sparkline options for barclays
// extend: 1st param is target (object to be modified). Next params
// are objects to be merged into target. Merge process adds new
// properties and updates property values if necc.
var sparkline_barclays = $.extend( {}, sparkline_default, {
	lineColor: "#A50000",
	fillColor: "#FE4C4C"
});

// sparklines for non-barclays
$("tr:not(.barclays) .sparkline").sparkline("html", sparkline_default);
// sparklines for barclays
$("tr.barclays .sparkline").sparkline("html", sparkline_barclays);