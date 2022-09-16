function lowerbound(arr, target)
{
    var l= 0;
    var r = arr.length;
    while(l<r)
    {
        var mid = Math.floor((l+r)/2);
        if(arr[mid] >= target)
        {
            r= mid;
        }
        else
        {
            l= mid+1;
        }
    }
    return l;
}

function upperbound(arr, target)
{
    var l= 0;
    var r = arr.length;
    while(l<r)
    {
        var mid = Math.floor((l+r)/2);
        if(arr[mid] <= target)
        {
            l= mid+1;
        }
        else
        {
            r= mid;
        }
    }
    return l;
}
let arr = [2, 3 ,4, 5, 6 ,7 ];
let key = 1;
let firstIndex = lowerbound(arr,key);
let lastIndex = upperbound(arr,key);
console.log(firstIndex, lastIndex)

