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

**Comparison-based** algorithm that maintains a **sorted sub list** within the input array, and each element of the unsorted part has to find its place in the sorted sub list.

|Complexity| Stable? | In place ? | Adaptative? |
| ---- | ---- | ---- | ----- |
| O(n^2) | :white_check_mark: | :white_check_mark: | :x: |

```java
public static int[] insertionSort(int[] input){
    for(int i =1;i<=input.length-1;i++){
        int valueToInsert = input[i];
        int holePosition=i;
        while(holePosition>0 && input[holePosition-1]>valueToInsert)
        {
            input[holePosition]=input[holePosition-1];
            holePosition=holePosition-1;
        }
        input[holePosition]=valueToInsert;
    }
    return input;
 }
```

## Selection sort 

**Comparison-based** algorithm that splits the input into two parts, the left sorted one and the right unsorted part. 
The smallest element of the unsorted part is **selected** and swapped with the leftmost element, and that element becomes the last and greatest element of the sorted part.

|Complexity| Stable? | In place ? | Adaptative? |
| ---- | ---- | ---- | ----- |
| O(n^2) | :white_check_mark: | :white_check_mark: | :x: |

```java
public static int[] selectionSort(int[] input){
    for(int j = 0;j < input.length-1;j++){
        for(int i=j+1;i< input.length;i++){
            if(input[i]<input[j]) {
                int selected=input[i];
                input[i] = input[j];
                input[j] =selected;
            }
        }
    }
    return input;
}
```

## Merge sort

**Divide and conquer technique** based algorithm that divides the input into two equal parts and then merges them in a sorted way.

|Complexity| Stable? | In place ? | Adaptative? |
| ---- | ---- | ---- | ----- |
| O(n log n) | :x: | :x: | :x: |

``` java
public static int[] mergeSort(int[] input) {
 if (input.length <= 1) {
     return input;
 }
 // split the input into two arrays :
 int[] first = new int[input.length / 2];
 int[] second = new int[input.length - first.length];
 System.arraycopy(input, 0, first, 0, first.length);
 System.arraycopy(input, first.length, second, 0, second.length);
 mergeSort(first);
 mergeSort(second);
 merge(first, second, input);
 return input;
}

private static void merge(int[] first, int[] second, int[] input) {
 int iFirst = 0;
 int iSecond = 0;
 int iMerged = 0;
 while (iFirst < first.length && iSecond < second.length) {
     if (first[iFirst] < second[iSecond]) {
         input[iMerged] = first[iFirst];
         iFirst++;
     } else {
         input[iMerged] = second[iSecond];
         iSecond++;
     }
     iMerged++;
 }
 //copy remaining elements from both halves - each half will have already sorted elements
 System.arraycopy(first, iFirst, input, iMerged, first.length - iFirst);
 System.arraycopy(second, iSecond, input, iMerged, second.length - iSecond);
}
```
