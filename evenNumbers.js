//let i = 1  - initialization (says that it should start with 1)
//i<=10 - condition (makes the loop keeps on running as long as the code is less than or equal to 10)
// i++ increases i by 1 each iteration 
// if condition uses modulus to see the remainder (if i is divided by 2 and if the remainder is  equal to  0, then it gets printed because it is an even number). 
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
