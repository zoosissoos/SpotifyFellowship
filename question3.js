// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked
// you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money 
// with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those 
// denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢


const changePossibilities = (amount, denom) => {
  let results = [];
  //must initialaize array and fill with possibilities.
  //there is always one way with zero in this kind of problem
    for (let i = 0; i <= amount; i++) {
      if(i === 0) {
        results[i] = 1;
      } else {
        results[i] = 0;
      }
    }

  // tests each coin given in denom array
  denom.forEach( coin => {

    for (let j = coin; j <= amount; j++) {
      //see if there is any remainder when subtracting the coin 
      let remain = j - coin;
      //checks previous results for the number of ways that the coin and adds it to the possibilities
      results[j] += results[remain]
    }
  });

  //returns last value in the results array which is the sum of all possibilities
  return results[amount]
}

changePossibilities(4,[1,2,3])