let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator() {
  let numWho = 0;
  let numAction = 0;
  let numWhat = 0;
  let numWhen = 0;

  numWho = Math.floor(Math.random() * who.length);
  numAction = Math.floor(Math.random() * action.length);
  numWhat = Math.floor(Math.random() * what.length);
  numWhen = Math.floor(Math.random() * when.length);

  return (
    who[numWho] +
    " " +
    action[numAction] +
    " " +
    what[numWhat] +
    " " +
    when[numWhen]
  );
}

function onLoad() {
  const excuse = document.getElementById("excuse");
  excuse.innerHTML = excuseGenerator(who, action, what, when);
}
document.addEventListener("DOMContentLoaded", onLoad);
