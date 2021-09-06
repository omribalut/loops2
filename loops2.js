// divide by 3
function divideNum(num1)
{
for (let i = 3; i <=num1; i++) {
    if(i % 3 === 0){
    
      console.log(i);
    }
    }
}
    divideNum(9)

    // two numbers 3 & 8
    function checkTwoNumbers(num1, num2)
{
for (let i = num1; i <=num2; i++) {

      console.log(i);
    }
    }

checkTwoNumbers(3, 8)


// prime number
function checkIfPrime(num){
  for(let i = 2; i <= num; i++){
     if(num % i === 0){
         return false
      }
      else{
          return num
      }; 
  };
};

console.log(checkIfPrime(4));


// sum true/false
function checkIfDevided(num1, num2){
  if(num2%num1 === 0){
      return true;
  }else{
      return false;
  };
};

console.log(checkIfDevided(4,12));

    // love/hate
    function loveHate(num){

      for(let i = 1; i <= num; i++){
         if(i % 2 === 1)
         console.log("LOVE");
    
          else { 
            console.log("HATE");
          }
        }
      }
      loveHate(4)
