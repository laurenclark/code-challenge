function reformat(string) {
    if (typeof string !== 'string') {
        const error = new Error("Input is not a string");
        return error;
    } else {
        string = string.replace(/[aeiou]/gi, '').toLowerCase().split("");
        const firstLetter = string.shift().toUpperCase();
        string.unshift(firstLetter);
        return string.join("");
    }
}

reformat("liMeSHArp DeveLoper TEST"); //?
reformat("tHe RaiN iN sPaiN fallS mAinlY oN THE PLANE") //?

module.exports = reformat;