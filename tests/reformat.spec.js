const reformat = require('../src/reformat.js');

test('Strip vowels from a string and convert all to lowercase, first letter to uppercase', () => {
    expect(reformat("liMeSHArp DeveLoper TEST")).toBe("Lmshrp dvlpr tst");
    expect(reformat("tHe RaiN iN sPaiN fallS mAinlY oN THE PLANE")).toBe("Th rn n spn flls mnly n th pln");
});
