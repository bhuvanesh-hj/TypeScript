var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var btnElement = document.querySelector("button");
var numResults = [];
// const numResults: number[] = [];
var strResults = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function obj(resultObj) {
    console.log(resultObj.val);
}
btnElement.addEventListener("click", function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var strResult = add(num1, num2);
    var numResult = add(+num1, +num2);
    numResults.push(numResult);
    strResults.push(strResult);
    obj({ val: numResult, timestamp: new Date() });
    console.log(numResults, strResults);
});
var promiseDemo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello happy to lear TypeScript😊");
    }, 1000);
});
promiseDemo.then(function (res) {
    console.log(res.split(" "));
});
