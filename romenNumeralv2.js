"use strict";

var numberToConvert;
var myNumberArray;

function inputCheck(userInputNumber)
{
	var x = parseInt(userInputNumber);
	console.log(x);
	if(isNaN(x))
	{
		userInput();
	}
	else
	{
		return x;
	}
}

function makeNumberArray(stringNumber)
{
	var numberArray;
	var x;
	numberArray=stringNumber.split('');
	while(x=0,x<numberArray.length-1,x++)
	{
		numberArray[x]=Number(numberArray[x]);
		console.log(numberArray[x]);
	}
	
	return numberArray;
}

function userInput()
{
	var number;
	var numberArray;
	number = prompt ("enter the number you want to convert");
    inputCheck(number)
    return number;
}



function convertToRomenNumeral(numberArray)
{
	var myArrayLength;
	var numberFormat;
	var romanFormat;
	var spotInArray;
	var romanFormatArray=[];
	var romanArrayCounter;
	var IntToRomenTranslationKey;
	romanArrayCounter=0;
	spotInArray=0;
	myArrayLength=numberArray.length;
	IntToRomenTranslationKey={1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",10:"X",20:"XX",30:"XXX",40:"XL",50:"L",60:"LX",70:"LXX",80:"LXX",90:"XC",100:"C",200:"CC",300:"CCC",400:"CD",500:"D",600:"DC",700:"DCC",800:"DCCC",900:"CM",1000:"M"};
    //console.log(IntToRomenTranslationKey.100);
	//numberFormat= ["1","2","3","4","5","6","7","8","9","10","20","30","40","50","60","70","80","90","100","200","300","400","500","600","700","800","900"];
    //romanFormat = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    console.log(numberArray);
    while(spotInArray<myArrayLength)//make into for loop
    {
        numberArray[spotInArray]=numberArray[spotInArray]*(Math.pow(10,numberArray.length-(spotInArray+1)));
        spotInArray++;
        console.log(numberArray);
    }
    for(var x=0;x<myArrayLength;x++)
    {
    	romanFormatArray[x]=IntToRomenTranslationKey[numberArray[x]];//numberFormat.indexOf(numberArray[x]);
    	console.log(romanFormatArray);
    }
}

numberToConvert=userInput();
myNumberArray=makeNumberArray(numberToConvert);
convertToRomenNumeral(myNumberArray);
