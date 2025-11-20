function countCharInStrings(strings, char) {
    let count = 0;

    for (const str of strings) {
        if (str.includes(char)) {
            count++;
        }
    }

    return count;
}

// Beispiel:
console.log(countCharInStrings(["hallo", "welt", "lena"], "l"));


