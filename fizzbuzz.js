//Example1 solving FizzBuzz in console//
for (let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
      console.log('FizzBuzz');
  }else if (i%3 ==0){
        console.log('Fizz');
    }else if(i%5 ==0){
          console.log('Buzz');
     } else {
             console.log(i);
     }
 }


//Example2 using a function, traditional//

function FizzBuzzA(value1, value2) {
	let returnValue = "";
  for (let i=1; i<=100; i++){
  	if(i%value1==0 && i%value2==0){
        returnValue += "FizzBuzz ";
    }else if (i%value1==0){
          returnValue += "Fizz ";
      }else if(i%value2==0){
            returnValue += "Buzz ";
       } else {
       			returnValue += i + ' ';
       }
   }
   return returnValue;
}

//Call and use FizzBuzz
function buzzIt(){
    let output="";
    let val1 = document.getElementById('fizzValue').value;
    let val2 = document.getElementById('buzzValue').value;
    output = FizzBuzzA(val1, val2);
    document.getElementById('results').innerHTML = output;
}
