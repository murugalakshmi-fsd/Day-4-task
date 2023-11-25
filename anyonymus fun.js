//1.print odd numbers in an array
 var odd = function(a)
{
    for(var i=0;i<a.length;i++)
    {
    if(a[i]%2!=0){
        console.log(a[i])   
        }
        }
            return odd
}
odd([1,2,3,4,5]) 
//2.convert all the strings to title caps in an string array
var caps=function(str)
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
var sum=function(a)
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
var prime=function(a)
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
    return prime
        
}

prime([1,2,3,4,5,6,7,8,9])

//5.Return all the palindrome in an array

var isPalindrome=function(str) {
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
    return isPalindrome
}
isPalindrome(["amma","appa","aunty"])

 // 6.Return median of two sorted arrays of the same size.
 getMedian=function(ar1, ar2, n)
 {
     var i = 0; 
     var j = 0; 
     var count;
     var m1 = -1, m2 = -1;
     for (count = 0; count <= n; count++)
     {
       if (i == n)
         {
             m1 = m2;
             m2 = ar2[0];
             break;
         }
         else if (j == n)
         {
             m1 = m2;
             m2 = ar1[0];
             break;
         }
         if (ar1[i] <= ar2[j])
         {
             m1 = m2; 
             m2 = ar1[i];
             i++;
         }
         else
         {
             m1 = m2; 
             m2 = ar2[j];
             j++;
         }
     }
  
     return (m1 + m2)/2;
 }
 var ar1 = [1, 12, 15, 26, 38];
 var ar2 = [2, 13, 17, 30, 45];
 var n1 = ar1.length;
 var n2 = ar2.length;
 if (n1 == n2)
     console.log("Median is "+ getMedian(ar1, ar2, n1));
 else
     console.log("Doesn't work for arrays of unequal size");

//7.Remove duplicates from an array

     var removeDuplicates=function(arr) {
        let unique = [];
        for (var i = 0; i < arr.length; i++) {
            if (unique.indexOf(arr[i]) === -1) {
                unique.push(arr[i]);
            }
        }
        return unique;
    }
    console.log(removeDuplicates(["apple", "mango","apple", "orange", "mango", "mango"]));

    //8.Rotate an array by k times
    var solution=function(A, K) {
        if (A.length === K || K === 0) {
            return A;
        }
    
        K = K % A.length;
        
        for (let i = 0; i < K; i++) {
            A.unshift(A.pop());
        }
    
        return A;
    }
    console.log(solution([1,2,3,4],2));