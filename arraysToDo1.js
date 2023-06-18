// Push Front

function pushFront(array, value) {
  const newArray = [value]; // Create a new array with the value as the first element

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]); // Add each element of the original array to the new array
  }

  return newArray;
}

console.log(pushFront([5,7,2,3],8));
console.log(pushFront([99], 7));

// Pop Front

function popFront(array) {
  const removedValue = array[0]; // Store the first element to later print it

  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i]; // Shift elements to the left
  }

  array.length = array.length - 1; // Remove the last duplicate element

  console.log(removedValue); // Print the removed value
  return array;
}

console.log(popFront([0, 5, 10, 15]));
console.log(popFront([4, 5, 7, 9]));

// Insert At

function insertAt(array, index, value) {
  const newArray = [];

  for (let i = 0; i < index; i++) {
    newArray[i] = array[i]; // Add elements up to the given index
  }

  newArray[index] = value; // Insert the additional value at the given index

  for (let j = index; j < array.length; j++) {
    newArray.push(array[j]); // Add elements from the given index onward
  }

  return newArray;
}

console.log(insertAt([100, 200, 5], 2, 311));
console.log(insertAt([9, 33, 7], 1, 42));