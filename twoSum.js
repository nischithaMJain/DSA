// Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
// Output: [7, 0, 8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
// Output: [8, 9, 9, 9, 0, 0, 0, 1]

const reverseNum = (list) => {
    let stack = [];
    let temp = this.val;
    while (temp.next) {
        //insert the elements to the stack 
        stack.push(temp);
        temp = temp.next;
    }
    let num = 0;
    while (stack) {
        num = Number(stack.pop());
    }
    return num;
}
const addTwoNumbers = (l1, l2) => {
    const val1 = reverseNum(l1);
    const val2 = reverseNum(l2);
    return val1 + val2;
};
addTwoNumbers([2, 4, 3], [5, 6, 4])
