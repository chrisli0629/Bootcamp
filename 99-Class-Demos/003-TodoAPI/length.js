
function lengthFn(value){
    if(typeof value === 'string'){
        return value.length
    } else if(typeof value === 'number'){
        return value.toString().length
    } else if(typeof value === 'boolean'){
        return 1
    }
}

module.exports = lengthFn

// console.log(length_function(123))
// console.log(length_function('hello123'))
// console.log(length_function(true))