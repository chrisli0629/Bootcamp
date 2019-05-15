var expect = require('expect')

var alcoholInBob = {
    vol: 24,  // in oz
    alcPct: 0.08 // in percent
}

var genderOfBob = 'male'
var timeSinceBobDrank = 3
var weightOfBob = 220

function bac(alcohol, weight, gender, time) {
   if(gender !== 'male' && gender !== 'female') return "Wrong gender"
   if(time < 0 || time > 24) return "time out of bound" 
   var r = gender === 'male' ? 0.73 : 0.66;
   var answer = (alcohol.vol*alcohol.alcPct * 5.14 / (weight * r)) - 0.015 * time
   return Number(answer.toFixed(4));
}

// var bobsBAC = bac(alcoholInBob, weightOfBob, genderOfBob, timeSinceBobDrank)
// console.log("bob's bac level is ", bobsBAC )

expect(bac({vol: 24, alcPct: 0.08}, 220, 'male', 3)).toEqual(0.0164)
expect(bac({vol: 24, alcPct: 0.08}, 220, 'M', 3)).toEqual("Wrong gender")
expect(bac({vol: 6,  alcPct: 0.40}, 165, "female", 1)).toEqual(0.0983)

// expect(double(-2)).toEqual(-4)
// expect(double()).toEqual(NaN)
console.log('All tests OK')
