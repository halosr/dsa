def linear_search_while(list, key):
    i = 0
    while i < len(list):
        if list[i] == key:
            return i
        i = i + 1
    
    return None

def linear_search_for(list, key):
    for i in list:
        if list[i] == key:
            return i
        
    return None

def linear_search(list, key, method="while"):
    result = None
    if method == "while":
        result = linear_search_while(list, key)
    elif method == 'for':
        result = linear_search_for(list, key)
    else:
        result = "Wrong Method"

    return result

arr = [1,3,4,5,2,6,5,2]

# result = linear_search_while(arr, 5)
# result = linear_search_for(arr, 6)
result = linear_search(arr,6, "x")
if result == None:
    print("Element not found")
elif result == 'Wrong Method':
    print("Wrong Method value")
else:
    print("key found at index", result)