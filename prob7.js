//by TheMadDrunk
//25/06/2022

//link to problem : https://leetcode.com/problems/best-time-to-buy-and-sell-stock

//solution

var maxProfit = function(prices) {
    let profit = 0;
    let stockMin = 10001;
    for(let i = 0;i<prices.length;i++){
        stockMin = Math.min(stockMin,prices[i]);
        profit = Math.max(prices[i]-stockMin,profit);
    }
    return profit;
};