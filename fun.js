"use strict"

//function declaration
//1
// sum(2,3);
// function sum(x,y,){
//    let d=x+y;
//     console.log("ընդհանուր "+ d);
// }

// 2
// function ShowWritter(a, b) {
//     console.log("Բանաստեղծ " + a + " " + b);
// }

// ShowWritter("Պարույր", "Սևակ");
// ShowWritter("Եղիշե", "Չարենց");
// ShowWritter("Նաիրի", "Զարյան");



//function expression

// const sum= function(a,b){
//     console.log(a+b);
// };
// sum(2,5);

// //arrow function
//  const x= (a,b) => a+b;
//  console.log(x(2,3));

 //

//  let a="";
//   let result = "";
//   for(let i=1;i<=7;i++){
//     for(let j=0;j<=i;j++){
//     result += "*";
//       }  result+="\n";
//      }
//     console.log(result);


    function christmasTree(x) {
        if(x < 3) {
            return "";
        }
        let tree = "";
        for(let i = 1; i <= x; i++) {
            for(let j = 1; j <= x + x - 1; j++) {
                if(j <= x - i || j >= x + i) {
                    tree += " ";
                } else {
                    tree += "*";
                }
            
            }
            tree += "\n";
        }
        return tree;
    };
    console.log(christmasTree(7));

    