
function averageNumbers(arr) {
    const nums = arr.filter(n => typeof n === 'number');
    return nums.reduce((a, b) => a + b, 0) / nums.length;
  }
  
let a=[1,2,4,null]
console.log(averageNumbers(a))

