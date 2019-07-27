// Corrected Solution

function isIsogram(str){
    let strObj = {}          // here we track occurrence of each alphabet
    let isIsogramFlag = true

    // don't care about case, convert to array and loop over it
    str.toLowerCase().split("").forEach(
        function(letter) {
            if(strObj[letter]){  // testing strObj property for each unique letter
                isIsogramFlag = false     // if a repeat letter found, then not an isogram
            }
            strObj[letter] = true // if not found, then the property is set to true
        }
    )
    return isIsogramFlag
}

var test = "Heloo"

console.log(`"${test}" ${isIsogram(test) ? "is" : "is not"} an isogram.`)
