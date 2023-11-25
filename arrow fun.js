//1.print odd numbers in an array
var odd=(a)=>{
    for(var i=0;i<a.length;i++)
    {
        if(a[i]%2!=0)
        {
            console.log(a[i]);
        }
    }
}
odd([1,2,3,4,5])

//2.convert all the strings to title caps in an string array
var caps=(str)=>
{
    str.split("");
    var b=[];
    for(var i=0;i<str.length;i++)
    {
    var a=str[i].toUpperCase();
    b.push(a)
    }
    console.log(b.join(" "));
    return caps;
}  
caps("malar") 

//3.Sum of all number in an array
var sum=(a)=>
{
    var b=0;
    for(var i=0;i<a.length;i++)
    {
        b=b+a[i];
    }
    console.log(b);
}
sum([1,2,3])

//4.Return all the prime numbers in an array
var prime=(a)=>
{
    let count;
    var b=[];
    for(var i=0;i<a.length;i++)
    {
        count=0;
        for(var j=1;j<a.length;j++)
      {
        if(a[i]%j==0)
        {
          count++;
        }
      }   
      if(count==2)
          {
           b.push(a[i]);
          }
         
      
    }
    console.log(b);
}
prime([1,2,3,4,5,6,7,8,9])

//5.Return all the palindrome in an array

var isPalindrome=(str)=> 
{

    var b=[];
      for(var i=0;i<str.length;i++)
      
      {
      var a=str[i];
      var rev=a.split("").reverse().join(""); 
        if(rev == a){ 
          b.push(a);
      } 
        
      }
      console.log(b);
  }
  isPalindrome(["amma","appa","aunty"])

