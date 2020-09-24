const flow = (function () {
  let _i = 0;
  let _myhobbies = [
    "drums",
    "violin",
    "Smite",
    "Rocket League",
    "Python",
    "Scala",
    "functional programming",
    "JavaScript",
    "guitar",
    "typefaces",
    "Linux",
    "window managers",
    "Japanese language",
    "slacklining",
    "climbing",
    "swing dancing",
    "self improvement",
    "reading",
    "journaling",
    "writing",
    "3D modeling",
    "digital art",
    "drawing",
    "piano",
    "typing fast",
    "StarCraft II",
    "mechanical keyboards",
    "animation"
  ];

  const init = () => {
    loop();
  };

  const loop = () => {
    setTimeout(() => {
      addText();
      _i++;
      if (_i < _myhobbies.length) {
        loop();
      }
    }, 1000);
  };
  /*
   * Add a hobby to the same block every second
   */
  const addText = () => {
      const hobbies = document.querySelector('.hobbies');
      if (hobbies.textContent === '') {
        hobbies.textContent += _myhobbies[_i];
      } else {
        hobbies.textContent = _myhobbies[_i] + ', '+ hobbies.textContent;
      }
  };

  return {
    init
  }
})();

flow.init();
