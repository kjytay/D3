// Source: Stephen A. Thomas, "Data Visualization with Javascript."

// DATA
var albums = [
  {
    album: "Miles Davis - Kind of Blue",
    musicians: [
      "Cannonball Adderley",
      "Paul Chambers",
      "Jimmy Cobb",
      "John Coltrane",
      "Miles Davis",
      "Bill Evans"
    ]
  },{
    album: "John Coltrane - A Love Supreme",
    musicians: [
      "John Coltrane",
      "Jimmy Garrison",
      "Elvin Jones",
      "McCoy Tyner"
    ]
  },{
    album: "The Dave Brubeck Quartet - Time Out",
    musicians: [
      "Dave Brubeck",
      "Paul Desmond",
      "Joe Morello",
      "Eugene Write"
    ]
  },{
    album: "Duke Ellington - Ellington at Newport",
    musicians: [
      "Harry Carney",
      "John Willie Cook",
      "Duke Ellington",
      "Paul Gonsalves",
      "Jimmy Grissom",
      "Jimmy Hamilton",
      "Johnny Hodges",
      "Quentin Jackson",
      "William Anderson",
      "Ray Nance",
      "Russell Procope",
      "John Sanders",
      "Clark Terry",
      "James Woode",
      "Britt Woodman",
      "Sam Woodyar"
    ]
  },{
    album: "The Quintet - Jazz at Massey Hall",
    musicians: [
      "Dizzy Gillespie",
      "Charles Mingus",
      "Charlie Parker",
      "Bud Powell",
      "Max Roach"
    ]
  },{
    album: "Louis Armstrong - The Best of the Hot Five and Hot Seven Recordings",
    musicians: [
      "Lil Hardin Armstrong",
      "Louis Armstrong",
      "Clarence Babcock",
      "Pete Briggs",
      "Mancy Carr",
      "Baby Dodds",
      "Johnny Dodds",
      "Earl Hines",
      "Kid Ory",
      "Don Redman",
      "Fred Robinson",
      "Zutty Singleton",
      "Johnny St. Cyr",
      "Jimmy Strong",
      "John Thomas",
      "Dave Wilborn"
    ]
  },{
    album: "John Coltrane - Blue Trane",
    musicians: [
      "Paul Chambers",
      "John Coltrane",
      "Kenny Drew",
      "Curtis Fuller",
      "Philly Joe Jones",
      "Lee Morgan"
    ]
  },{
    album: "Stan Getz and João Gilberto - Getz/Gilberto",
    musicians: [
      "Milton Banana",
      "Stan Getz",
      "Astrud Gilberto",
      "João Gilberto",
      "Antonio Carlos Jobim",
      "Sebastião Neto"
    ]
  },{
    album: "Charles Mingus - Mingus Ah Um",
    musicians: [
      "Willie Dennis",
      "Booker Ervin",
      "Shafi Hadi",
      "John Handy",
      "Jimmy Knepper",
      "Charles Mingus",
      "Horace Parlan",
      "Dannie Richmond"
    ]
  },{
    album: "Erroll Garner - Concert by the Sea",
    musicians: [
     "Denzil Best",
      "Eddie Calhoun",
      "Erroll Garner"
    ]
  },{
    album: "Miles Davis - Bitches Brew",
    musicians: [
      "Don Alias",
      "Harvey Brooks",
      "Billy Cobham",
      "Chick Corea",
      "Miles Davis",
      "Jack DeJohnette",
      "Dave Holland",
      "Bennie Maupin",
      "John McLaughlin",
      "Airto Moreira",
      "Juma Santos",
      "Wayne Shorter",
      "Lenny White",
      "Larry Young",
      "Joe Zawinul"
    ]
  },{
    album: "Sonny Rollings - Saxophone Colossus",
    musicians: [
      "Tommy Flanagan",
      "Sonny Rollins",
      "Max Roach",
      "Doug Watkins"
    ]
  },{
    album: "Art Blakey and The Jazz Messengers - Moanin’",
    musicians: [
      "Art Blakey",
      "Lee Morgan",
      "Benny Golson",
      "Bobby Timmons",
      "Jymie Merritt"
    ]
  },{
    album: "Clifford Brown and Max Roach",
    musicians: [
      "Clifford Brown",
      "Harold Land",
      "George Morrow",
      "Richie Powell",
      "Max Roach"
    ]
  },{
    album: "Thelonious Monk with John Coltrane - At Carnegie Hall",
    musicians: [
      "Ahmed Abdul-Malik",
      "John Coltrane",
      "Thelonious Monk",
      "Shadow Wilson"
    ]
  },{
    album: "Hank Mobley - Soul Station",
    musicians: [
      "Art Blakey",
      "Paul Chambers",
      "Wynton Kelly",
      "Hank Mobley"
    ]
  },{
    album: "Cannonball Adderly - Somethin’ Else",
    musicians: [
      "Cannonball Adderley",
      "Art Blakey",
      "Miles Davis",
      "Hank Jones",
      "Sam Jones"
    ]
  },{
    album: "Wayne Shorter - Speak No Evil",
    musicians: [
      "Ron Carter",
      "Herbie Hancock",
      "Freddie Hubbard",
      "Elvin Jones",
      "Wayne Shorter"
    ]
  },{
    album: "Miles Davis - Birth of the Cool",
    musicians: [
      "Bill Barber",
      "Nelson Boyd",
      "Kenny Clarke",
      "Junior Collins",
      "Miles Davis",
      "Kenny Hagood",
      "Al Haig",
      "J. J. Johnson",
      "Lee Konitz",
      "John Lewis",
      "Al McKibbon",
      "Gerry Mulligan",
      "Max Roach",
      "Gunther Schuller",
      "Joe Shulman",
      "Sandy Siegelstein",
      "Kai Winding"
    ]
  },{
    album: "Herbie Hancock - Maiden Voyage",
    musicians: [
      "Ron Carter",
      "George Coleman",
      "Herbie Hancock",
      "Freddie Hubbard",
      "Tony Williams"
    ]
  },{
    album: "Vince Guaraldi Trio- A Boy Named Charlie Brown",
    musicians: [
      "Colin Bailey",
      "Monty Budwig",
      "Vince Guaraldi"
    ]
  },{
    album: "Eric Dolphy - Out to Lunch",
    musicians: [
      "Richard Davis",
      "Eric Dolphy",
      "Freddie Hubbard",
      "Bobby Hutcherson",
      "Tony Williams"
    ]
  },{
    album: "Oliver Nelson - The Blues and the Abstract Truth",
    musicians: [
      "George Barrow",
      "Paul Chambers",
      "Eric Dolphy",
      "Bill Evans",
      "Roy Haynes",
      "Freddie Hubbard",
      "Oliver Nelson"
    ]
  },{
    album: "Dexter Gordon - Go",
    musicians: [
      "Sonny Clark",
      "Dexter Gordon",
      "Billy Higgins",
      "Butch Warren"
    ]
  },{
    album: "Sarah Vaughan with Clifford Brown",
    musicians: [
      "Joe Benjamin",
      "Clifford Brown",
      "Roy Haynes",
      "Jimmy Jones",
      "John Malachi",
      "Herbie Mann",
      "Paul Quinichette",
      "Sarah Vaughan",
      "Ernie Wilkins"
    ]
  }
];

// initialise the library, indicate which HTML element the graph
//  should go to
var s = new sigma("graph");
radius = 1;

// add nodes to graph (graph identifier must be a string)
for (var idx = 0; idx < albums.length; idx++) {
	var theta = idx * 2 * Math.PI / albums.length;
	s.graph.addNode({
		id: "" + idx,  // because id must be a string
		label: albums[idx].album,
		x: radius * Math.sin(theta),
		y: radius * Math.cos(theta),
		size: 1,
		color: "#FF0000"
	});
}

// add edges to graph
for (var srcIdx = 0; srcIdx < albums.length; srcIdx++) {
	var src = albums[srcIdx];
	for (var mscIdx = 0; mscIdx < src.musicians.length; mscIdx++) {
		var msc = src.musicians[mscIdx];
		for (var tgtIdx = srcIdx + 1; tgtIdx < albums.length; tgtIdx++) {
			var tgt = albums[tgtIdx];
			/* .some() method of JS arrays takes a function as a param,
			   returns true if that function itself returns true for any
			   element in the array. */
			if (tgt.musicians.some(function (tgtMsc) {
				return tgtMsc === msc;
			})) {
				s.graph.addEdge({
					id: srcIdx + "." + mscIdx + "-" + tgtIdx,
					source: "" + srcIdx,
					target: "" + tgtIdx,
					color: "#000000"
				})
			}
		}
	}
}

// force-directed layout
s.startForceAtlas2({
	gravity: 100,      // higher values => nodes less likely to drift off
	scalingRatio: 70,  // higher value forces nodes farther apart
	slowDown: 100      // higher value decreases sensity of nodes to
					   // repulsive forces from its neighbours
});
// stop algorithm after 3 seconds (3000 milliseconds)
setTimeout(function () { s.stopForceAtlas2(); }, 3000);

// code to add interactivity
s.bind("clickNode", function (ev) {
	var nodeIdx = ev.data.node.id;
	var neighbors = [];
	
	s.graph.edges().forEach( function (edge) {
		if ((edge.target === nodeIdx) || (edge.source === nodeIdx)) {
			edge.color = "#555";
			neighbors.push(edge.target);
			neighbors.push(edge.source);
		} else {
			edge.color = "#EC5148";
		}
	});
	
	s.graph.nodes().forEach( function (node) {
		if (neighbors.some(function (n) { return n === node.id })) {
			node.color = "#555";
		} else {
			node.color = "#EC5148";
		}
	});
	
	
});

// tell library to draw the graph
s.refresh();
	
	
	
	