export function extractTitleValue(inputString: string) {
    // Regular expression to match the title attribute
    const regex = /title="([^"]+)"/;

    // Use the match method to find the match in the inputString
    const match = inputString.match(regex);

    // Check if a match was found
    if (match) {
        // The value of the title attribute is in the first capture group (index 1)
        return match[1];
    } else {
        // Return null if no match was found
        return null;
    }
}
