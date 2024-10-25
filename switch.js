//switch case
var userInput=prompt("pls choose a weeek")
switch(userInput){
    case "sunday":
        console.log("holiday")
        break;
        case "monday":
        console.log("js intro")
        break;
        case "tuesday":
        console.log("js intro-2")
        break;
        case "wednesday":
        console.log("js variables")
        break;
        case "thursday":
        console.log("js strings")
        break;
        case "friday":
        console.log("js arrays")
        break;
        case "saturday":
        console.log("js ojects")
        break;
        default:
            console("please choose one day")
    
}
//for of
var a=[1,2,3,4,5];
var totalsum=0
for(var sum of a){
   totalsum=totalsum+sum
}
console.log(totalsum)


//string
var a="ravi"
var result=""
for(var char of a){
    result += char
    console.log(char)
}