

exports.min = function min(array) {
    {
        if (array === undefined || array.length === 0)
            return 0;
    }
return array.sort((a, b) => b - a).pop();
}


exports.max = function max(array) {
    {
        if (array === undefined || array.length === 0)
            return 0;
    }
    return array.sort((a, b) => a - b).pop();
}


exports.avg = function avg(array) {
    {
        if (array === undefined || array.length === 0)
            return 0;
    }
    return array.reduce((sum, current) => sum + current, 0) / array.length;
}
