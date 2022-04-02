// Q1
// var arrayName = [];
// Q2
// var arr = new Array()
// Q5
// var arr =[ "string array"];
// Q4
// var arr =[ 17 ]; 
// Q5
// var arr =[ true , false];
// // Q6
// var arr =[ "Junaid" ,25 , true];
// document.write(arr );
//Q7
// var arr =["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write("  <h1> Qualification </h1>  </br>")
// for(var i =0 ; i<arr.length ; i++){
//     document.write( i+1 + ")" , arr[i] +"</br>");
// }
//Q8
// var stdName = ["jaffar", "talha", "yousuf"];
// var stdScore = [320, 230, 480];

// var per1 = (stdScore[0] / 500) * 100;
// var per2 = (stdScore[1] / 500) * 100;
// var per3 = (stdScore[2] / 500) * 100;

// document.write(" score of " + "  "+  stdName[0] + "  is  " + stdScore[0] + " per: " + per1 + " </br>"  );
// document.write(" score of  "+ "  "+  stdName[1] + "  is  " + stdScore[1] + " per: " + per2 + " </br>" );
// document.write(" score of  "+ "  "+  stdName[2] + "  is  " + stdScore[2] + " per: " + per3 + " </br>" );
 

// or
// Q8
// var students = ['Michael' , 'John' , 'Tony']
// var totalMark = [320 , 230 , 480]
// var per1 = (totalMark[0]/500)*100
// var per2 = (totalMark[1]/500)*100
// var per3 = (totalMark[2]/500)*100
// var perr = [per1 , per2 , per3]

// for(var i = 0 ; i < students.length ; i++){
//     document.write('Score of ' + students[i] + ' is ' + totalMark[i] + '.' + ' Percentage is: ' + perr[i])
// }
//Q9
// var colorName =["  red  " , "  green  ", "  blue  "];
// document.write(colorName+ " </br>");
// var userColor =prompt("what color you wants to add to the beginning ");
// colorName.unshift(userColor);
// document.write(colorName);
// var colorName =["  red  " , "  green  ", "  blue  "];
// document.write(colorName+ " </br>");
// var userColor =prompt("what color you wants to end to the beginning ");
// colorName.push(userColor);
// document.write(colorName);
// var colorName =["  red  " , "  green  ", "  blue  "];
// document.write(colorName+ " </br>");
// var userColor =prompt("what color you wants to add to the beginning  color 1 ");
// var userColornew =prompt("what color you wants to add to the beginning  color 2");
// colorName.unshift(userColor);
// colorName.unshift(userColornew);
// document.write(colorName ,  userColornew);


// var colorName =["  red  " , "  green  ", "  blue  "];
// colorName.pop();
// document.write(colorName+ " </br>");

// var colorName =["  red  " , "  green  ", "  blue  "];
// colorName.shift();
// document.write(colorName+ " </br>");

// var colorName =["  red  " , "  green  ", "  blue  "];
// var userColor =prompt("what color you wants  ");
// var numPosition =+prompt("enter  index number ")
// colorName.splice(numPosition,0, userColor );
// document.write(colorName+ " </br>");
// console.log(colorName);
// var colorName =["  red  " , "  green  ", "  blue  ", "  purple  ", "  black  ", "  White  "];
// document.write(colorName+ " </br>");
// var startPosition =+prompt("enter start point index ");
// var numPosition =+prompt("enter num of delete index ");
// colorName.splice(startPosition,numPosition);
// document.write(colorName);

//Q10
// var scoreOfstudent =[320  , 230 , 480 , 120 ];
// document.write( "Scores Of Student  " +  scoreOfstudent + " </br>");
// scoreOfstudent.sort();
// document.write( "Ordered Scores Of Student  " + scoreOfstudent + " </br>");

//Q11
// var cities = [" Karachi " ," Lahore ", " Islamabad ", " Quetta "," Peshawar "];
// document.write(" <h1>Cities List   </br></h1>");
// document.write(cities + " </br>"); 
// document.write(" <h1>Selected cities List   </br></h1>");
// var aryCopy = cities.slice(2,4);
// document.write(aryCopy);
//Q12
// var arr = [" This " ,  " is ",   " my ", " cat "]
// document.write("<h1>ARRAY </br></h1> " + arr.join());
// document.write("<h1>String </br></h1> " + arr.join(''));
//Q13
// var n = prompt("enter number of index")
// var arr = []
// for(var i = 0; i < n; i++){
//     arr.push(prompt("enter element"))
// }
// for(var i = 0; i < n; i++){
//     document.write('Out:')
//     document.write(arr[i]+"</br>")
// }
// Q14

// var n = prompt("enter number of index")
// var arr = []
// for(var i = 0; i < n; i++){
//     arr.push(prompt("enter element"))
// }
// for(var i = arr.length-1 ; i >= 0; i--){
//     document.write('Out:')
//     document.write(arr[i]+"</br>")
// }    Q15
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// for(var i = 0 ; i < phone ; i++){
   
//     console.log('Score of ' + phone[i])
// }


////////////////////CHAPTER ARRAYS AND LOOPS///////////////////////////
//Q1
// var arr = [
//   [,],
//   [, ],
//   [, , , ],
// ];
// console.log(arr)

// //Q2
// var arr = [
//   [0,1, 2,3],
//   [1,0,1, 2],
//   [2, 1, 0, 1],
// ];

// for (var row = 0; row < arr.length; row++) {
//   for (var col = 0; col < arr[row].length; col++) {
//     console.log(arr[row][col]);
//   }
//}
//Q3
// for(var i=1 ; i<=10; i++){
//     document.write(i +"</br>");
// }
//Q4
// var num =+prompt("enter table to be print");
// var length =+prompt("enter length of table");
// for(var len=1 ; len<=length ;len++){
//     document.write(num +" * "  + len + " = "+ num * len + "</br>"  )
// }
//Q5
//  var fruits =  ["apple", "banana", "mango", "orange", "strawberry"];
//  for(var i=0 ; i<fruits.length ; i++)
//  {
//      document.write(fruits[i] + "</br>");
//  }

// for(var i=0 ; i<fruits.length ; i++)
//  {
//      document.write("element at index  "  + i + " is " +   fruits[i] + "</br>");
//  }
 //Q6
//  document.write("<h1>Counting</h1>")
//  for(var i=1 ; i<=15 ;i++){
//      document.write( i + " , " )
//  }
//  document.write("<h1>Reverse counting</h1>")
//  for(var i=10 ; i>=1 ;i--){
//      document.write( i + " , " )
//  }
//  document.write("<h1>Even number</h1>")
//  for(var i=0 ; i<=20 ;i+=2){
//      document.write( i + " , " )
//  }
//  document.write("<h1>Odd number</h1>")
//  for(var i=1 ; i<=19 ;i+=2){
//      document.write( i + " , " )
//  }
//  document.write("<h1>Series</h1>")
//  for(var i=2 ; i<=20 ;i+=2){
//      document.write( i+"k" + " , " )
//  }
//Q7
// var  a = ["apple","mango","banana","avacado","orange"];
// var userDesire =prompt("enter fruit name");
// var isMatch = false;

// for (var i = 0; i < a.length; i++) {
//   if (userDesire === a[i]) {
//     alert(userDesire +"  aviable at index  " + i + "  in our mart");
//     isMatch = true;
//     break;
//   }
// }

// if (isMatch === false) {
//   alert("we are sorry " + userDesire + "  is not aviable in our mart  ");
// }
// Q8
// var array = [24, 53, 78, 91, 12]
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }
// document.write("ARRAY item : " array + "</br>");
// document.write("the largest number is " + largest);
// Q9
// var array = [24, 53, 78, 91, 12]
// var smallest= 100000000000000000;

// for (i=0; i<=smallest;i++){
//     if (array[i]<smallest) {
//         var smallest=array[i];
//     }
// }
// document.write("ARRAY item : " + array + "</br>");
// document.write("the largest number is " + smallest);
//Q10
// for(var i=5 ; i<=100 ; i+=5){
//     document.write(i +"  ," )
// }