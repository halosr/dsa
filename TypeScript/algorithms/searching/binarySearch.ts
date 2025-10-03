export function binarySearch<T>(array: T[], key: T): number | null {
    let low = 0;
    let high = array.length - 1;
    let mid;
    while (high >= low) {
        mid = Math.floor((low + high) / 2);
        if (key === array[mid]) {
            return mid;
        } else if (key > array[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return null;
}

export function binarySearchRecursion<T>(array: T[], low: number, high: number, key: T): number | null {
    if (low > high) {
        return null;
    }
    let mid = Math.floor((low + high) / 2);
    if (key === array[mid]) {
        return mid;
    } else if (key > array[mid]) {
        low = mid + 1;
        return binarySearchRecursion(array, low, high, key);
    } else {
        high = mid - 1;
        return binarySearchRecursion(array, low, high, key);
    }
}
