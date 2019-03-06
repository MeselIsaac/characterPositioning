function position (word) {
  var indexCount = {}

for (var i = 0; i < word.length; i++) {
  var letter = word[i]

  if (!indexCount[letter]) {
    indexCount[letter] = [i]
  } else {
    indexCount[letter].push(i)
  }

}
return indexCount;
}


console.log(position("Lighthouse Labs in the house"));





// {
//   l: [0, 11]
//   i: [1]
//   g: [2]
//   h: [3, 5, 15, 18]
//   t: [4, 14]
//   o: [6, 19]
//   u: [7, 20]
//   s: [8, 21]
//   e: [9, 16, 22]
//   "": [10, 13, 17]
//   n: [12]
// }

