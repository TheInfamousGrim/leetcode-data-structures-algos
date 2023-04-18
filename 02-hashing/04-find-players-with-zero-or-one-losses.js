const input1 = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
];

function findWinners(matches) {
    // Define a map for winners and losers
    const wonAllMatches = new Map();
    const lostOneMatch = new Map();
    const lostMoreThanOne = new Map();

    // loop through the matches
    for (const match of matches) {
        // If the player hasn't lost one or more matches
        if (!lostOneMatch.has(match[0]) && !lostMoreThanOne.has(match[0])) {
            // Add them to the won all matches map
            wonAllMatches.set(match[0], (wonAllMatches.get(match[0]) || 0) + 1);
        }
        // If the player has lost a match and they're in the won all matches map
        if (wonAllMatches.has(match[1])) {
            // Remove them from the map
            wonAllMatches.delete(match[1]);
        }

        // If the player has lost a match and this is their second loss
        if (lostOneMatch.has(match[1])) {
            // remove them from the lostOneMatch map
            lostOneMatch.delete(match[1]);
            // Add them to the lostMoreThanOne map
            lostMoreThanOne.set(
                match[1],
                (lostMoreThanOne.get(match[1]) || 0) + 1
            );
        }

        // If the player has lost a match and they're not in the lostOneMatch add them to the lostOneMatch map
        if (!lostOneMatch.has(match[1]) && !lostMoreThanOne.has(match[1])) {
            lostOneMatch.set(match[1], (lostOneMatch.get(match[1]) || 0) + 1);
        }
    }

    // winner array
    const winnerArray = [];
    for (const [key] of wonAllMatches) {
        winnerArray.push(key);
    }

    // Loser array
    const loserArray = [];
    for (const [key] of lostOneMatch) {
        loserArray.push(key);
    }

    // sort the arrays
    winnerArray.sort((a, b) => a - b);
    loserArray.sort((a, b) => a - b);

    return [winnerArray, loserArray];
}

console.log(findWinners(input1));
