// Source: Stephen A. Thomas, "Data Visualization with Javascript."

// Data for Chart
var pacific_data = [
    {  country: "Australia",       spending:  9.1,  life: 81.8  },
    {  country: "New Zealand",     spending: 10.1,  life: 81.0  },
];
var europe_data = [
    {  country: "Austria",         spending: 11.0,  life: 80.7  },
    {  country: "Belgium",         spending: 10.5,  life: 80.3  },
    {  country: "Czech Republic",  spending:  7.5,  life: 77.7  },
    {  country: "Denmark",         spending: 11.1,  life: 79.3  },
    {  country: "Estonia",         spending:  6.3,  life: 75.6  },
    {  country: "Finland",         spending:  8.9,  life: 80.2  },
    {  country: "France",          spending: 11.6,  life: 81.3  },
    {  country: "Germany",         spending: 11.6,  life: 80.5  },
    {  country: "Greece",          spending: 10.2,  life: 80.6  },
    {  country: "Hungary",         spending:  7.8,  life: 74.3  },
    {  country: "Iceland",         spending:  9.3,  life: 81.5  },
    {  country: "Ireland",         spending:  9.2,  life: 81.0  },
    {  country: "Italy",           spending:  9.3,  life: 82.0  },
    {  country: "Luxembourg",      spending:  7.9,  life: 80.7  },
    {  country: "Netherlands",     spending: 12.0,  life: 80.8  },
    {  country: "Norway",          spending:  9.4,  life: 81.2  },
    {  country: "Poland",          spending:  7.0,  life: 76.3  },
    {  country: "Portugal",        spending: 10.7,  life: 79.8  },
    {  country: "Slovak Republic", spending:  9.0,  life: 75.2  },
    {  country: "Slovenia",        spending:  9.0,  life: 79.5  },
    {  country: "Spain",           spending:  9.6,  life: 82.2  },
    {  country: "Sweden",          spending:  9.6,  life: 81.5  },
    {  country: "Switzerland",     spending: 11.4,  life: 82.6  },
    {  country: "Turkey",          spending:  6.1,  life: 74.3  },
    {  country: "United Kingdom",  spending:  9.6,  life: 80.6  },
];
var americas_data = [
    {  country: "Canada",          spending: 11.4,  life: 80.8  },
    {  country: "Chile",           spending:  8.0,  life: 79.0  },
    {  country: "Mexico",          spending:  6.2,  life: 75.5  },
    {  country: "United States",   spending: 17.6,  life: 78.7  },
];
var mideast_data = [
    {  country: "Israel",          spending:  7.5,  life: 81.7  },
];
var asia_data = [
    {  country: "Japan",           spending:  9.5,  life: 83.0  },
    {  country: "Korea",           spending:  7.1,  life: 80.7  },
];
var us_data = [
    {  country: "United States",   spending: 17.6,  life: 78.7  },
];

// format the data
var pacific=[], europe=[], americas=[], mideast=[], asia=[], us=[];
for (i = 0; i < pacific_data.length; i++) {
    pacific.push([ pacific_data[i].spending, pacific_data[i].life ]);
}
for (i = 0; i < europe_data.length; i++) {
    europe.push([ europe_data[i].spending, europe_data[i].life ]);
}
for (i = 0; i < americas_data.length; i++) {
    americas.push([ americas_data[i].spending, americas_data[i].life ]);
}
for (i = 0; i < mideast_data.length; i++) {
    mideast.push([ mideast_data[i].spending, mideast_data[i].life ]);
}
for (i = 0; i < asia_data.length; i++) {
    asia.push([ asia_data[i].spending, asia_data[i].life ]);
}
for (i = 0; i < us_data.length; i++) {
    us.push([ us_data[i].spending, us_data[i].life ]);
}

window.onload = function () {
	Flotr.draw(
	    document.getElementById("chart1"),
	    [
	    	{ data: pacific,  label: "Pacific", points: {show:true} },
	    	{ data: europe,   label: "Europe", points: {show:true} },
	    	{ data: americas, label: "Americas", points: {show:true} },
	    	{ data: mideast,  label: "Middle East", points: {show:true} },
	    	{ data: asia,     label: "Asia", points: {show:true} },
	    	{ data: us,       label: "United States", points: {show:true} }
        ],
	    {
	    	title: "Life Expectancy vs. Health Care Spending",
	    	subtitle: "(by Country, 2010 OECD data)",
	    	xaxis: { min: 5, max: 20, tickDecimals: 0,
	    	         title: "Spending as Percentage of GDP",
	    	         tickFormatter: function(val) {return val+"%"} },
	    	yaxis: { min: 70, max: 85, tickDecimals: 0,
	    	         title: "Years" },
	    	legend: { position: "ne" }
	    }
	);
}