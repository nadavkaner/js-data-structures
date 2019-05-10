// Given an expression string exp. Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
// For example, the program should print 'balanced' for exp = “[()]{}{[()()]()}” and 'not balanced' for exp = “[(])”

const { createStack } = require("../stack");

const PARENTHESIS = {
  "[": "]",
  "(": ")",
  "{": "}"
};

function parenthesisChecker(str) {
  const s = createStack();
  const open = Object.keys(PARENTHESIS);
  const close = Object.values(PARENTHESIS);

  for (let c of str) {
    if (open.includes(c)) {
      s.push(c);
    } else if (close.includes(c)) {
      if (PARENTHESIS[s.pop()] !== c) {
        return false;
      }
    }
  }

  return true;
}

console.log(parenthesisChecker("[()]{}{[()()]()}"));
console.log(parenthesisChecker("[(])"));
