// brutforce approach

var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filterdString = "";
    let reverseString = "";
    for(let i = 0; i < s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filterdString += s[i]
            reverseString = s[i] + reverseString
        }   
    }
    return reverseString === filterdString
};