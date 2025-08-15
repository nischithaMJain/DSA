/* 
## 1) Problem Statement
Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.

Note: The rightmost element is always a leader.

Examples:

Input: arr[] = [16, 17, 4, 3, 5, 2]
Output: [17 5 2]
Explanation: 17 is greater than all the elements to its right i.e., [4, 3, 5, 2], therefore 17 is a leader. 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.

Input: arr[] = [1, 2, 3, 4, 5, 2]
Output: [5 2]
Explanation: 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.

## 2) My Approach
- Key idea: use 2 pointers- first and next, the next pointer will always start from the next element of first pointer. if first is less than next then the first pointers points to next pointere. The next pointer now points to next element
- Time Complexity: o(n^2)
- Space Complexity: O(n)

## 3) Code


## 4) Test Cases
- Normal:[16, 17, 4, 3, 5, 2], [16, -17, 4, 3, -5, 2]
- Edge:[0],[1],[], [1,2,....,10000]
- Extreme/Performance:

## 5) Input and Output
[16, 17, 4, 3, 5, 2]- [ 17, 5, 2 ]
[16, -17, 4, 3, -5, 2]-[ 16, 4, 3, 2 ]
[16]-[16]
[1]-[1]
[]-[]
[0, 0, 0, 0]-[0]
[1,2,3....,1000]-[ 1000 ]


*/
function leaderArr(arr) {
    if (arr.length <= 1) return arr;
    let result = [], first = 0;
    while (first < arr.length) {
        let next = first + 1;
        while (next < arr.length) {
            if (arr[next] < arr[first]) {
                next++;
            } else {
                first = next;
                next = first + 1;
            }
        }
        result.push(arr[first])
        first++;
    }
    return result;

}
let values = [...Array(1000).keys()].map(i => i + 1)
console.log(leaderArr([16, 17, 4, 3, 5, 2]));//[ 17, 5, 2 ]
console.log(leaderArr([16, -17, 4, 3, -5, 2]));//[ 16, 4, 3, 2 ]
console.log(leaderArr([16]));//[ 16 ]
console.log(leaderArr([]));//[]
console.log(leaderArr([0, 0, 0, 0]));//[0]
console.log(leaderArr(values));//[1000]


//2 Optimised solution
function optimisedLadder(arr) {
    if (arr.length <= 1) return arr;

    let result = [], maxFromRight = arr[arr.length - 1];
    result.push(maxFromRight);

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            maxFromRight = arr[i];
            result.push(arr[i])
        }
    }
    return result.reverse();
}

let values2 = [...Array(1000).keys()].map(i => i + 1)
console.log(optimisedLadder([16, 17, 4, 3, 5, 2]));//[ 17, 5, 2 ]
console.log(optimisedLadder([16, -17, 4, 3, -5, 2]));//[ 16, 4, 3, 2 ]
console.log(optimisedLadder([16]));//[ 16 ]
console.log(optimisedLadder([]));//[]
console.log(optimisedLadder([0, 0, 0, 0]));//[0]
console.log(optimisedLadder(values2));//[1000]