function finMininimum(arr, low , high)
{
    if(high<low)
    {
        return arr[0];
    }

    if(high == low)
    {
        return arr[low];
    }

    let mid = low + Math.floor((high-low)/2);
//[5,6,---1---,2,3,4];
    if(arr[mid+1] < arr[mid])
        return arr[mid+1];

    if(arr[mid] < arr[mid-1])
    {
        return arr[mid];
    }    

    if(arr[high] > arr[mid])
    {
        return finMininimum(arr, mid+1, high); // right
    }

    return finMininimum(arr, mid-1, high)// left
}

let arr = [5,6,1,2,3,4];
let n = arr.length;
console.log("Minimum element is "+ finMininimum(arr,0,n-1));

https://github.com/raviprakash1/relevel