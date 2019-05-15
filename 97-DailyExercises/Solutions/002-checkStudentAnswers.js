// REQUIREMENTS

// The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. 
// The second one is "answers" array and contains student's answers.
//
// The two arrays are not empty and are the same length.  Their length is not known.  Return 
// the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect 
// answer, and +0 for each blank answer(empty string).

// If the score < 0, return 0.

var rubric = ["a", "a", "c", "d"]
var student1 = ["a", "", "b", "d"]
var student2 = ["a",   , "b", "d"]

function checkAnswers(a, b) {
  // initialize score
  var score = 0
  // loop thru a (answers), assuming it has all answers
  for (let i=0; i<a.length; i++){
      a[i] === b[i] ? score += 4 : 
          b[i] ? score -= 1 : 0 // if b[i] exists 
                                // then -1 score
  }
  return score
}

console.log(checkAnswers(rubric, student1))
console.log(checkAnswers(rubric, student2))
