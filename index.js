function hasTargetSum(array, target) {
  // Write your algorithm here
  const hash = {};
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (hash[target - num]) {
      return true;
    }
    hash[num] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  1. Create a hash table
  2. Loop through the array
  3. Check if the hash table has the target - current number
  4. If it does, return true
  5. If it doesn't, add the current number to the hash table
  6. Return false
*/

/*
  Add written explanation of your solution here
  We create a hash table to store the numbers we've seen so far. We loop through the array and check if the hash table has the target - current number. If it does, we return true. If it doesn't, we add the current number to the hash table. If we finish the loop and haven't returned true, we return false.
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
