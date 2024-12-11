var strStr = function (haystack, needle) {
    let len = haystack.length - needle.length;
    let i = 0, j = 0;
    let result = -1, count = 0;
    if (len === 0 && haystack[0] === needle[0]) { return result = 0 }
    while (i < len) {
        while (j < needle.length) {
            if (haystack[i] === needle[j]) {
                result = i;
                count++;
                i++;
                j++
            }
            else {
                count = 0;
                j = 0;
                i++;
            }

        }
        j = 0;
        i++;
    }
    console.log(result)
    return result = count === needle.length ? result : -1;
};
const result = strStr('c', 'c')
console.log(result)