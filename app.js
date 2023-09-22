//! Chapter 17-20

//! Question No. 01
//? var emptyarray;

//! Question No. 02
//? emptyarray = [[],[]];

//! Question No. 03
//? var mdarray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
//? for(var i = 0; i < mdarray.length; i++){
//?     document.write(mdarray[i]+"<br>");
//? }

//! Question No. 04
//? for(var i = 0; i <= 10; i++){
//?     document.write(i+"<br>");
//? }

//? var number  = +prompt("Enter a number to show its multiplication table : ");
//? var length = +prompt("Enter the length of the multiplication table : ");
//? for(var i = 1; i <= length; i++){
//?     var table  = i * number;
//?     document.write("<br>"+number+" "+"x"+" "+i+" "+"="+" "+table+"<br>");
//? }

//! Question No. 05
//? var fruits = ["apple","Banana","mango","Orange","Strawberry"];
//? for(var i = 0; i < fruits.length; i++){
//?     document.write(fruits[i]+"<br>");
//? }
//? document.write("<br>Element at index 0 is apple");
//? document.write("<br>Element at index 1 is Banana");
//? document.write("<br>Element at index 2 is Mango");
//? document.write("<br>Element at index 3 is Orange");
//? document.write("<br>Element at index 4 is Strawberry");

//! Question No. 06
//? for(var i = 0; i <= 15; i++){
//?     document.write(i+" "+","+"");
//? }

//? for(var m = 10; m >= 0 ; m--){
//?     document.write(m+" "+ ","+" ");
//? }
//?  for(var t = 0; t <= 20; t++){
//?     if(t % 2 == 0){
//?         document.write(t+" "+ ","+" ");
//?     }
//?  }

//? for(var t = 0; t <= 20; t++){
//?     if(t % 2 != 0){
//?         document.write(t+" "+ ","+" ");
//?     }
//?  }

//? var a = [2,4,6,8,10,12,14,16,18,20];
//? var b = ["k"];
//? var c = [];
//? for(var i = 0; i<= a.length; i++){
//? document.write(a[i]);    
//? }
//? for(var j = 0; j <= b.length; j++){
//?     document.write(b[j]);
//? }
//? c = a[i]+b[j];
//? document.write(c);
//? document.write(c);

//! Question No. 07
//? var input = prompt("Welcome to Mustafa bakery ! What do you wat to order sir / ma'am : ");
//? var a = ["cake","apple pie","cookie","chips","patties"];
//? var array = input.toLowerCase();
//? for(var m = 0; m <= a.length; m++){
//?     if(a[m] == input){
//?         document.write(input+" "+"is available in our bakery");
//?     }
//?     else{
//?         document.write("We are sorry ! "+" "+input+" "+"is not available in our bakery");
//?     break;
//?     }
//? }

//! Question No. 08
//? var a = [24, 53, 78, 91, 12];
//? var min = Math.min(...a);
//? document.write("<br>"+" "+"The minimum value in the array is "+min);

//! Question No. 09
//? var a = [24, 53, 78, 91, 12];
//? var max = Math.max(...a);
//? document.write("<br>"+" "+"The Maximum value in the array is "+max);

//! Question No. 10
//? for(var y = 1; y <= 100; y++){
//?  if(y % 5 == 0){
//?     document.write(y+" "+ ","+" ");
//?      }
//? }  

//! Chapter No. 17-20 Completed

//! Chapter No. 21-25

//! Question No. 01

//? var firstInput = prompt("Enter the First name : ");
//? var secondName = prompt("Enter the last Name : ")
//? document.write("Welcome !" , firstInput + secondName)

//! Question No. 02

//? var mobileModel = prompt("Enter your favourite Mobile Model : ")
//? document.write("My Favourite Phone is : " , mobileModel , "<br/>")
//? document.write("Length of the String : " , mobileModel.length)

//! Question No. 03

//? var wordToFind = "Pakistani"
//? document.write("The index of word N is : " , wordToFind.indexOf('n'))

//! Question No. 04

//? var wordToFind = "Hello World"
//? document.write("The last index of world L is : " , wordToFind.lastIndexOf('l'))

//! Question No. 05

//? var wordToFind = "Pakistani"
//? document.write("The Character at index 3 is : " , wordToFind.charAt(3))

//! Question No. 06

//? var firstInput = prompt("Enter the First name : ");
//? var secondName = prompt("Enter the last Name : ")
//? document.write("Welcome ! " , firstInput.concat(secondName))

//! Question No. 07

//? var name = "Hyderabad";
//? var change = name.replace("Hyder", "Islam");
//? document.write(change);

//! Question No. 08

//? var message = "Ali and Sami are best friends. They play cricket and football together";
//? var replace = message.replace(/and/g, "&");
//? document.write(replace);

//! Question No. 09

//? var string = "472";
//? document.write("The type of value is : "+typeof(string))
//? var number = parseInt(string);
//? document.write("The type of value is : "+typeof(number));

//? Question No. 10

//? var input = prompt("Enter any sentence that you want : ");
//? var capital = input.toUpperCase();
//? document.write(input);
//? document.write(capital);

//! Question No. 11

//? var input = prompt("Enter any sentence that you want : ");
//? var capitalize = input.capitalize();
//? document.write(input);
//? document.write(capitalize);

//! Question No. 12

//? var num = 35.36;
//? var string = num.toString();
//? document.write("The type of value is : "+typeof(string));
//? var one = string.slice(0,2);
//? var two = string.slice(3,5);
//? var final = one + two;
//? document.write("<br>"+final);


//! Question No. 13

//? var input = prompt("Enter the name that you want to enter : ");
//? for(var i = 0; i <= input.length; i++){
//?     var text = input.slice(i, i+1)
//?         if(text == "@" || text == "." || text == "!"){
//?             alert("Please enter a valid username ! ");
//?        }    
//? }

//! Question No. 14

//? var input = prompt("Welcome to Mustafa bakery ! What do you wat to order sir / ma'am : ");
//? var a = ["cake","apple pie","cookie","chips","patties"];
//? var array = input.toLowerCase();
//? for(var m = 0; m <= a.length; m++){
//?     if(a[m] == input){
//?         document.write(input+" "+"is available in our bakery");
//?     }
//?     else{
//?         document.write("We are sorry ! "+" "+input+" "+"is not available in our bakery");
//?     break;
//?     }
//? }

//! Question No. 16

//? var university = "University of Karachi";
//? var string = university.split(" ")
//? for (var i = 0; i <= university.length; i++){
//?         console.log(university[i])
//?     }

//! Question No. 17

//? var input = prompt("Enter any sentence : ");
//? var slice = input.slice(-1);
//? document.write("The last Character that you have entered is : "+slice);

//! Question No. 18

//? var st = "The quick brown fox jumps over the lazy dog";
//? var string = st.toLowerCase();
//? var count = string.split("the").length-1;
//? alert(count);   

//! Chapter No. 21 - 25 Completed