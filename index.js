function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true; 
      }
    }
  }
  return false; 
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode hereRephrase te probleme :
I need two numbers from an array that when we add them we get the result of the second argument if not it returns false 
Instructions
First we have to try with all the numbers and pair them so the first number will be taken and paired with all the numbers in the array and compare the result with the argument next the other number in the array will go through the same process

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
