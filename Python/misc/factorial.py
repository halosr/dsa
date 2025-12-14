def factorial(num):
    fact = 1
    while num > 0:
        fact *= num
        num -= 1
    return fact

print(factorial(5))

def factorial_recursion(num):
    if(num == 0):
        return 1

    return num * factorial_recursion(num - 1)

print(factorial_recursion(15))