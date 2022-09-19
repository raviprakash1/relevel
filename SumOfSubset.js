let binarySearch = function (arr, findNumber, start, end) {
    if (start > end) return;
 
    let mid = Math.floor((start + end) / 2);
 
    if ((arr[mid] + arr[mid -1] === findNumber) || (arr[mid] + arr[mid +1] === findNumber)) {
        if ((arr[mid] + arr[mid -1] === findNumber)) {
            return [arr[mid], arr[mid-1]];
        }
        else {
            return [arr[mid], arr[mid+1]];
        }
    }
 
    if ((arr[mid] + arr[mid -1] > findNumber) || (arr[mid] + arr[mid +1] > findNumber)) {
      return binarySearch(arr, findNumber, start, mid - 1);
    } else {
      return binarySearch(arr, findNumber, mid + 1, end);
    }
  };
 
  let arr = [1, 3, 4, 5, 10, 11];
  let findNumber = 4;
 
  console.log(binarySearch(arr, findNumber, 0, arr.length - 1).join(' '));