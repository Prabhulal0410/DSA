// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

//approach one

var groupAnagrams = function(strs) {
    let map = {}
    for(let i=0; i <strs.length; i++){
        let sortedArr= strs[i].split("").sort().join("")
        if(!map[sortedArr]){
            map[sortedArr] = [strs[i]]
        }else{
            map[sortedArr].push(strs[i])
        }
    }
    return [...Object.values(map)]
};


//optimized code
var groupAnagrams = function(strs) {
    let map = {}
    for(let i=0; i <strs.length; i++){
       //create a key
       let freqArr = Array(26).fill(0)
       let s = strs[i];
       for(let j = 0; j < s.length; j++){
        let index = s[j].charCodeAt()-"a".charCodeAt();
        ++freqArr[index]
       }
       let key = ""
       for(let k = 0; k <26; k++){
        key = key + String.fromCharCode(k) + freqArr[k]
       }
       //fill the map
       if(!map[key]){
        map[key] = [s]
       }else{
        map[key].push(s)
       }
    }
    return [...Object.values(map)]
};