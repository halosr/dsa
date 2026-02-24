export function factorial(num: number): number {
    let fact = 1;
    while(num > 0) {
        fact *= num;
        num--;
    }
    return fact;
}

console.log(factorial(5))

export function factorialRecursion(num: number): number {
    if(num === 0) return 1;

    return num * factorialRecursion(num-1)
}

console.log(factorialRecursion(6))