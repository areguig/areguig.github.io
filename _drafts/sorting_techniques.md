# Sorting techniques

 __In place sorting__: Sorting algorithm that doesn't require extra space (new arrays) to sort the input (Bubble sort is an example).
 
 __Not-in-place sorting__: Sorting algorithm that requires extra space to perform the sorting (Merge sort is an example).
 
 __Stable sorting__: Sorting algorithm that keeps the similar input elements order.
 
 __Unstable sorting__: Sorting algorithm that changes the sequence of similar content in which they appear. (Quick sort).
 
 __Adaptative sorting__: Sorting algorithm that takes advantage of already 'sorted' elements in the list that is to be sorted.
 
 __Non adaptative sorting__: Sorting algorithm that does not take into account the elements which are already sorted.
 
## Bubble sort

**Comparison-based** algorithm in which each pair of adjacent elements is compared and **the elements are swapped** if they are not in order.

|Complexity| Stable? | In place ? | Adaptative? |
| ---- | ---- | ---- | ----- |
| O(n^2) | :white_check_mark: | :white_check_mark: | :x: |

```java
    public static int[] bubbleSort(int[] input) {
        for (int j = 0; j < input.length - 1; j++) {
            boolean swapped = false;
            for (int i = 0; i < input.length - 1; i++) {
                if (input[i + 1] < input[i]) {
                    int before = input[i + 1];
                    input[i + 1] = input[i];
                    input[i] = before;
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
        return input;
    }
```

## Insertion sort

**Comparison-based** algorithm that maintains a sorted sub list within the input array, and each element of the unsorted part has to find its place in the sorted sub list.

|Complexity| Stable? | In place ? | Adaptative? |
| ---- | ---- | ---- | ----- |
| O(n^2) | :white_check_mark: | :white_check_mark: | :x: |
