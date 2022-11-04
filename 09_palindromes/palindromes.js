const palindromes = function (input) {
    //remove all spaces
    let withoutSpaces = input.replaceAll(' ', '');
    
    // remove all punctuations
    let withoutPunctuations = withoutSpaces.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\]\[1234567890]/g,'');

    // convert all to lowercases
    let lowercased = withoutPunctuations.toLowerCase();

    // convert string to array
    let array = Array.from(lowercased);

    // if array length is even
    if (array.length % 2 == 0) {
        // check if every mirroring character is the same
        result = array.every(() => {
            for (i = 0; i < ((array.length / 2) - 1); i++) {
                // comparing mirroring characters
                return (array[i] === array[array.length - (i + 1)]);
            }
        })
    }

    if (array.length % 2 == 0) {
        // looping through all pairs of mirroring characters
        for (i = 0; i < (array.length / 2) - 1; i++) {
            // comparing mirroring characters
            if (array[i] !== array[array.length - (i + 1)]) {
                return false;
            }
        }
    }

    // if array length is odd
    else {
        // looping through all pairs of mirroring characters
        for (i = 0; i < (((array.length - 1) / 2) - 1); i++) {
            // comparing mirroring characters
            if (array[i] !== array[array.length - (i + 1)]) {
                return false;
            }
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
