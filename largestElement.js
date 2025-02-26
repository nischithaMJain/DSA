// Input: arr[] = [10, 20, 4]
// Output: 20
// Explanation: Among 10, 20 and 4, 20 is the largest.


//     Input: arr[] = [20, 10, 20, 4, 100]
// Output: 100


function largestElement(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const result = largestElement([20, 10, 20, 4, 100]);
console.log(result, "result")