function firstNonRepeatedChar(str) {
    if (str.length === 0) return null;
    
    let charCount = {};
    
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]]) {
            charCount[str[i]]++;
        } else {
            charCount[str[i]] = 1;
        }
    }
    
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }
    
    return null;
}
