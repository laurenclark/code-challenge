const stripVowelsUppercaseFirst = require('../src/string-manipulation.js');

test('Return the contents of an array repeated 3 times', () => {
    expect(stripVowelsUppercaseFirst("liMeSHArp DeveLoper TEST")).toBe("Lmshrp dvlpr tst");
    expect(stripVowelsUppercaseFirst("tHe RaiN iN sPaiN fallS mAinlY oN THE PLANE")).toBe("Th rn n spn flls mnly n th pln");
});