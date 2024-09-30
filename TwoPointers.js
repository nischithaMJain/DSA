const arr = [10, 20, 35, 50, 75, 80];
const result = twoPointer(arr, 70);

function twoPointer(A, X) {
    let i = 0;
    let j = A.length - 1;

    while (i < j) {
        if (A[i] + A[j] === X)
            return true;
        else if (A[i] + A[j] < X)
            i++;
        else
            j--;
    }
    return false;
}


console.log(result);
