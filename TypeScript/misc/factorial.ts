function factorial(num: number): number {
    let fact = 1;
    while(num > 0) {
        fact *= num;
        num--;
    }
    return fact;
}

console.log(factorial(5))