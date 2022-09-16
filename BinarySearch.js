
function binarySearch(arr,key)
{
    let left =0;
    let right =arr.length-1;

    while(left<=right)
    {
        let mid = Math.floor((left+right)/2);   

        if(arr[mid] === key)
        {
            console.log("I found the element " + key + " at index "+ mid);
            return true;
        }

        else if(arr[mid] < key) //right case
        {
            left = mid +1;
        }
        else// left case
        {
            right = mid - 1;
        }
    }
    console.log("Element not found");
    return false;

}

let arr = [1,2,3,4,5,6,7];
let key = 30;
binarySearch(arr,key);//