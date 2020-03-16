const arrayRepeater = require('../src/repeat.js');

test('Return the contents of an array repeated 3 times', () => {
    expect(arrayRepeater.repeat([1, 2, 3])).toEqual([
        1, 2, 3, 1, 2, 3, 1, 2, 3
    ]);
    expect(arrayRepeater.repeat(['a', 'b', 'c'])).toEqual([
        'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'
    ]);
    expect(
        arrayRepeater.repeat([
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3]
        ])).toEqual([
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3]
        ]);
});

test('Return the contents of an array repeated 3 times', () => {
    expect(arrayRepeater.repeatConcat([1, 2, 3])).toEqual([
        1, 2, 3, 1, 2, 3, 1, 2, 3
    ]);
    expect(arrayRepeater.repeat(['a', 'b', 'c'])).toEqual([
        'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'
    ]);
    expect(
        arrayRepeater.repeat([
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3]
        ])).toEqual([
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3]
        ]);
});

test('Return the contents of an array repeated n times', () => {
    expect(arrayRepeater.repeatLoopES5([1, 2, 3], 3)).toEqual([
        1, 2, 3, 1, 2, 3, 1, 2, 3
    ]);
    expect(arrayRepeater.repeat(['a', 'b', 'c'])).toEqual([
        'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'
    ]);
    expect(
        arrayRepeater.repeat([
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3]
        ])).toEqual([
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3]
        ]);
});

test('Return the contents of an array repeated n times', () => {
    expect(arrayRepeater.repeatLoopES6([1, 2, 3], 3)).toEqual([
        1, 2, 3, 1, 2, 3, 1, 2, 3
    ]);
    expect(arrayRepeater.repeat(['a', 'b', 'c'])).toEqual([
        'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'
    ]);
    expect(
        arrayRepeater.repeat([
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3]
        ])).toEqual([
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3]
        ]);
});
