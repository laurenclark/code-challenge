const stripVowelsUppercaseFirst = require('../src/string-manipulation.js');

test('The input should be a string', () => {
    expect(stripVowelsUppercaseFirst(5)).toBe("");
});

test('Strip vowels from a string and convert all to lowercase, first letter to uppercase', () => {
    expect(stripVowelsUppercaseFirst("liMeSHArp DeveLoper TEST")).toBe("Lmshrp dvlpr tst");
    expect(stripVowelsUppercaseFirst("tHe RaiN iN sPaiN fallS mAinlY oN THE PLANE")).toBe("Th rn n spn flls mnly n th pln");
});
