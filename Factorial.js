// Factorial Program

// function Factorialof( num )
// {
// var i =0;
// var fact = 1;
// for( i = num; i >= 1; i-- )
// {
// fact = fact * i;
// }
// return fact;
// }

// console.log(Factorialof(4));


// Factors program
// let num = prompt('Enter a positive number: ');
// for(let i = 1; i <= num; i++) {
// if(num % i == 0) {
//     console.log(i);
// }
// }
// console.log(num);


// Fizz buzz Program

// let num =prompt("Enter the number To find Fizz And Buzz");
// if(num % 3==0 && num % 5==0){
//     console.log("Fizz Buzz");
// }
// else if (num%3==0){

//     console.log("FIZZ");

// }
// else if(num%5==0){
//     console.log(" Buzz");
// }


// program to find the HCF or GCD of two integers



const n = 10;
      
    // Create a new array of size 'n'
    var series = new Array(n); 
  
    series.fill(0);   
      
    series[0] = 0; 
      
    series[1] = 1;  
      
    for(let i = 2; i < n; i++) {
  
        series[i] = series[i-1] + series[i-2];  
    }
  
    console.log(series);
