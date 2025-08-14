/*
1. Problem Statement:
(Copy-paste the exact problem or a brief version so we know what we’re solving.)
    Given an array arr[], the task is to print every alternate element of the array starting from the first element.
        Examples:
        Input: arr[] = [10, 20, 30, 40, 50]
        Output: 10 30 50
        Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).
        Input: arr[] = [-5, 1, 4, 2, 12]
        Output: -5 4 12

2. Approach:
    (Short bullet points explaining your thought process before coding.)
    -Brute force approach- iterate through the array elements with I increasing 2 steps , create an empty new array and insert the elements into new arr 
3. Code:
    // your solution here
4. Time Complexity:
    (e.g., O(n), O(n log n))
    O(n)-> since we are iterating through every second element the time complexity is O(n/2) dropping the constants we will have O(n)
5. Space Complexity:
    (e.g., O(1), O(n))
    O(n)=> we are inserting O(n/2) elements that’s skipping alternative element
6. Test Cases:
    (Include at least 3, covering normal case, edge case, and extreme case.)
    Normal case: [1,2,3,4,5,6]
    Edge Case:[], [1]
7. Output:
    (Actual output from your run):
    [1,3,5]
    []
    [1]
8. Notes / Edge Cases Considered:
    (Optional — mention any tricky parts you accounted for.): 
    we can execute this using while or for loop

*/
function alternatives(arr) {
    if (arr.length <= 1) return arr;
    let i = 0, newArr = [];
    while (i < arr.length) {
        newArr.push(arr[i]);
        i += 2;
    }
    return newArr;
}

console.log(alternatives([1, 2, 3, 4, 5, 6]));
console.log(alternatives([]));

