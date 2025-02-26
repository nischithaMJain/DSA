// Input: arr[] = [10, 20, 30, 40, 50]
// Output: 10 30 50
// Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).


// Input: arr[] = [-5, 1, 4, 2, 12]
// Output: -5 4 12 

function alternate(arr) {
    let num = [], i = 0;
    while (i < arr.length) {
        num.push(arr[i]);
        i += 2;
    }
    return num
}
const result = alternate([10, 20, 30, 40, 50]);
console.log(result, "result")