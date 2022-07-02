"use strict";

// const car = {
//     name: "BMW",
//     model : "E46",
//     year : 2004,
//     eng : 2.8,
//     engType: {
//       name: "M",
//       type: "Dubl Vanos",
//       fuelType: "petrol"
//     },
//     runCar(km, speed){
//       const hour = km / speed;
//       const minute = km/speed * 60;
//       const second = km / speed * 3600;
//       return `
//       ${km} kilometr ${speed} Aragutyamb ancel e hetevyal
//       JAM: ${hour}
//       ROPE: ${minute}
//       VARKYAN: ${second} 
      
//       `;
//     }
// };
// console.log(car.runCar(5,100))


var a= SummPositive( [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10,-52 ] );
function SummPositive( numbers ) {
    var negatives = [];
    for(var i = 0; i < numbers.length; i++) {
      if(numbers[i] < 0) {
        negatives.push(numbers[i]);
      }
    }
    console.log(negatives);
  }
  