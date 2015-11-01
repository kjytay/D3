/*---------------------------
 CODE FOR HOVERING CIRCLE DEMO
 Adapted from: http://christopheviau.com/d3_tutorial/
---------------------------*/
// Set dimensions for the canvas
var circ = d3.select("#circle-demo")
  .append("svg:svg")
  .attr("width", 100)
  .attr("height", 100);

circ.append("svg:circle")
  .style("stroke", "red")  // outline of circle
  .style("fill", "white")
  .attr("r", 40)
  .attr("cx", 50)  // x-coord of circle's centre
  .attr("cy", 50)  // y-coord of circle's centre
  .on("mouseover", function() { d3.select(this)
  								  .style("fill", "aliceblue")
  								  .style("stroke", "black"); })
  .on("mouseout" , function() { d3.select(this)
  								  .style("fill", "white")
  								  .style("stroke", "red"); });
