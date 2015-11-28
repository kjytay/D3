// Source: Stephen A. Thomas, "Data Visualization with Javascript."

// svg container
var width  = 960,
	height = 500;
var svg = d3.select("#container")
	.append("svg")
	.attr("height", height)
	.attr("width",  width);

var rad = 10;  // radius of node
	
// Retrieve the data. It's saved in an external file instead of inlined to
// keep the code reasonably easy to read.

d3.json('data.json', function (error, data) {
    // Find the graph nodes from the data set. Each album is a separate node.
    var nodes = data.map(function(entry, idx, list) {
        // This iteration returns a new object for each node.
        var node = {};

        // We retain some of the album's properties.
        node.title    = entry.title;
        node.subtitle = entry.artist;
        node.image    = entry.cover;
        node.url      = entry.itunes;
        node.color    = entry.color;
        node.text     = entry.text;
        /* We'll also copy the musicians, again using a more neutral
           property. At the risk of some confusion, we're going to use the
           term "link" to refer to an individual connection between nodes,
           and we'll use the more mathematically correct term "edge" to
           refer to a line drawn between nodes on the graph. This may be
           confusing because D3 refers to the latter as "links." */
        node.links = entry.musicians.slice(0);
        
        /* As long as we're iterating through the nodes array, take the
           opportunity to create an initial position for the nodes.
           Somewhat arbitrarily, we start the nodes off in a circle
           in the center of the container. */
        var radius = 0.4 * Math.min(height,width);
        var theta = idx*2*Math.PI / list.length;
        node.x = (width/2) + radius*Math.sin(theta);
        node.y = (height/2) + radius*Math.cos(theta);
        
        // Return the newly created object so it can be
        // added to the nodes array.
        return node;
    });
    
    /* Identify all the indivual links between nodes on the graph. As noted
       above, we're using the term "link" to refer to a single connection.
       As we'll see below, we'll call lines drawn on the graph (which
       may represent a combination of multiple links) "edges" in a
       nod to the more mathematically minded. */
    var links = [];
    // Start by iterating through the albums.
    data.forEach(function(srcNode, srcIdx, srcList) {
        // For each album, iterate through the musicians.
        srcNode.musicians.forEach(function(srcLink) {
            // For each musican in the "src" album, iterate
            // through the remaining albums in the list.
            for (var tgtIdx = srcIdx + 1;
                     tgtIdx < srcList.length;
                     tgtIdx++) {
                // Use a variable to refer to the "tgt"
                // album for convenience.
                var tgtNode = srcList[tgtIdx];
                // Is there any musician in the "tgt" album that matches
                // the musican we're currently considering from the "src"
                // album?
                if (tgtNode.musicians.some(function(tgtLink){
                    return tgtLink === srcLink;
                })) {
                    // When we do find a match, add a new link to the
                    // links array.
                    links.push({
                        source: srcIdx,
                        target: tgtIdx,
                        link: srcLink
                    });
                }
            }
        });
    });
    
    // Now create the edges for our graph. We do that by
    // eliminating duplicates from the links array.
    var edges = [];
    // Iterate through the links array.
    links.forEach(function(link) {
        // Assume for now that the current link is unique.
        var existingEdge = false;
        // Look through the edges we've collected so
        // far to see if the current link is already present.
        for (var idx = 0; idx < edges.length; idx++) {
            // A duplicate link has the same source
            // and target values.
            if ((link.source === edges[idx].source) &&
                (link.target === edges[idx].target)) {
                // When we find an existing link, remember it.
                existingEdge = edges[idx];
                // And stop looking.
                break;
            }
        }
        // If we found an existing edge, all we need
        // to do is add the current link to it.
        if (existingEdge) {
            existingEdge.links.push(link.link);
        } else {
            // If there was no existing edge, we can create one now.
            edges.push({
                source: link.source,
                target: link.target,
                links: [link.link]
            });
        }
    });
    
    // CREATE EDGES
    var edgeSelection = svg.selectAll("line")
    	.data(edges)
    	.enter().append("line");
    // position them
    edgeSelection
    	.attr("x1", function(d) { return nodes[d.source].x; })
    	.attr("y1", function(d) { return nodes[d.source].y; })
    	.attr("x2", function(d) { return nodes[d.target].x; })
    	.attr("y2", function(d) { return nodes[d.target].y; })
    
    // CREATE NODES
    var nodeSelection = svg.selectAll("circle")
    	.data(nodes)
    	.enter().append("circle");
    // position them
    nodeSelection
    	.attr("r", rad)
    	.attr("cx", function(dataValue) { return dataValue.x; })
    	.attr("cy", function(dataValue) { return dataValue.y; });
    
    // create force object for the force layout
    var force = d3.layout.force()
    	.size([width, height])
    	.nodes(nodes)
    	.links(edges)
    	.linkDistance(40)  // distance we'd like to see btw connected nodes
    	.charge(-500);     // how strongle nodes repel each other
    					   // (- is repulsion)
    
    // update graph as the graph moves towards the final layout
    // dictated by force
    force.on("tick", function () {
    	// prevent the nodes from flying off the screen
    	// rad is to account for radius of circles
    	nodeSelection.each(function (node) {	
    		node.x = Math.max(node.x, rad);
    		node.y = Math.max(node.y, rad);
    		node.x = Math.min(node.x, width - rad);
    		node.y = Math.min(node.y, height - rad);
    	});
    	nodeSelection
    		.attr("cx", function(d) { return d.x; })
    		.attr("cy", function(d) { return d.y; });
    	edgeSelection
    		.attr("x1", function(d) { return d.source.x; })
    		.attr("y1", function(d) { return d.source.y; })
    		.attr("x2", function(d) { return d.target.x; })
    		.attr("y2", function(d) { return d.target.y; });
    });
    force.start();
    
    // interactivity when node is clicked
    nodeSelection.on("click", function(d) {
    	// remove "selected" class from all nodes other than d
    	nodeSelection
    		.filter(function (node) { return node !== d; })
    		.classed("selected", false)
    		.attr("r", rad);
    		
    	// remove "selected class from all edges
    	edgeSelection.classed("selected", false);
    	
    	// if the clicked node is already selected, keep the node big
    	// if not, give it class "selected" and keep it big
    	if (d3.select(this).classed("selected")) {
    		d3.select(this)
    			.attr("r", 1.5 * rad);
    	} else {
    		d3.select(this)
    			.classed("selected", true)
    			.attr("r", 1.5 * rad);
    	}
    			
    	edgeSelection.each(function (edge) {
    		if ((edge.source === d) || (edge.target === d)) {
    			d3.select(this).classed("selected", true);
    		}
    	});
    });
    
    
});
