//your JS code here. If required.
let result="";
for(let i=1;i<=100;i++)
	{
		if(i%3==0)
		{
			result=result+"Fizz";
		}
		else if(i%5==0)
		{
			result=result+"Buzz";
		}
		else if(i%3==0 && i%5==0)
		{
			result=result+"FizzBuzz";
		}
		else{
			result=result+i;
		}
	}
alert(result);