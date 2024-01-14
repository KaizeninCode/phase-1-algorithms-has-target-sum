function hasTargetSum(array, target) {
  const seenNumbers = {}

  for (const num of array){
    const complement = target - num
    //if (complement in seenNumbers) return true. This is a refactor of the line below
    if(seenNumbers[complement]) return true
    seenNumbers[num] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2) because it iterates through each element in the array and then iterates through all elements before the current element.
*/

/* 
  create an object to keep track of the numbers we've already seen
  iterate through each number in the array once
  check if any number in our object is the complement. If so, return true
  otherwise add that number to the object and continue iterating
  after going through all the elements in the array, return false
*/

/*
  Add written explanation of your solution here
  The function hasTargetSum takes in two parameters: an array of integers and an integer called target. The purpose of this function is to determine if the array contains a pair of integers that add up to the target value.

  To accomplish this, the function iterates through each number in the array. For each number, it starts a nested loop from the beginning of the array to the current position of the outer loop.

  Inside the nested loop, the function checks if the current number from the array (array[i]) added to the current number from the outer loop (num) equals the target value. If it does, the function immediately returns true.

  If the function completes all iterations of the loops without finding a pair of numbers that add up to the target value, it returns false.
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
