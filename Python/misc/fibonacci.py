def fibonacci(limit):
    f = 0
    l = 1
    print(0, end=",")
    while l < limit:
        print(l, end=",")
        s = f + l
        f = l
        l = s

fibonacci(100)