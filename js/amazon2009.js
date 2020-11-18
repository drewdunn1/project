var parseTime = d3.timeParse("%m/%d/%y");
var rowConverter = function(d) {
        return {
            
            Date: parseTime(d.Date),
            Close: parseFloat(d.Close)
        };
    };

var drawLine = function(dataset){
xScale = d3.scaleTime()
        .domain([
    d3.min(dataset, function(d) {return d.Date;}),
    d3.max(dataset, function(d) {return d.Date;})
    
])
        .range([0,100]);
    
yScale = d3.scaleLinear()
    .domain([0,200])
    .range([100,0]);
var line = d3.line()
        .x(function(d) {return xScale(d.Date);})
        .y(function(d) {return yScale(d.Close);});
var svg = d3.select("body")
            .append("svg")
            .attr("width", 120)
            .attr("height", 120);
svg.append("path")
    .datum(dataset)
    .attr("class","line")
    .attr("d", line)
    .attr("fill","none")
    .attr("stroke", "black")
};
var retrievePromise = d3.csv("Data/amazon2009.csv");
var successFCN = function(stock) {
    console.log("data", stock);
    drawLine(stock);
    console.log(rowConverter(stock));
}


var failFCN = function(errMessage) {
    console.log("failure", errMessage);
}
retrievePromise.then(successFCN, failFCN);
console.log(parseTime("6/11/08"));
