function stripVowelsUppercaseFirst(string) {
    string = string.replace(/[aeiou]/gi, '').toLowerCase().split("");
    const firstLetter = string.shift().toUpperCase();
    string.unshift(firstLetter);
    return string.join("");
}

stripVowelsUppercaseFirst("liMeSHArp DeveLoper TEST"); //?
stripVowelsUppercaseFirst("tHe RaiN iN sPaiN fallS mAinlY oN THE PLANE") //?

module.exports = stripVowelsUppercaseFirst;