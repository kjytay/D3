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

/*---------------------------
 CODE FOR ANIMATED CIRCLE DEMO
 Adapted from: http://christopheviau.com/d3_tutorial/
---------------------------*/
var animatedCirc = d3.select("#animated-circle")
  .append("svg:svg")
  .attr("width", 100)
  .attr("height", 100);

animatedCirc.append("svg:circle")
  .style("stroke", "black")
  .style("fill", "white")
  .attr("r", 40)
  .attr("cx", 50)
  .attr("cy", 50)
  .on("mousedown", animateFirstStep);

// code for the shrinking step
function animateFirstStep() {
	d3.select(this)
	  .transition()
	  .delay(0)        // how long after fn call before animation starts (ms)
	  .duration(1000)  // how long the animation sequence takes (ms)
	  .attr("r", 10)   // final radius
	  .style("fill", "black")  // can make colour change as well
	  .each("end", animateSecondStep); // at the end of the animation,
	  								   // execute animateSecondStep
};

// code for the growing step
function animateSecondStep() {
	d3.select(this)
	  .transition()
	  .delay(500)
	  .duration(1000)
	  .attr("r", 40)
	  .style("fill", "white");
};

  
