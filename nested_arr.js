

  

  function largestOfFour(arr) {
    for (let i = 0; i < arr.length; i++) {
        const arr_new = arr[i];
        let max_arr = arr_new[0]; // Initialize max_arr with the first element of the subarray
        for (let j = 1; j < arr.length; j++) {
          const new_num = arr[j];
          if (new_num > max_arr) {
            max_arr = new_num; // Update max_arr if a larger number is found
          }
          return max_arr
        }
  }
}
  
 const val =  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(val())