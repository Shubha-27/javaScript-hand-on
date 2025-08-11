console.log(`==================finding factorial number=====================`);

function factorialOfNum(num){
    if (num==null||num==undefined) {
        console.log(`invalid input: ${num}-->unhappy scenario`);
        return;
   }
    var fact=1;
    for(i=1;i<=num;i++){
        fact=fact*i;
        
    }
    
     console.log(`factorial of ${num} is: ${fact}`);
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
