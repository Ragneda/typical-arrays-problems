
exports.min = function min(array) {



    if (array.length !== 0 || array !== undefined)
        return array.sort((a, b) => b - a).pop();

    return 0;

}

exports.max = function max(array) {
    let a = array.sort((a, b) => a - b);
    let result = a.pop();
    if (array.length > 1)
        return result;

    if (array.length === 0 || array === undefined)
        return 0;
}

exports.avg = function avg(array) {

    let result = array.reduce((sum, current) => sum + current, 0);
    let result2 = result / array.length;
    if (array.length > 1)
        return result2;

    if (array.length === 0 || array === undefined)
        return 0;
}
