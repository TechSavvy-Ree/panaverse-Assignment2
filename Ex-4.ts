// Exercise 4: Write a program that checks if a given number is even or odd.
//............Execise-4............// 
/* you can categorize (0) as an even number.Because 0 divided by 2 equals 0 with no remainder, 
it meets this criteria and is classified as an Even*/
let trialnumbers=[34,157,98,0,65,2977,1020];
for (let number of trialnumbers) {
    console.log(number)
    if (number==0 ) {
        console.log("It is a neutral number");    
    }
    else if (number%2==0){
        console.log("It is a even number");
    }  
    else{
        console.log("It is a odd number");
    }
}
