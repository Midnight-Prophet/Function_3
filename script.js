function countLetterOccurrences(str, letter) {
    let count = 0; // Initialize a counter variable to store the occurrences

    // Loop through each character in the string
    for (let char of str) {
        if (char === letter) { // Check if the current character matches the specified letter
            count++; // Increment the counter if there's a match
        }
    }

    return count; // Return the total count of occurrences
}

// Example usage:
console.log(countLetterOccurrences("making a book", "a")); // Output: 2