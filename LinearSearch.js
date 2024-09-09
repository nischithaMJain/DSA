const LinearSearch =(arr, target)=>{
    for(let i=0;i<arr.length; i++)
    {
        if(arr[i]===target){
            return i;
        }
    }
    return "Not found"
}

const result= LinearSearch([10,3,2,18,19], 19); 
console.log(result)