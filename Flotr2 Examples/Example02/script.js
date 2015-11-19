// Source: Stephen A. Thomas, "Data Visualization with Javascript."

// Data for Chart
var co2 = [[1959, 315.97],
           [1960, 316.91],
           [1961, 317.64],
           [1962, 318.45],
           [1963, 318.99],
           [1964, 319.62],
           [1965, 320.04],
           [1966, 321.38],
           [1967, 322.16],
           [1968, 323.04],
           [1969, 324.62]]

// fake data for temperature deviations from 20th-C average.
var temp = [[1959, 0.060],
            [1960, -0.086],
            [1961, 0.050],
            [1962, 0.094],
            [1963, 0.077],
            [1964, 0.057],
            [1965, 0.150],
            [1966, 0.114],
            [1967, 0.132],
            [1968, 0.116],
            [1969, 0.172]]

// dummy data to draw horizontal line to show that temp data
// is actually a deviation
var zero = [];
for (var yr = 1959; yr < 1970; yr++) {
	zero.push([yr, 0]);
};

// draw lines
Flotr.draw(
    document.getElementById("chart1"),
    
    // NOTE: Order of data is also the order it ends up in the legend
    [{
    	data: zero,
    	label: "20<sup>th</sup>-Century Baseline Temperature",
    	lines: { show: true,
                 lineWidth: 1 },
                 yaxis: 2,         // secondary axis
                 shadowSize: 0,
                 color: "#FF0000"
     },
     {
     	data: temp,
     	label: "Yearly Temperature Difference (°C)",
     	lines: { show: true },
     	yaxis: 2  // secondary axis
     },
     {
     	data: co2,
     	label: "CO<sub>2</sub> Concentration (ppm)",
     	lines: { show: true }
     }
    ],
    
    {
    	title: "Global Temperature and CO<sub>2</sub> Concentration",
    	grid: { horizontalLines: false,
                verticalLines: false },
        xaxis:  { tickDecimals: 0 },
        yaxis:  { min: 315, max: 325 },
        y2axis: { min: -0.1, max: 0.2,
                  tickDecimals: 2,
                  tickFormatter: function(val) { return val + "°C";}
                }
    }
);