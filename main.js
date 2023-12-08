let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #4d474d;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #4d474d;">Creadora y planificadora de contenido digital</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
