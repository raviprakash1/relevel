//h =arr.length -1 //5
//l = 0
//mid = 2
function countNumberOfRotations(arr, low, high) {
    if (high < low) //
        return 0;

    if (high == low)
        return low;
    let mid = Math.floor(low + (high - low) / 2);//2

    if (arr[mid + 1] < arr[mid]) //3<2
        return (mid + 1);

    if (arr[mid] < arr[mid - 1])//2 < 18
        return mid;
    if (arr[high] > arr[mid])
        return countNumberOfRotations(arr, low, mid - 1);
    return countNumberOfRotations(arr, mid + 1, high);
}

let arr = [15, 18, 2, 3, 6, 12];
//[12,15, 18, 2, 3, 6];
let n = arr.length;
console.log(countNumberOfRotations(arr, 0, n - 1));