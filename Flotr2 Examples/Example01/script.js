// Source: Stephen A. Thomas, "Data Visualization with Javascript."

// Data for Chart 1
var wins = [[[0,13],[1,11],[2,15],[3,15],[4,18],
  	         [5,21],[6,28]]];
var years = [[0, "2006"],
             [1, "2007"],
             [2, "2008"],
             [3, "2009"],
             [4, "2010"],
             [5, "2011"],
             [6, "2012"]];
  	             
// window.onload makes sure that browser has loaded document
window.onload = function () {
  // Flotr.draw takes 3 params: HTML element to contain the chart,
  // data for the chart, and any chart options.
  Flotr.draw(
    document.getElementById("chart1"),
    wins,
    {
      title: "Manchester City Wins",  // chart title
      colors: ["#89AFD2"],  // color of bars
      
      // specify it's a bar chart
      bars: { show: true,
              barWidth: 0.5,   // to give spacing btw bars
              shadowSize: 0,   // remove shadow
              fillOpacity: 1,  // opaque
              lineWidth: 0 },  // outline of bars
              
      // axes
      yaxis: { min: 0,             // start from 0
  	  	  	   tickDecimals: 0 },  // no decimal places 	   
  	  xaxis: { ticks: years },  // define labels for x-axis
  	  
  	  // grid (remove gridlines)
  	  grid: { horizontalLines: false,
  	          verticalLines: false }
  	}
  );
};

// Additional Data for Chart 2
var wins2 = [[[0,28]],[[1,28]],[[2,21]],[[3,20]],[[4,19]]];
var teams = [[0, "MCI"],
             [1, "MUN"],
             [2, "ARS"],
             [3, "TOT"],
             [4, "NEW"]];

Flotr.draw(
  document.getElementById("chart2"),
  wins2,
  {
    title: "Premier League Wins (2011-2012)",
    colors: ["#89AFD2", "#1D1D1D", "#DF021D", "#0E204B", "#E67840"],
    bars: { show: true,
            barWidth: 0.5,
            shadowSize: 0,
            fillOpacity: 1,
            lineWidth: 0 },
    yaxis: { min: 0,
    	  	 tickDecimals: 0 },
  	xaxis: { ticks: teams },  // define teams as labels for x-axis
    grid: { horizontalLines: false,
            verticalLines: false }
  }
);
