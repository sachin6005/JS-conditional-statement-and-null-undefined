
// Null and Undefined
console.clear()

var num1
var num2 = null
console.log(num1)

console.log(num2)

console.log(typeof(num1))

console.log(typeof(num2))

console.log(typeof(num3))

// conditional statement - if else
var length = 200
var breadth = 200

if (length >= breadth){
  console.log('true')
}
  
else {
  console.log('false')
}

var length1 = 300
var breadth1 = 200

if (length1=='breadth1') {
   console.log('true') 
}
else {
  console.log('false')
}

if (!(length == breadth))
  console.log(true)
else
  console.log(false)

var currentDay = 'sat'
if (currentDay === 'mon')
  console.log('today is monday and class timings 9:00am to 12:00pm')
else if (currentDay === 'tue')
  console.log('today is tuesday and class timings 9:00am to 12:00pm')
else if (currentDay === 'wed')
  console.log('today is wednesday and class timings 9:00am to 12:00pm')
else if (currentDay === 'thur')
  console.log('today is thursday and class timings 9:00am to 12:00pm')
else if (currentDay === 'fri')
  console.log('today is friday and class timings 9:00am to 12:00pm')
else if (currentDay === 'sat')
  console.log('today is saturday and class timings 9:00am to 12:00pm')
else if (currentDay === 'sun')
  console.log('today is sunday and no class')

  // conditional statement- switch
var month = '2'

switch(month){
    case '1' :
    console.log('Month = January')
    console.log('Total no of days = 31')
    break;
     case '2' :
    console.log('Month = February')
    console.log('Total no of days = 28 (\'29\' in case of leap year)')
    break;
     case '3' :
    console.log('Month = March')
    console.log('Total no of days = 31')
    break;
     case '4' :
    console.log('Month = April')
    console.log('Total no of days = 30')
    break;
     case '5' :
    console.log('Month = May')
    console.log('Total no of days = 31')
    break;
     case '6' :
    console.log('Month = June')
    console.log('Total no of days = 30')
    break;
     case '7' :
    console.log('Month = July')
    console.log('Total no of days = 31')
    break;
     case '8' :
    console.log('Month = August')
    console.log('Total no of days = 31')
    break;
     case '9' :
    console.log('Month = September')
    console.log('Total no of days = 30')
    break;
     case '10' :
    console.log('Month = October')
    console.log('Total no of days = 31')
    break;
     case '11' :
    console.log('Month = November')
    console.log('Total no of days = 30')
    break;
     case '12' :
    console.log('Month = December')
    console.log('Total no of days = 31')
    break;
  default:
    console.log('There are only 12months in a year')
    console.log('Total no of days depends on month ')
    break;
}