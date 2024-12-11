function stack(str) {
    let arr = str.split("");
    let i = 0;
    const stack = [];
    while (i < arr.length) {
        if (arr[i] !== '#') {
            stack.push(arr[i]);
            i++;
        } else {
            stack.pop();
            i++;
        }
    }
    return stack.join("");
}

let s = 'ab#c';
let t = "ad#c";

console.log(stack(s) === stack(t))