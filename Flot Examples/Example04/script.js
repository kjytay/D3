// Source: Stephen A. Thomas, "Data Visualization with Javascript."

/*--------------------------------------------
At least for now, the World Bank has a nasty bug in their
API implementation. Their server converts the name of the
JSONP callback function to lowercase. By default, jQuery
uses a callback function of the form `jQuery9876_1234`
(except the number strings are **much** longer) and so
the JSONP response that the World Bank returns fails
trying to execute `jquery9876_1234`. To workaround this
bug, we'll intercept all of jQuery's AJAX calls before
they're executed. We look for the World Bank callback
parameter `prefix=` and, if it's present and the value isn't
lowercase, create a lowercase wrapper function around the
real callback that jQuery has created.
--------------------------------------------*/
$.ajaxSetup({
	beforeSend: function(xhr, settings) {
		var prefix = settings.url.match(/prefix=(.*?)&/);
		if (prefix.length > 1) {
			var callback = prefix[1];
			if (callback !== callback.toLowerCase()) {
				window[callback.toLowerCase()] =
				new Function("response", callback + "(response)");
			}
		}
	}
});

// Fire off query and retain the deferred object to track it
deferredRegionsRequest = $.getJSON(
	"http://api.worldbank.org/regions/?prefix=?",
	{ format: "jsonp" }  // w/o this, serves returns XML
);

// create 2nd Deferred object to contain whatever 1st round of processing
// gives
var deferredRegionsAvailable = $.Deferred();

// do sth with response of the 1st query
deferredRegionsRequest.done(function (response) {
	// when 1st processing done, resolve the 2nd Deferred w the results
	deferredRegionsAvailable.resolve(
		// MAP & GREP to filter out the irrelevant data
		$.map(
			// we only want data from the 2nd element whose id is not ""
			$.grep(response[1], function (regionObj) {
				return (regionObj.id !== "");
			}),
			function (regionObj) {
			// for each obj, we only want code & name
				return {
					code: regionObj.code,
					name: regionObj.name.replace(" (all income levels)", "")
				};
			}
		)
	);
});

// create 3rd Deferred object to contain whatever 2nd round of processing
// gives
var deferredAllDataAvailable = $.Deferred();

// after 2nd Deferred is resolved, we can send another request for data
deferredRegionsAvailable.done(function (regions) {
	// send request for each region
	$.each(regions, function (idx, regionObj) {
		regionObj.deferredDataRequest = $.getJSON(
			"http://api.worldbank.org/countries/"
				+ regionObj.code
				+ "/indicators/NY.GDP.MKTP.CD"
				+ "?prefix=?",
			{ format: "jsonp", per_page: 9999 }
		);
		// for each query, set a Deferred obj to keep track
		regionObj.deferredDataAvailable = $.Deferred();
		regionObj.deferredDataRequest.done(function (response) {
			regionObj.rawData = response[1] || [];
			regionObj.deferredDataAvailable.resolve();
		});
	});
	
	// when all the regionObj.deferredDataAvailable are done, this
	// next step executes
	$.when.apply(this, $.map(regions, function (regionObj) {
		return regionObj.deferredDataAvailable
	})).done( function () {
		deferredAllDataAvailable.resolve(regions);
	});
});

// to keep track of when we are ready to create the chart
var deferredChartDataReady = $.Deferred();

// parse the final data
deferredAllDataAvailable.done(function (regions) {
	$.each(regions, function (idx, regionObj) {
		regionObj.flotData = $.map(
			$.grep(regionObj.rawData, function (dataObj) {
				return (dataObj.value !== null);
			}),
			function (dataObj) {
				return [[
					parseInt(dataObj.date),
					parseFloat(dataObj.value)/1e12
				]];
			}
		)
	})
	deferredChartDataReady.resolve(regions);
});

// draw the chart
deferredChartDataReady.done(function (regions) {
	$.plot($("#chart"),
		   $.map(regions, function (regionObj) {
		   		return {
		   			label: regionObj.name,
		   			data:  regionObj.flotData
		   		};
		   }),
		   { legend: { position: "nw" } }
	);
});


