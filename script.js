'use strict';

let randomNum = parseInt(Math.random() * 100);

function isNum(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }
function guessNumber() {
    
    let userNum = prompt('Угадай число от 1 до 100');
    
    if (isNum(userNum)) {
        userNum = +userNum;
    
        if (userNum > randomNum) {
            alert ('Загаданное число меньше');
            
           
        } else if (userNum < randomNum) {
            alert ('Загаданное число больше');
            
        
        } else if (userNum === randomNum) {
            alert ('Поздравляю, Вы угадали!'); 
            return userNum;
          
        } 
    } else {
        confirm('Игра закончена');
        return;
    }

     return guessNumber();
}
console.log(guessNumber());  
   

    
    
      