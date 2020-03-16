const arrayRepeater = {
    /**
     * Repeat 3 times the contents of an array
     *
     * @param {array: number} An array
     */

    repeat(array) {
        return [...array, ...array, ...array];
    },

    /**
     * Repeat 3 times the contents of an array
     *
     * @param {array: number} An array
     */
    repeatConcat(array) {
        return array.concat(array).concat(array);
    },

    /**
     * Repeat n times the contents of an array
     *
     * @param {array: any} Array
     * @param {int: int} number of times to repeat array
     */
    repeatLoopES5(array, number) {
        let temp = [];
        for (let i = 0; i < number; i++) {
            temp.push(array.slice(0));
        }
        return Array.prototype.concat.apply([], temp);
    },

    /**
     * Repeat n times the contents of an array
     *
     * @param {array: any} Array
     * @param {int: int} number of times to repeat array
     */
    repeatLoopES6(array, number) {
        let temp = [];
        for (let i = 0; i < number; i++) {
            temp.push([...array]);
        }
        return temp.flat(1);
    }
};
// Hardcoded
arrayRepeater.repeat([1, 2, 3]);
arrayRepeater.repeatConcat([1, 2, 3]);

// Dynamic
arrayRepeater.repeatLoopES5([1, 2, 3], 3);
arrayRepeater.repeatLoopES6([1, 2, 3], 3);

module.exports = arrayRepeater;
