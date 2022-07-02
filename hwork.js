"use strict"

function calc (a, b, calculator) 
{
    switch (calculator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
         case '%':
            return a % b;
    }
};

console.log(calc(1, 2, '+'));
console.log(calc(5, 2, '-'));
console.log(calc(2, 10, '/'));
console.log(calc(10, 2, '*'));
console.log(calc(7, 2, '%'));

//
// nested loops
// --1--

for (num= 1; num < 4; num++) { 
   
    console.log("num from 1 to 3");
    for (count = 1; count < 4; count++){
        console.log(count);
    }
};

//--2--

let j;
let i;

 while (j!=5){
for(i=1;i<=5;i++){ 
     console.log("while i= " + i );
    for(j=1;j<5;j++){  
       
        console.log("j= "+j);
    }
};};

//--3--
let i = 0;
let j;
while (i<4){
    j = 0;
    while(j<4)
{
    console.log("*"+"*"+"*"+"*");
    j++;

}
i+=4;
}
return 0;

// // Cristmas tree տարբերակ 1

let i = 0,
  j = 0;
let max = 7;
let x = "",
  y = "";

while (i < max) {
  x = "";
  y = "";
  for (j = 0; j < max - i; j++) x += " ";
  for (j = 0; j < 2 * i + 1; j++) y += "*";
  console.log(x + y);
  i++;
}

// //տարբերակ 2

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

//տարբերակ 3
let txt = "";
for(let i=1;i<=7;i++){
  txt = "";
  for(let j=i;j<7;j++){
    txt += " ";
  }
  for(k=0;k<(i*2)-1;k++){
    txt += "*";
  }
  console.log(txt);
}


