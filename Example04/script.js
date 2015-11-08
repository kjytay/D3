/*---------------------------
 CODE FOR LINE GRAPH
 Source: http://bl.ocks.org/d3noob/b3ff6ae1c120eea654b5
---------------------------*/
// set dimensions of canvas
var margin = {top: 30, right: 20, bottom: 30, left: 50},
	width = 600 - margin.left - margin.right,
	height = 270 - margin.top - margin.bottom;
	
// function to parse date/time
var parseDate = d3.time.format("%d-%b-%y").parse;

// set the ranges for the axes
var x = d3.time.scale()
		  .range([0, width]);
var y = d3.scale.linear()
		  .range([height, 0]);
		  
// define axes
// more info on ticks here: http://stackoverflow.com/questions/13100314/change-the-ticks-on-x-axis
var xAxis = d3.svg.axis()
			  .scale(x)
			  .orient("bottom")  // labels appear below the axis
			  .ticks(5);
var yAxis = d3.svg.axis()
			  .scale(y)
			  .orient("left")  // labels appear on left of axis
			  .ticks(5);

// define the line graph
var valueline = d3.svg.line()
			      .x(function(d) { return x(d.date); })
			      .y(function(d) { return y(d.close); });

// This part on is where it is similar to Example 01.
// add the svg canvas
var svg = d3.select("body")
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")    // used to group svg shapes together
			.attr("transform", 
				  "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("data.csv", function(error, data) {
	// parse the data
	data.forEach(function(d) {
		d.date = parseDate(d.date);
		d.close = +d.close;  // + sets the value to a numeric value if it isn't already
	});
	
	// scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.date; })); //d3.extent gives both
															   // min & max of data 
	y.domain([0, d3.max(data, function(d) { return d.close; })]);
	
	// add the line graph
	svg.append("path")
	   .attr("class", "line")
	   .attr("d", valueline(data));
	   
	// add the x-axis
	svg.append("g")
	   .attr("class", "x axis")
	   .attr("transform", "translate(0," + height + ")")
	   .call(xAxis);
	   
	// add the y-axis
	svg.append("g")
	   .attr("class", "y axis")
	   .call(yAxis);
	   
});
