var w = 300;
var h = 200;
var padding = 2;
var dataset = [
	{ timeline: 10, valueOne: 1, valueTwo: 60 },
	{ timeline: 20, valueOne: 20, valueTwo: 5 },
	{ timeline: 30, valueOne: 3, valueTwo: 40 },
	{ timeline: 40, valueOne: 40, valueTwo: 3 },
	{ timeline: 50, valueOne: 5, valueTwo: 20 },
	{ timeline: 60, valueOne: 60, valueTwo: 1 }
];
var svg = d3
	.select(".line")
	.append("svg")
	.attr({ width: w, height: h });

var lineFunction = d3.svg
	.line()
	.x(function(d) {
		return d.timeline * 5;
	})
	.y(function(d) {
		return d.valueOne;
	})
	.interpolate("linear");
var lineFunctiony = d3.svg
	.line()
	.x(function(d) {
		return d.timeline * 5;
	})
	.y(function(d) {
		return d.valueTwo;
	})
	.interpolate("linear");

//Draw path
svg.append("path").attr({
	d: lineFunction(dataset),
	stroke: "purple",
	"stroke-width": 2,
	fill: "none"
});

svg.append("path").attr({
	d: lineFunctiony(dataset),
	stroke: "purple",
	"stroke-width": 2,
	fill: "none"
});
