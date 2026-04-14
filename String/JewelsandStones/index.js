// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Brootforce approach
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i < stones.length;i++){
        if(jewels.includes(stones[i])){
            count ++
        }
    }
    return count
};


//without built-in methode
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i<stones.length;i++){
        for(let j = 0; j<jewels.length; j++){
            if(jewels[j] === stones[i]){
                ++count
                break
            }
        }
    }
    return count
};