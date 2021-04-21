var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => (a - b));
    let median, length;
    length = arr.length - 1;
    if (arr.length % 2) {
        //奇数
        median = arr[length / 2];
    } else {
        median = (arr[Math.ceil(length / 2)] + arr[Math.floor(length / 2)]) / 2
    }
    return median;
};

var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0, j = 0, merged = [];
    //merged对数组进行排序的合集

    // 如果A[i] <= B[j], 则把A[i] 放入新的数组中，i往后移一位，即 i + 1.
    // 如果A[i] > B[j], 则把B[j] 放入新的数组中，j往后移一位，即 j + 1.
    // 重复步骤#1 和 #2，直到i移到A最后，或者j移到B最后。
    // 如果j移动到B数组最后，那么直接把剩下的所有A依次放入新的数组中.
    // 如果i移动到A数组最后，那么直接把剩下的所有B依次放入新的数组中.


    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) {
            merged.push(nums2[j]);
            j++;
        } else {
            merged.push(nums1[i]);
            i++;
        }
    }

    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }

    const { length } = merged;
    return length % 2 === 1
        ? merged[Math.floor(length / 2)]
        : (merged[length / 2] + merged[length / 2 - 1]) / 2
};