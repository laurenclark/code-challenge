function stripVowelsUppercaseFirst(string) {
    if (typeof string !== 'string') {
        const error = new Error("Input is not a string");
        console.error(error);
    } else {
        string = string.replace(/[aeiou]/gi, '').toLowerCase().split("");
        const firstLetter = string.shift().toUpperCase();
        string.unshift(firstLetter);
        return string.join("");
    }
}

stripVowelsUppercaseFirst("liMeSHArp DeveLoper TEST"); //?
stripVowelsUppercaseFirst("tHe RaiN iN sPaiN fallS mAinlY oN THE PLANE") //?

module.exports = stripVowelsUppercaseFirst;