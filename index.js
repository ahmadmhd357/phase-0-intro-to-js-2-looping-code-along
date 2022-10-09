// Code your solutions in this file
let arr=["sName","sName","evName "];
function writeCards(sName,evName) {
    let newArr=[];
    for ( let i = 0; i < arr.length; i++) {
      newArr.push(`Thank you, ${sName[i]}, for the wonderful ${evName} gift!` );
    };
  
    return newArr;
  }
  
  function countDown(num){
    
    while(num >= 0 ){
     console.log(num );
      
      num--;
    };
    
  }
  countDown(10);
  