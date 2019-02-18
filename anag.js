//function to split the string
function splitstring(str)
{
    var a=[];
    strl1=str.length;
    for(var i=0;i<=strl1;i++)
    {
        a[i]=str.charAt(i);
    }
    return a;
}

//function to check equality of both of the final string
function anag(s1,s2)
{
    var str1=s1.toLowerCase();
    var str2=s2.toLowerCase();
    var final1=join(sort(splitstring(str1)));
    var final2=join(sort(splitstring(str2)));
    if(final1==final2)
    {
        console.log(true);
    }
    else{
        console.log(false); 
    }
}
//function to join the split characters of the string
function join(a)
{
    var l=a.length;
    var t="";
    for(var i=0;i<l;i++)
    {
        t+=a[i];
    }
    return t;
}
//function to sort the split characters
function sort(a)
{
    var temp = 0,i,j;  
    var l=a.length;
    for(i = 0; i < l-1; i++){  
        for (j = i+1; j < l; j++){  
        if(a[i] > a[j]) {  
            temp = a[i];  
            a[i] = a[j];  
            a[j] = temp;         
            }  
        }
     }
        return a;
    }     
anag('recall','cellar');//calling of anag function