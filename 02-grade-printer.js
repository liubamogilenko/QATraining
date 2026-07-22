// EXERCISE 2 — Grade printer
// Run with:   node 02-grade-printer.js
//
// Goal: given a score, print one of three results:
//   - 70 or above  -> "Pass"
//   - 50 to 69     -> "Borderline"
//   - below 50     -> "Fail"
//
// Use if / else if / else.
//
// Then change the value of `score`, save, and run again — check that each of
// the three branches fires when you'd expect it to.

const score = 49;
if (score >= 70) {
    console.log("Pass")
}
else if (score >= 50 && score <= 69 ) {
    console.log("Borderline")
}
else {
    console.log("Fail")
}

// Already on your week-1-exercises branch? Just save your progress:
//   git add .
//   git commit -m "Week 1: grade-printer"
//   git push
// (You create the branch only once — see exercise 1 or the lesson plan.)
