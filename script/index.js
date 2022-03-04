// var recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//     if (prop !== "tracks" && value !== ""){
//         records[id][prop] = value;
//       } else if (prop === "tracks" && records[id].hasOwnProperty("tracks")===false){
//         records[id][prop] = [value];
//         // records[id][prop].push(value);
//       } else if (prop === "tracks" && value !==""){
//         records[id][prop].push(value);
//       } else if (value === ""){
//         delete records[id][prop];
//       }
//       return records;
//   }

//   if (prop !== 'tracks' && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
  
//   console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// function countdown(n){
//   if (n < 1){
//     return [];
//   } else {
//       var countArray = countdown(n - 1);
//       countArray.push(n);
//       return countArray;  
//   } 
// }
// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum){
    return []; 
  } else if (endNum > startNum){
    var rangeArr = rangeOfNumbers(startNum, endNum - 1);
    rangeArr.push(endNum);
    return rangeArr;
  } else {
    return [startNum];
  }
} 
console.log(rangeOfNumbers(15, 30));