/*---------------------------
 CODE FOR BINDING DATA
 Source: https://www.dashingd3js.com/binding-data-to-dom-elements
         https://www.dashingd3js.com/using-data-bound-to-dom-elements
---------------------------*/
var data = ["1", "2", "3"];

var p = d3.select("body")
          .selectAll("p")   // selects all the available "p" tags in "body"
          .data(data)       // gets data. as no key provided, 1st elt 
                            // assigned to 1st "p" elt, and so on...
          .enter()          // creates placeholder for data that
                            // is not assigned
          .append("p")      // inserts a p element for each placeholder
          .text(function(d) { return "Hello, number " + d + "!"; });
          
          /*-------------------------------
          The variable "d" is provided to us by D3.js and it refers to
          the current __data__ attribute for the specific element
          being processed.
          
          d3 also provides us with 2 other variables:
          - this: the current DOM element being evaluated
          - i: index of the current HTML element being evaluated
          ---------------------------*/