// Source: Stephen A. Thomas, "Data Visualization with Javascript."

// Data for Chart
var players = [
	{ player: "Chris Bosh", points: 17.2, rebounds: 7.9, assists: 1.6,
      steals: 0.8, blocks: 0.8 },
    { player: "Shane Battier",  points:  5.4, rebounds: 2.6, assists: 1.2,
      steals: 1.0, blocks: 0.5 },
    { player: "LeBron James",   points: 28.0, rebounds: 8.4, assists: 6.1,
      steals: 1.9, blocks: 0.8 },
    { player: "Dwyane Wade",    points: 22.3, rebounds: 5.0, assists: 4.5,
      steals: 1.7, blocks: 1.3 },
    { player: "Mario Chalmers", points: 10.2, rebounds: 2.9, assists: 3.6,
      steals: 1.4, blocks: 0.2 }
    ];

var team = {
	points:   98.2,
	rebounds: 41.3,
	assists:  19.3,
	steals:    8.5,
	blocks:    5.3
};

var labels = [
	[0, "Points"],
	[1, "Rebounds"],
	[2, "Assists"],
	[3, "Steals"],
	[4, "Blocks"]
];

// FORMAT THE DATA
// return the statistics for a single player
var get_player = function(name) {
	for (var i=0; i < players.length; i++) {
		if (players[i].player === name) return players[i]
	};
};

// return statistics for named player with normalised value
var player_data = function(name) {
	var obj = {}, i = 0;
	obj.label = name;
	obj.data = [];
	for (var key in team) {
		obj.data.push([i, 100*get_player(name)[key]/team[key]]);
		i++;
	};
	return obj;
};

// CREATE CHART
Flotr.draw(
	document.getElementById("chart1"),
	[
		player_data("Chris Bosh"),
		player_data("Shane Battier"),
		player_data("LeBron James"),
		player_data("Dwyane Wade"),
		player_data("Mario Chalmers")
	],
	{
		title: "2011/12 Miami Heat Starting Lineup - Contribution \
				to Team Total",
		radar: { show: true },
		grid:  { circular: true },
		xaxis: { ticks: labels },
		yaxis: { showLabels: false, 
				min: 0, max: 33 }
	}
);
		