/**
 * Performs a linear search to find the first occurrence of an element in an array
 * Time Complexity: O(n) where n is the length of the array
 * Space Complexity: O(1)
 * 
 * @param array - The array to search through
 * @param key - The element to search for
 * @returns The index of the first occurrence of the key, or null if not found
 */
export default function linearSearch<T>(array: T[], key: T): number | null {
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] === key) {
            return i;
        }
    }
    return null;
}
