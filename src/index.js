

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
