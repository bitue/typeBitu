var callBack = function (val) {
    return val;
};
function addNumberAndPrint(numOne, numTwo, cb) {
    var res = numOne + numTwo;
    const response = cb(res);
    return response
}
var res = addNumberAndPrint(2, 5, callBack);
console.log(res);