// Source: Stephen A. Thomas, "Data Visualization with Javascript."

// DATA
var hubble_data = [
	    { nebulae: "NGC 6822", distance:  0.500, distance_error: 0.010, velocity:   57, velocity_error: 2, },
	    { nebulae: "NGC  221", distance:  0.763, distance_error: 0.024, velocity:  200, velocity_error: 6, },
	    { nebulae: "NGC  598", distance:  0.835, distance_error: 0.105, velocity:  179, velocity_error: 3, },
	    { nebulae: "NGC 4736", distance:  4.900, distance_error: 0.400, velocity:  308, velocity_error: 1, },
	    { nebulae: "NGC 4258", distance:  7.000, distance_error: 0.500, velocity:  448, velocity_error: 3, },
	    { nebulae: "NGC 5194", distance:  7.100, distance_error: 1.200, velocity:  463, velocity_error: 3, },
	    { nebulae: "NGC 4826", distance:  7.400, distance_error: 0.610, velocity:  408, velocity_error: 4, },
	    { nebulae: "NGC 3627", distance: 11.000, distance_error: 1.500, velocity:  727, velocity_error: 3, },
	    { nebulae: "NGC 7331", distance: 12.200, distance_error: 1.000, velocity:  816, velocity_error: 1, },
	    { nebulae: "NGC 4486", distance: 16.400, distance_error: 0.500, velocity: 1307, velocity_error: 7, },
	    { nebulae: "NGC 4649", distance: 16.800, distance_error: 1.200, velocity: 1117, velocity_error: 6, },
];

// chart dimensions
var margin = {top: 20, right: 20, bottom: 30, left: 40},
	width = 640 - margin.left - margin.right,
	height = 400 - margin.top - margin.bottom;

// svg container
var svg = d3.select("#container")
	.append("svg")
	.attr("height", height + margin.left + margin.right)
	.attr("width",  width + margin.top + margin.bottom);
	
// create chart within a child SVG <g> element
var chart = svg.append("g")
	// have top-left corner in the right place
	.attr("transform",
		"translate(" + margin.left + "," + margin.top + ")" );

// set the scale ranges
var xScale = d3.scale.linear()
	.range([0, width]);
var yScale = d3.scale.linear()
	.range([height, 0]);  // note inversion, cos SVG puts 0 on top.

// set the scale domains
// .nice() ensures the domain ends on nice round values
xScale.domain([
	d3.min(hubble_data, function (nebulae) {
		return nebulae.distance - nebulae.distance_error;
	}),
	d3.max(hubble_data, function (nebulae) {
		return nebulae.distance + nebulae.distance_error;
	})
]).nice();
yScale.domain([
	d3.min(hubble_data, function (nebulae) {
		return nebulae.velocity - nebulae.velocity_error;
	}),
	d3.max(hubble_data, function (nebulae) {
		return nebulae.velocity + nebulae.velocity_error;
	})
]).nice();

// create the axes objects
var xAxis = d3.svg.axis()
	.scale(xScale)
	.orient("bottom");
var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left");

// add the axes, each as its own <g> group
chart.append("g")
	.attr("transform", "translate(0," + height + ")")
	.attr("class", "axis")  // assign "axis" class
	.call(xAxis)
	// label the x-axis
	.append("text")
		.attr("x", width)
		.attr("y", -6)
		.style("text-anchor", "end")
		.text("Distance (Mpc)");
chart.append("g")
	.attr("class", "axis")  // assign "axis" class
	.call(yAxis)
	// label the y-axis
	.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Red Shift Velocity (km/s)");

// ADD DATA TO CHART
hubble_data.forEach(function (nebulae) {
	// each data point to be added as a rectangle
	chart.append("rect")
		.attr("x",      xScale(nebulae.distance - nebulae.distance_error) )
		.attr("width",  xScale(2 * nebulae.distance_error) )
		.attr("y",      yScale(nebulae.velocity - nebulae.velocity_error) )
		.attr("height", height - yScale(2 * nebulae.velocity_error) )
		.attr("fill", "red")
});

// draw linear regression line
chart.append("line")
	.attr("x1", xScale(0))
	.attr("y1", yScale(0))
	.attr("x2", xScale(20))
	.attr("y2", yScale(1400))
	.style({ "stroke": "blue" });