// EXERCISE 1 — FizzBuzz-lite
// Run with:   node 01-fizzbuzz-lite.js
//
// Goal: loop over the numbers 1 to 20. For each one, print "even" if it's
// an even number, or "odd" if it's odd.
//
// Hints:
//   - A counting for-loop will do the looping.
//   - The % (remainder) operator tells you if a number is even:
//     a number is even when  n % 2 === 0.
//
// Write your code below, then save and run it.

 for (let n = 1; n <= 20; n++) { 
    if (n % 2 === 0){
        console.log("even")
    }
    else {console.log("odd")}
}
 

// Submitting your homework (do all three exercises, then one PR):
//   git checkout -b week-1-exercises    <- create the branch ONCE, before you start
//   git add .
//   git commit -m "Week 1: fizzbuzz-lite"
//   git push -u origin week-1-exercises
// Then open a pull request on GitHub (the "Compare & pull request" button).
// See the lesson plan's git block for the full walkthrough.
