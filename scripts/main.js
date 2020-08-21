function swapText() {
  let hobby = document.querySelector('#hobby');
  hobby.textContent = hobbies[i];
  i++;
  if (i === hobbies.length) i = 0;
}

let i = 1;
let hobbies = ["climb","swing dance", "write", "think", "listen to people",
               "make others laugh", "explore new hobbies"];

window.setInterval(swapText, 1000);
