def bubble_sort(arr):
    i = 0
    while(i < len(arr)):
        j = 0
        while(j < len(arr) - 1 - i):
            if(arr[j] > arr[j + 1]):
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

            j = j+1
        i = i+1

    return arr


if __name__ == "__main__":
    ar = [3,2,5,11,1,0,9,8]
    newArr = bubble_sort(ar)
    print(newArr)