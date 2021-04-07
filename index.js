document.addEventListener('DOMContentLoaded', function(){ 
  "use strict";

  const field = document.querySelector('.field');
  const title = document.querySelector('.field__title');
  const titleResult = document.querySelector('.field__title-accent');
  const rabbit = document.querySelector('.field__img');
  const input = document.querySelector('.input__item');
  const start  = document.querySelector('.field__button');
  const fieldWidth = field.clientWidth;
  const fieldHeight = field.clientHeight;
  let score;
  let time;
  
  input.addEventListener('change', () => {
    title.textContent = 'Start mission:'
    time = input.value * 1.0
    titleResult.textContent = time.toFixed(1);
  })

  rabbit.addEventListener('click', () => {
    ++score;
    locateRabbit();
  })

  start.addEventListener('click', startGame);

  function startGame(){  
    time = input.value;
    score = 0; 
    title.textContent = "Time to complete: ";
    titleResult.textContent = time;
    start.setAttribute('disabled', "true");
    input.setAttribute('disabled', "true");
    locateRabbit();   
    setTimer(time) 
  }

  function stopGame(){
    rabbit.style.display = 'none';
    title.textContent = "You killed "
    titleResult.textContent = score + ' rabbits';
    start.removeAttribute('disabled');
    input.removeAttribute('disabled');
  }

  function locateRabbit(){
    const rabbitSize = generateRabbit();    
    let top = generateNumber(0, fieldHeight) - rabbitSize;
    if(top < 0){top = 0};
    let left = generateNumber(0, fieldWidth) - rabbitSize;
    if(left < 0){left = 0};
    rabbit.style.top = top + 'px';
    rabbit.style.left = left + 'px';
  }

  function generateRabbit(){
    const rabbitSize = generateNumber(30, 100);
    rabbit.style.width = rabbit.style.height = rabbitSize + 'px';
    rabbit.style.display = "block";
    return rabbitSize;
  }

  function generateNumber(min, max){
    return Math.floor((Math.random()*(max-min)) + min)
  }

  function setTimer(time){
    const interval = setInterval(() => {
      if(time > 0){
        time -= 0.1
        titleResult.textContent = (+time + 0.1).toFixed(1);
      }else{
        stopGame();
        clearInterval(interval);
      }     
    }, 100)
  }


  // <<============== document's end =================>>
});