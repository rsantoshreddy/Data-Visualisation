var w = 300;
var h = 200;
var padding = 2;
var dataset = [5, 10, 14, 20, 25];
var svg = d3
	.select(".bar")
	.append("svg")
	.attr({ width: w, height: h });

svg
	.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr({
		width: function() {
			return w / dataset.length - 2;
		},
		height: function(d) {
			return d * 4;
		},
		x: function(d, i) {
			return i * (w / dataset.length);
		},
		y: function(d, i) {
			return h - d * 4;
		}
	});
