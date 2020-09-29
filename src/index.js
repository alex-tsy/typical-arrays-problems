
exports.min = function min(array) {
    if (array == undefined) {
        return 0;
    }
    return array.reduce((acc, e) => Math.min(acc, e), 0);
}

exports.max = function max(array) {
    if (array == undefined) {
        return 0;
    }
    return array.reduce((acc, e) => Math.max(acc, e), 0);
}

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    return array.reduce((sum, e) => sum + e, 0) / array.length;
}
