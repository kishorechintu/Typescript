let msg:string="Hai Myname is Kishore";
let len:number=msg.length;

for(var i=0;i<len;i++)
{
    let first:string=msg.charAt(i);
    for(var j=i+1;j<len;j++)
    {
        let second:string=msg.charAt(j);
        if(first===second)
        {   
            if(first&&second!=" ")
            {
            console.log("Found At="+i+"  And  "+j+" "+second);
            }
        }
    }

   
}