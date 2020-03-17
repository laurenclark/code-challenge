
/**
 * Repeat 3 times the contents of an array
 *
 * @param {array: number} An array
 */

function repeat(array) {
    return [...array, ...array, ...array];
}

/**
 * Repeat 3 times the contents of an array
 *
 * @param {array: number} An array
 */
function repeatConcat(array) {
    return array.concat(array).concat(array);
}

/**
 * Repeat n times the contents of an array
 *
 * @param {array: any} Array
 * @param {int: int} number of times to repeat array
 */
function repeatLoopES5(array, number = 3) {
    let temp = [];
    for (let i = 0; i < number; i += 1) {
        temp.push(array.slice(0));
    }
    return Array.prototype.concat.apply([], temp);
}

/**
 * Repeat n times the contents of an array
 *
 * @param {array: any} Array
 * @param {int: int} number of times to repeat array
 */
function repeatLoopES6(array, number = 3) {
    let temp = [];
    for (let i = 0; i < number; i += 1) {
        temp.push([...array]);
    }
    return temp.flat(1);
}

// Hardcoded
repeat([1, 2, 3]);
repeatConcat([1, 2, 3]);

// Dynamic
repeatLoopES5([1, 2, 3], 3);
repeatLoopES6([1, 2, 3], 3);

module.exports = { repeat, repeatConcat, repeatLoopES5, repeatLoopES6 };
