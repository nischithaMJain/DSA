//Fisher Yate Algorithm 

//1. to shuffle we will iterate the array from last and sway with random number between the randomly sselected element until the i 
//value reaches initial value 
function randomShuffle(arr) {
    //iterate from last 
    for(let i=arr.length-1;i>0; i--){
        //fetch random number between 0-1
        let j = Math.floor(Math.random()*(i+1));
        //Swap the element
        [arr[i],arr[j]]= [arr[j], arr[i]];
    }
    return arr;
}

let arr=[1,2,3,4,5,6,7,8];

console.log(randomShuffle(arr));

//Time Complexity: o(n)
//Space Complexity: O(1)