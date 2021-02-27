
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined) return [];
  
    let newArr = [];
  
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
          newArr = newArr.concat(matrix[i]);
      } else {
          let x = matrix[i].reverse();
          newArr = newArr.concat(x);
      }
  };
  
  return newArr;
}
