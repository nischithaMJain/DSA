// Criteria for strong password is as follows : 
// A password is strong if it has : 

// At least 8 characters 
// At least one special char 
// At least one number 
// At least one upper and one lower case char. 

function handleStrongPassword(password){
    if(password.length<8){
        return false;
    }

    const specialChar=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(!specialChar.test(password)){
        return false;
    }

    const alpha= /[A-Z]/;
    const smallalpha=/[a-z]/;
    if(!alpha.test(password)&&!smallalpha.test(password)){
        return false;
    }

    const number=/[0-9]/;
    if(!number.test(password)){
        return false;
    }
return true;
}

const password= "Bnbp7ama";
console.log(handleStrongPassword(password));

//Time Complexity: o(n)
//Space Complexity: O(1)