/*---------------------------
 CODE FOR CIRCLE
 Source: https://www.dashingd3js.com/adding-an-svg-element
---------------------------*/
d3.select("body")
  .append("svg")             // add an SVG element to body
  .attr("width", 50)         // width of SVG canvas
  .attr("height", 50)        // height of SVG canvas
  .append("circle")          // add a circle to the canvas
  .attr("cx", 25)            // circle center x-coord
  .attr("cy", 25)            // circle center y-coord
  .attr("r", 25)             // circle radius
  .style("fill", "purple");  // circle fill
