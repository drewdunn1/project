var retrievePromise = d3.csv("Data/apple2020.csv");
var successFCN = function(stock) {
    console.log("data", stock);
}


var failFCN = function(errMessage) {
    console.log("failure", errMessage);
}
retrievePromise.then(successFCN, failFCN);
