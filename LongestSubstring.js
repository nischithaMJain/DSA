// Input: “ABCBC”
// Output: 3
// Explanation: The longest substring without repeating characters is “ABC”

// Input: “AAA”
// Output: 1
// Explanation: The longest substring without repeating characters is “A”

// Input: “GEEKSFORGEEKS”
// Output: 7
// Explanation: The longest substrings without repeating characters are “EKSFORG” and “KSFORGE”, with lengths of 7.


// G E E K S F O R G E E  K  S
// 0 1 2 3 4 5 6 7 8 9 10 11 12
// O(n), max= obj['e'=>1]
// obj={
//     G: 2,
//     E: 4, 
//     K: 2,
//     s: 2,
//     F: 1,
//     O:1,
//     R:1, 
// }

// obj[i]++

//My approach

// function longestCharacter(str) {
//     if (str.length === 0) return undefined;
//     let max = 0, obj = {}, char = "";
//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]]) {
//             obj[str[i]] += 1;
//         } else {
//             obj[str[i]] = 1;
//         }
//         if (obj[str[i]] > max) {
//             max = obj[str[i]];
//             char = str[i]
//         }
//     }

//     return char;
// }


function longestCharacter(str) {
    if (str === 0) return undefined;
    if (str === 1) return str;

}
const str = '';
const result = longestCharacter(str);
console.log(result)