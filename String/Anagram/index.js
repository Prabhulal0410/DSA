// methode 1 --> optimize code
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let count = {}
    for(let char of s){
        count[char] = (count[char] || 0) + 1
    }

    for(let char of t){
        if(!count[char] || count[char] < 0){
            return false
        }else{
            -- count[char]
        }
    }
    return true
};

// methode 2 --> bad code but still works
var isAnagram = function(s, t) {
    let str1 = s.split("").sort().join("")
    let str2 = t.split("").sort().join("")
    if(str1 === str2){
        return true
    }else{
        return false
    }
};