// // Sum of Numbers (Loop)

function someofnumbers(n){
   let sum =0;
   for( let i=1;i<=n;i++){
    sum+=i;
   }
   return sum;
}
const result = someofnumbers(200);
console.log(result);


// Object Proper5es

let book={
  title:"The great man",
  author:"F.Fariya",
  year:1933
};

function printbookdetails(book){
  console.log(`Title:${book.title},Author:${book.author},Year:${book.year}`);
}
printbookdetails(book);


// // Array Reversal

function reversarray(arr){
  const reversed = [];
  for( let i=arr.length-1 ; i>=0;i--){
    reversed.push(arr[i]);
  }
  return reversed;
}
const result = reversarray([1,3,5]);
console.log(result);

// Count Occurrences (1D Array)

function countOccurrences(array) {
  const occurrences = {}; 

  for (const item of array) {
      occurrences[item] = (occurrences[item] || 0) + 1;
  }

  return occurrences; 
}


const results = countOccurrences(['apple', 'banana', 'apple']);
console.log(results); 

// // Mul5plica5on Table (2D Array)

function multiplicationTable(n) {
    const table = [];
    for(i=1;i<=n;i++){
      const row = [];
      for(j=1;j<=n;j++){
        row.push(i*j);
      }
      table.push(row);
    }
    return table;
}
const result = multiplicationTable(3);
console.log(result);


// Average of Array (1D)
function Average(arr){
   let sum = 0;
   for(i=0;i<=arr.length;i++){
    sum+=arr.length;
   }
   return sum/arr.length;
   
}
const arr=[1,2,3,4,5];
Average(arr);

// FlaFen a 2D Array

function flatten(array2D) {
  const flatArray = [];
  
  for (let i = 0; i < array2D.length; i++) {
      for (let j = 0; j < array2D[i].length; j++) {
          flatArray.push(array2D[i][j]);
      }
  }
  
  return flatArray;
}

// Example usage:
console.log(flatten([[1, 2], [3, 4]])); // Output: [1, 2, 3, 4]
