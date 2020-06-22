
// var name="levani";

// function logName(nameParam,surName) {

//     // console.log("levani");
//     console.log("your name is:", nameParam);
//     console.log("your surname is:", surName);
// }


// logName(name,"dolidze");



// var number=5;
// var number1=10;

// function sum(num,num1){
    
//     console.log(num+num1);
// }
// sum(number,number1);
// sum(2,5);
// sum("levani","dolidze");




// var name="levan";
// var surName="dolidze";
// var space=" ";

// function fullname(name,surName,space){
    
//     console.log(name+surName+space);
// }
// fullname(name,space,surName)




// function add(num1, num2){
//     var sum = num1 + num2;
//     return sum;
// }
// var sum = add(1,4);
// console.log(sum);

// // var array =["bmw","benz","audi"]
// // {
// //     var bmw= "black";
// //     var benz= "white";
// //     var audi= "brown";
// // }
// // console.log(array);

// function car  (bmw,benz,audi){
// var array =[bmw,benz,audi];
// return array;
// }

// var array = car (1,2,"blackk");
// console.log("colors in stock are:", array);


// function multi(num1,num2){
//     var operationObj={
//         sum: num1+num2,
//         difference:num1-num2,
//         product: num1*num2,
//         division:num1/num2
//     };
//     console.log(operationObj);
// }
// multi(2,3)


// var name ="levani";


// function logName(nameParam,surNameParam) {
//     // console.log("levani");
//     console.log(nameParam);
//     console.log(surNameParam)
// }

// logName(name,"rogor xar?");



// function sum (one,two,three) {

//     console.log(one-two+three);
    

// }
// sum(1,5,3);


//დავალება:
// საშუალო არითმეტიკული 1

function add(num1,num2,num3){
    var operation =(num1+num2+num3)/add.length;
    return operation;
}
var result =add(10,20,30);
console.log(result);

// საშუალო არითმეტიკული 2
var sum ;

function add1(num4,num5,num6){

    sum =(num4+num5+num6)/add.length;
}
add1(10,20,30)
console.log(sum);


// საშუალო არითმეტიკული 3
const avarageArray=[10,10,10,10,10,10];
var avarageArrayNum=0;
for(var i=0;i<avarageArray.length;i++)
{
    avarageArrayNum+=avarageArray[i] /avarageArray.length
}

console.log(avarageArrayNum);


// დაწერეთ ფუნქცია, რომელსაც გადაეცემა 3 სტრინგი, უკან კი აბრუნებს ამავე სტრინგების მასივს.
function house (vake,vera,saburtalo){
    var array=[vake,vera,saburtalo]
    return array;
}

var array=house("eka ","sofo ","nodari");
console.log("managers: ", array);


// დაწერეთ ფუნქცია, რომელსაც გადაეცემა სტრინგი და რიცხვი, ხოლო უკან დააბრუნებს ობიექტს, რომელსაც ექნება 2 property - string და number
// ხოლო მნიშვნელობები მინიჭებული ექნება ფუნქციაში გადაცემული მნიშვნელობებით.


function car(bmw,number){
    
var obj={
    bmw: bmw,
    number: number
};
return obj;
};

var obj = car ("z4",20);
console.log(obj);


// 1) გამოაცხადეთ 4 გლობალური ცვლადი. name - string, age - number, favoriteColor - string, userInfo - object. 
// შექმენით 3 განსხვავებული ფუნქცია, რომელშიც user-ს შეაყვანინებთ 
// name-ს, age-ს და favoriteColor-ს და შემდგომ შევასებთ ამ ცვლადებს user-ის მიერ შეყვანილი მნიშვნელობებით. იმის შემდგომ, რაც
// სამივე მნიშვნელობა გექნებათ, დაწერეთ ფუნქცია, რომელიც userInfo-ს შეუვსებს 3 property-ს ამ ცვლადების მნიშვნელობებით და გამოიტანს 3
// სხვადასხვა პარაგრაპში HTML-ში.




function mindata() {
var  usName = document.getElementById("userName").value;
var  usAge= document.getElementById("userAge").value;
var  usColor= document.getElementById("favColor").value;

document.write("hello ",usName," your age is: " + usAge," favorite color is: ", usColor);

};




