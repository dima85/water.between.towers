'use strict';

function calculate(towers) {
    if (!towers || towers.length == 0) {
        return 0;
    }

    var indexOfMaxElement = findMaxElementIndex(towers, 0, false);

    if (indexOfMaxElement != -1) {
        return findWater(towers, indexOfMaxElement, true) + findWater(towers, indexOfMaxElement, false);
    } else {
        return 0;
    }

}

function isArrayLimitReached(array, startIndex, isLeftDirection) {
    return (isLeftDirection && startIndex <= 0) || (!isLeftDirection && startIndex >= array.length - 1);
}

function findWater(array, startIndex, isLeftDirection) {
    if (isArrayLimitReached(array, startIndex, isLeftDirection)) {
        return 0;
    }
    var startIndexShifted = startIndex + (isLeftDirection ? -1 : 1);
    var secondMaxIndex = findMaxElementIndex(array, startIndexShifted, isLeftDirection);

    if (secondMaxIndex != -1) {
        var waterInside = findWaterBetweenIndexes(array, startIndex, secondMaxIndex, startIndexShifted, isLeftDirection);
        waterInside += findWater(array, secondMaxIndex, isLeftDirection);
        return waterInside;
    }
    else {
        return 0;
    }
}

function findWaterBetweenIndexes(array, startIndex, secondMaxIndex, startIndexShifted, isLeftDirection) {
    var minMax = Math.min(array[startIndex], array[secondMaxIndex]);
    var waterInside = 0;
    for (var i = startIndexShifted; i != secondMaxIndex; i += (isLeftDirection ? -1 : 1)) {
        waterInside += minMax - array[i];
    }
    return waterInside;
}


function findMaxElementIndex(array, startIndex, isLeftDirection) {
    if (isArrayLimitReached(array, startIndex, isLeftDirection)) {
        return -1;
    }
    var max = array[startIndex];
    var indexOfMaxElement = startIndex;
    for (var i = startIndex; i >= 0 && i < array.length; i += (isLeftDirection ? -1 : 1)) {
        if (max < array[i]) {
            indexOfMaxElement = i;
            max = array[i];
        }
    }
    return indexOfMaxElement;
}


module.exports = {
    calculate: calculate,
    findWater: findWater,
    findMaxElementIndex: findMaxElementIndex
}