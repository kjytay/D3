/*---------------------------
 CODE FOR RECT DEMO
 Source: http://www.recursion.org/d3-for-mere-mortals/
---------------------------*/
// Set dimensions for the canvas
var rectDemo = d3.select("#rect-demo").
  append("svg:svg").
  attr("width", 500).
  attr("height", 300);

rectDemo.append("svg:rect").
  attr("x", 50).   // top-left corner x-coord
  attr("y", 100).  // top-left corner y-coord
  attr("height", 100).
  attr("width", 300);

/*---------------------------
 CODE FOR BAR CHART DEMO
 Source: http://www.recursion.org/d3-for-mere-mortals/
 Note: Did not work out the x-axis labels.
---------------------------*/

var data = [{year: 2006, books: 54},
            {year: 2007, books: 43},
            {year: 2008, books: 41},
            {year: 2009, books: 44},
            {year: 2010, books: 35}];

var barWidth = 40;
var width = (barWidth + 10) * data.length; // 10 is to give space in btw bars
var height = 200;

// Set the scales to translate data to pixels
var x = d3.scale.linear().
  domain([0, data.length]).
  range([0, width]);
var y = d3.scale.linear().
  domain([0, d3.max(data, function(datum) {
    return datum.books;
  })]).
  rangeRound([0, height]);
  
// add canvas to DOM
var barDemo = d3.select("#bar-demo").
  append("svg:svg").
  attr("width", width).
  attr("height", height + 30);

barDemo.selectAll("rect").
  data(data).
  enter().    // used to add elements to the chart
  append("svg:rect").
  attr("x", function(datum, index) { return x(index); }).
  attr("y", function(datum) { return height - y(datum.books); }).
  attr("height", function(datum) { return y(datum.books) }).
  attr("width", barWidth).
  attr("fill", "#ff0000");    // bar color
  
// this code chunk is for adding labels to the bars
barDemo.selectAll("text").
  data(data).
  enter().
  append("svg:text").
  attr("x", function(datum, index) { return x(index) + barWidth; }).
  attr("y", function(datum) { return height - y(datum.books); }).
  attr("dx", -barWidth/2).
  attr("dy", "1.2em").
  attr("text-anchor", "middle").
  text(function(datum) { return datum.books; }).
  attr("fill", "white");    // font color
  