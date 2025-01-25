module.exports = function toReadable(number) {
    numberDictionary = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    const separatedValues = [];

    // Special case for zero
    if (number === 0) {
        return numberDictionary[0];
    }

    // Handle hundreds
    if (number >= 100) {
        const hundreds = Math.floor(number / 100);
        separatedValues.push(hundreds, 100); // Add [2, 100] for "two hundred", etc
        number %= 100; // Remove  hundreds
    }

    // Handle tens and ones
    if (number >= 10 && number <= 19) {
        separatedValues.push(number); // Special case for 10 - 19
    } else {
        const tens = Math.floor(number / 10) * 10; // Extract tens (20, 30, etc)
        if (tens > 0) {
            separatedValues.push(tens);
        }
        const ones = number % 10; // Extract ones
        if (ones > 0) {
            separatedValues.push(ones);
        }
    }

    // For 241 we get [2, 100, 40, 1] and then "two hundred forty one"
    const result = separatedValues
        .map((number) => numberDictionary[number])
        .join(" ");

    return result;
};
