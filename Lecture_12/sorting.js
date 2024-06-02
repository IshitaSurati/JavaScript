// Sorting refers to the process of arranging data in a specific order, 
// typically in ascending or descending order. 
// Most programming languages provide built-in methods to sort arrays or lists.

let numbers = [4, 2, 5, 1, 3];
console.log(...numbers);
// Sort in ascending order
numbers.sort((a, b) => a - b); // numbers = [1, 2, 3, 4, 5]
console.log(...numbers);
// Sort in descending order
numbers.sort((a, b) => b - a); // numbers = [5, 4, 3, 2, 1]
console.log(...numbers);

// Sorting Algorithms:-
// There are many sorting algorithms, each with different characteristics. Some common ones include:
let arr = [64, 34, 25, 12, 22, 11, 90];
//1. Bubble Sort: 
// Simple but inefficient for large datasets. Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}
console.log("Bubble Sorted array:", bubbleSort(arr));


//2. Selection Sort : 
// Selection Sort repeatedly selects the smallest (or largest) element from the unsorted portion and moves it to the sorted portion.
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
    }
    return arr;
}
console.log("Selection Sorted array:", selectionSort(arr));

//3. Insertion Sort :
// Insertion Sort builds the sorted array one item at a time by repeatedly picking the next item and inserting it into its correct position.
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log("Insertion Sorted array:", insertionSort(arr));

// 4. Merge Sort :
// Merge Sort is a divide-and-conquer algorithm that divides the list into two halves, recursively sorts them, and then merges the sorted halves.
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
console.log("Merge Sorted array:", mergeSort(arr));


// 5. Quick Sort
// Quick Sort is a divide-and-conquer algorithm that selects a 'pivot' element and partitions the array around the pivot, recursively sorting the partitions.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];
    for (const num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }
    return quickSort(left).concat(equal, quickSort(right));
}
console.log("Quick Sorted array:", quickSort(arr));

// 6. Heap Sort :
// Heap Sort builds a heap from the input data and then extracts the maximum element repeatedly to get a sorted array.
function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap
        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
        heapify(arr, n, largest);
    }
}
console.log("Heap Sorted array:", heapSort(arr));
