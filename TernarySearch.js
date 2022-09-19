

function ternarySearch(l,r,key,arr)
{
    while(r>=l)
    {
        let mid1 = l+  Math.floor((r-l)/3); //
        let mid2 = r -  Math.floor((r-l)/3);
        // let mid1 = l+ parseInt((r-l)/3,10); 
        // let mid2 = r - parseInt((r-l)/3,10);  

        console.log("Mid1 index is " + mid1);
        console.log("Mid2 is index " + mid2);
        console.log("Mid1 value is " + arr[mid1]);
        console.log("Mid2 value is " + arr[mid2]);

        //Check if element is present at any mid
        if(arr[mid1] === key) 
        {
            return mid1
        }
        else if(arr[mid2] === key) {
            return mid2
        }
        else if(key < arr[mid1])//7<5
        {
            r= mid1-1;
        }
        else if( key > arr[mid2])//7>10
        {
            l = mid2 +1;
        }
        else{
            l= mid1 +1;
            r = mid2 -1;
        }
    }
    return -1;
}

let l,r,result, key;
let arr = [2,3,5,7];
l=0;
r=arr.length-1;
console.log("Right Value " + r)
key = 7;
result = ternarySearch(l,r,key,arr);

console.log("Result is "+ result);
