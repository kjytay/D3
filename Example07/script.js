/*---------------------------
 CODE FOR LINE
 Source: https://www.dashingd3js.com/svg-paths-and-d3js
---------------------------*/
// Data for the line
var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

/*---------------------------
 CODE FOR LINEAR
---------------------------*/

// Accessor Function
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
                         
// The SVG Container
var svgContainer = d3.select("#linear")
					 .append("svg")
					 .attr("width", 100)
					 .attr("height", 80);

var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

/*---------------------------
 CODE FOR BASIS
---------------------------*/

// Accessor Function
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("basis");
                         
// The SVG Container
var svgContainer = d3.select("#basis")
					 .append("svg")
					 .attr("width", 100)
					 .attr("height", 80);

var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

/*---------------------------
 CODE FOR CARDINAL
---------------------------*/

// Accessor Function
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("cardinal");
                         
// The SVG Container
var svgContainer = d3.select("#cardinal")
					 .append("svg")
					 .attr("width", 100)
					 .attr("height", 80);

var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
