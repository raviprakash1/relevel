// We need to find Squre of 5
function squareRoot(number, precision)// 1,2,3,4,5
{
    let start = 0;//0
    let end = number;//5
    let mid;
    let ans = 0.0;

    while(start <= end)
    {
        mid = Math.floor((start + end)/2);//2.5

        if(mid * mid == number)//6.25 == 5 false
        {
            ans = mid;
            break;
        }

        if (mid * mid < number) { //6.25 < 5
            start = mid + 1;
            ans = mid;
        }
        else{
            end = mid - 1;// go left
        }

    }

    let increament = 0.1; //ans - 3.1 * 3.1 < =10
    for(let i =0; i < precision; i++)//precision-> Till what decimal I want to see the value
    {
        while(ans * ans <= number)//4<=5
        {
            ans = ans + increament;
        }
        ans = ans- increament;
        increament = increament/2;
    }

    return ans;

}

console.log(squareRoot(5, 2));

/*
function _sqrt(number, start, end) {
    let guess = (start + end) / 2;
    let aproximation = guess * guess;
  
    if (Math.abs(number - aproximation) < 0.1)
      return guess;
    
    if (aproximation > number)
        end = guess;
    else
        start = guess;
  
    return _sqrt(number, start, end);
  }
  
  function sqrt(number) {
    if (number < 0)
      return -1;
    
    return _sqrt(number, 0, number);
  }
  
  console.log(sqrt(10));
*/