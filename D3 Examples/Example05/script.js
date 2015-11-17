/*---------------------------
 CODE FOR BINDING DATA
 Source: https://www.dashingd3js.com/binding-data-to-dom-elements
         https://www.dashingd3js.com/using-data-bound-to-dom-elements
---------------------------*/
var data = ["1", "2", "3"];

var p = d3.select("body")
          .selectAll("p")   // selects all the available "p" tags in "body"
          .data(data)       // gets data. as no key provided, 1st elt 
                            // assigned to 1st "p" elt, and so on...
          .enter()          // creates placeholder for data that
                            // is not assigned
          .append("p")      // inserts a p element for each placeholder
          .text(function(d) { return "Hello, number " + d + "!"; });
          
          /*-------------------------------
          The variable "d" is provided to us by D3.js and it refers to
          the current __data__ attribute for the specific element
          being processed.
          
          d3 also provides us with 2 other variables:
          - this: the current DOM element being evaluated
          - i: index of the current HTML element being evaluated
          ---------------------------*/

/*---------------------------
 CODE FOR CONCENTRIC CIRCLES
 Source: https://www.dashingd3js.com/creating-svg-elements-based-on-data
---------------------------*/
var circleRadii = [40, 20, 10];

var svgContainer = d3.select("body")
					 .append("svg")
					 .attr("width", 200)
					 .attr("height", 200);

var circles = svgContainer.selectAll("circle")
						  .data(circleRadii)
						  .enter()
						  .append("circle");
						  
var circleAttributes = circles
					   .attr("cx", 50)
					   .attr("cy", 50)
					   .attr("r", function(d) { return d; })
					   .style("fill", function(d) {
					   	 var returnColor;
					   	 if (d === 40) { returnColor = "green"; }
					   	 else if (d === 20) { returnColor = "purple"; }
					   	 else { returnColor = "red" }
					   	 return returnColor; 
					   });

/*---------------------------
 CODE FOR DESCENDING CIRCLES
 Source: https://www.dashingd3js.com/using-the-svg-coordinate-space
---------------------------*/
var spaceCircles = [30, 70, 110];

var svgContainer = d3.select("body")
					 .append("svg")
					 .attr("width", 200)
					 .attr("height", 200)
					 .style("border", "1px solid black");
					 
// bind the data to the SVG circle elements
var circles = svgContainer.selectAll("circle")
						  .data(spaceCircles)
						  .enter()
						  .append("circle");

var circleAttributes = circles
					   .attr("cx", function(d) { return d; })
					   .attr("cy", function(d) { return d; })
					   .attr("r", 20)
					   .style("fill", function(d) {
					   	 var returnColor;
					   	 if (d === 30) { returnColor = "green"; }
					   	 else if (d === 70) { returnColor = "purple"; }
					   	 else { returnColor = "red"; }
					   	 return returnColor;
					   });