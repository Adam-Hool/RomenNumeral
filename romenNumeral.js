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
	var romanFormatArray;
	var romanArrayCounter;
	romanArrayCounter=0;
	spotInArray=0;
	myArrayLength=numberArray.length;

	numberFormat= ["1","2","3","4","5","6","7","8","9","10","20","30","40","50","60","70","80","90","100","200","300","400","500","600","700","800","900"];
    romanFormat = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    console.log(numberArray);
    while(spotInArray<myArrayLength-1)
    {
    	console.log(numberArray.length-spotInArray);
        numberArray[spotInArray]=numberArray[spotInArray]*(Math.pow(10,numberArray.length-(spotInArray+1)));

        spotInArray++;
    }
    console.log(numberArray);
    while(romanArrayCounter<numberArray.length)
    {

    	romanFormatArray[romanArrayCounter]=numberFormat.indexOf(numberArray[romanArrayCounter])
    	console.log(romanFormatArray[romanArrayCounter]);
    }

    //numberFormat.indexOf(number)
}

numberToConvert=userInput();
myNumberArray=makeNumberArray(numberToConvert);
convertToRomenNumeral(myNumberArray);
