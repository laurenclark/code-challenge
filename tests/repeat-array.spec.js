const { repeat, repeatConcat, repeatLoopES5, repeatLoopES6 } = require('../src/repeat-array.js');

test('Return the contents of an array repeated 3 times', () => {
    expect(repeat([1, 2, 3])).toEqual([
        1, 2, 3, 1, 2, 3, 1, 2, 3
    ]);
    expect(repeat(['a', 'b', 'c'])).toEqual([
        'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'
    ]);
    expect(
        repeat([
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
    expect(repeatConcat([1, 2, 3])).toEqual([
        1, 2, 3, 1, 2, 3, 1, 2, 3
    ]);
    expect(repeat(['a', 'b', 'c'])).toEqual([
        'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'
    ]);
    expect(
        repeat([
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
    expect(repeatLoopES5([1, 2, 3], 3)).toEqual([
        1, 2, 3, 1, 2, 3, 1, 2, 3
    ]);
    expect(repeat(['a', 'b', 'c'])).toEqual([
        'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'
    ]);
    expect(
        repeat([
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

test('Return the contents of an array repeated 3 times as default with argument for number param', () => {
    expect(repeatLoopES5([1, 2, 3])).toEqual([
        1, 2, 3, 1, 2, 3, 1, 2, 3
    ]);
    expect(repeat(['a', 'b', 'c'])).toEqual([
        'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'
    ]);
    expect(
        repeat([
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
    expect(repeatLoopES6([1, 2, 3], 3)).toEqual([
        1, 2, 3, 1, 2, 3, 1, 2, 3
    ]);
    expect(repeat(['a', 'b', 'c'])).toEqual([
        'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'
    ]);
    expect(
        repeat([
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
