// src/data.js
export const algorithms = [
    {
        name: 'Binary Search',
        description: `
Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.
Time Complexity: 
𝑂(log𝑛)`,
        image: require('../src/images/binary-search-1.jpg')
    },
    {
        name: 'Merge Sort',
        description: 'Merge sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the two sorted halves to produce the sorted array. Time Complexity: O(nlogn)',
        image: require('../src/images/merge-sort.png')
    },
    {
        name: 'Quick Sort',
        description: 'An efficient sorting algorithm, serving as a systematic method for placing the elements of a list in order.',
        image: require('../src/images/quick-sort.png')
    },
    // Add more algorithms as needed
];
