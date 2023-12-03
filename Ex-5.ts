// Exercise 5:Write a program that determines if a person is eligible to vote based on their age.
function eligibletovote(age:number,country:string){
     if(country==="pakistan"){
         console.log(`\n Nice! you are from ${country}`);
         if(age>=18){
            console.log(`congratulation! You'r eligible to vote`);
         }
         else{
            console.log(`Ops,Sorry! Age restriction (Above 18): you'r not eligible for casting a vote`)
         }
     }
     else{
            console.log(`\n Please! Enter a correct country (pakistan). While, you'r from ${country}`);
    }
}
eligibletovote(16,"pakistan");
eligibletovote(52,"pakistan");
eligibletovote(25,"India");

