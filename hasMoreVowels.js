function hasMoreVowels(word) {
    let vowels = word.match(/[aeiouAEIOU]/gi).length;
    let consonants = word.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ/]/gi).length;
    if (vowels > consonants) {
        return true;
    } else if (vowels <= consonants) {
        return false;
    } 
}

console.log(hasMoreVowels('poop'));