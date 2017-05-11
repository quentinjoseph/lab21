var facts = ["i do not like mushrooms", "i do not like onions", "i do not like peppers", "i'm hungry", "yep yep", "this is completed", "this is a really long list", "i am tired", "too much to do","node node node"];

function pullFact(){
  return facts[Math.floor(Math.random()*facts.length)];
  // console.log(fact);
}

module.exports.facts = facts;
module.exports.pullFact = pullFact;
