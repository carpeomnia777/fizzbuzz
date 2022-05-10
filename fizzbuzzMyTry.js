//prep
//fizzbuzz print numbers everytime its divisible by 3 print fizz everytime divisible by 5 print buzz and divisible by both fizzbuzz
//p: num, whole, +
//r: number

function fizzBuzz(num){
    //loop
    //check to see if it's divisible, conditional with %3&5, %3, %5
    //console.log num or fizz, buzz, fizzBuzz

    for(let i =1; i <= num; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("fizzbuzz")
        }
        else if (i % 3 == 0){
            console.log("fizz")
        }
        else if (i % 5 ==0){
            console.log("buzz")
        }
        else{
            console.log(i)
        }

    }
}

fizzBuzz(5) //1,2,fizz,4,buzz
fizzBuzz(3) // 1, 2, fizz
fizzBuzz(15)// 1, 2, fizz, 4, buzz, fizz, 7,8, fizz, buzz, 11, 13, 14, fizzbuzz