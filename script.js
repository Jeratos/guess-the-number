'use strict';

// console.log(document.querySelector(`.message`).textContent);

let correctMsg=function(){ 

document.querySelector(`.message`).textContent='correct number'
}


// console.log(document.querySelector(`.message`).textContent);


// document.querySelector(`.score`).textContent=10;

// console.log(document.querySelector(`.guess`).value);
// document.querySelector('.guess').value=0;
// let rnum= Math.random(20);
let rnum= Math.trunc(Math.random()*20)+1;
let score = 20; 
let highScore=0;
// document.querySelector('.number').textContent=rnum;
// console.log(rnum);




document.querySelector('.check').addEventListener('click', function(){
  
  let guess=Number(document.querySelector('.guess').value);

  //when no input
  if(!guess){
    document.querySelector(`.message`).textContent='No number';
  }
  //when you win
  else if(guess==rnum){
    correctMsg();
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').style.width='30rem';
    document.querySelector(`.number`).textContent=rnum;

    if(score>highScore){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
    }
}
// when your number in too high 
else if(guess>rnum){

  if(score>1){

    document.querySelector(`.message`).textContent='too high...';
    score--;
    document.querySelector('.score').textContent=score;
  }else{
    document.querySelector(`.message`).textContent='game over...'
  }
  
}
//when your number is too low
else if(guess<rnum){
if(score>1){
  document.querySelector(`.message`).textContent='too low...';
  score--;
  document.querySelector('.score').textContent=score;
}else{
  document.querySelector(`.message`).textContent='game over...'
}
}

  // console.log(guess);
});
document.querySelector('.again').addEventListener('click', function(){
  score=20;
  rnum=Math.trunc(Math.random()*20)+1;
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';
  document.querySelector('.message').textContent='Start guessing...';
  document.querySelector('.number').style.width='15rem';
  document.querySelector('body').style.backgroundColor='#222'
  document.querySelector('.score').textContent=score;


});