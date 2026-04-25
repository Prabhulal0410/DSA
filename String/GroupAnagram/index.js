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