function swapText() {
  let hobby = document.querySelector('.slider');
  hobby.textContent = hobbies[i];
  i++;
  if (i === hobbies.length) i = 0;
}

let i = 1;
let hobbies = [
  "learn", "climb","code", "write", "think", "listen",
  "laugh", "draw", "sing", "explore hobbies"
];

window.setInterval(swapText, 1000);
