function countLetterOccurrences(str, letter) {
    let count = 0; // Initialize a counter variable to store the occurrences
    let lowerStr = str.toLowerCase(); // Convert the string to lowercase
    let lowerLetter = letter.toLowerCase(); // Convert the letter to lowercase

    // Loop through each character in the string
    for (let char of lowerStr) {
        if (char === lowerLetter) { // Check if the current character matches the specified letter
            count++; // Increment the counter if there's a match
        }
    }

    return count; // Return the total count of occurrences
}

// Example usage:
console.log(countLetterOccurrences("Making a Book", "a")); // Output: 3