// Exercise 3:Write a program that checks if a given number is positive, negative, or zero.
// create an Array which store different numbers, then we check it by applying conditions. 
let tempNumber=[-90,-150,0,76,298];
for (let number of tempNumber)
{
 console.log(number);
 if (number>0) {
    console.log("Given number is positive");
    }
 else if(number<0) {
        console.log("Given number is nagative");
    }
 else{
   console.log("Given number is zero");
    }
    
}
