## Loading External Data Sources  

Note that web browsers (at least Chrome) may not allow the d3 script to load local .csv files directly.

To get around this:

1. In Terminal, navigate to the folder where `index.html` resides.
2. Type `python -m SimpleHTTPServer 8888 &`.
3. In the web browser, go to the URL `http://localhost:8888/index.html`.

## Short Description of Examples  

1. A single purple circle.
2. A single black rectangle and a stripped-down bar chart.
3. A circle which changes colour when you hover over it, and a circle which shrinks and grows when you click it.
4. Loading data from a .csv file to create a line graph.
5. One text example and 2 SVG examples to illustrate binding of data.
6. The descending circles as in Example 05, except that JSON is used to simplify the code.
7. A demonstration of the different types of linear interpolation.
8. Drawing an x-y chart where each data point is a rectangle. Also includes a regression line.
9. Graph network with force layout. Interactivity for clicking on nodes.

