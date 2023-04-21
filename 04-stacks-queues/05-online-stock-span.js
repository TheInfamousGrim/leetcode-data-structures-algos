// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

// The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

//     For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
//     Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.

// Implement the StockSpanner class:

//     StockSpanner() Initializes the object of the class.
//     int next(int price) Returns the span of the stock's price given that today's price is price.

// Example 1:

// Input
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
// [null, 1, 1, 1, 2, 1, 4, 6]

// Explanation
// StockSpanner stockSpanner = new StockSpanner();
// stockSpanner.next(100); // return 1
// stockSpanner.next(80);  // return 1
// stockSpanner.next(60);  // return 1
// stockSpanner.next(70);  // return 2
// stockSpanner.next(60);  // return 1
// stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
// stockSpanner.next(85);  // return 6

class StockSpanner {
    constructor() {
        this.prices = [];
    }
}

StockSpanner.prototype.next = function (price) {
    // Create a counter for the number of days the price has been lower or equal to the selected price
    let days = 1;

    // While there are prices in the prices stack
    // And the current price is less than the last price in the prices stack
    while (
        this.prices.length > 0 &&
        price >= this.prices[this.prices.length - 1][0]
    ) {
        // increment the days by the days stored in the last price in the prices stack
        days += this.prices[this.prices.length - 1][1];
        // Pop the last item from the prices stack
        this.prices.pop();
    }

    // Add the price and days array to the prices stack
    this.prices.push([price, days]);
    // Return the number of days since the price has been greater than the current price
    return days;
};

const StockSpanner1 = new StockSpanner();
