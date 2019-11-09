/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
bills = [124, 48, 268];
tips = [];
totalPaid = [];

for(var i = 0; i < bills.length; i++) {
    var tip;
    switch(true) {
        case bills[i] < 50:
            tip = tips.push(bills[i] * 0.2);
            totalPaid.push(bills[i] + tip);
            break;
        case bills[i] >= 50 && bills[i] <= 200:
            tip = tips.push(bills[i] * 0.15);
            totalPaid.push(bills[i] + tip);
            break;
        case bills[i] > 200:
            tip = tips.push(bills[i] * 0.10);
            totalPaid.push(bills[i] + tip);
            break;
        default:
            console.log('No bill found.');
    }
}

console.log(tips);
console.log(totalPaid);
*/