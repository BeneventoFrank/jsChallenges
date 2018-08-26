function KaprekarsConstant(number)
{
 
  let num = number;
  let strArry = [];
  let itterations = 0;
  let sortArry = []


  while (num!=6174){
    strArry = num.toString().split('');
    numberInDescOrder = strArry.sort().join('');
    numberInAscOrder = strArry.sort().reverse().join('');
    sortArry = [numberInDescOrder,numberInAscOrder].sort();
    
    num = sortArry[1] - sortArry[0];

    if(num < 1000)
    {
    num = padNumber(num);
    }
    itterations = itterations +1;
  } 

  return itterations

  function padNumber(num){
    let tmpArry = num.toString().split('');
    while(tmpArry.length < 4)
    {
      tmpArry.push('0')
    }
    return parseInt(tmpArry.join(''));
  }
}


KaprekarsConstant(3524);
//should return 3