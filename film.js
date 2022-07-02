 "use strict";


let numberOfFilms;

const personalMovieDB = { 
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};

function start() {
	numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	if(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < -1) {
	console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
    } else {
      for (let i = 0; i < 1; i++) {
        const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
        const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
        const genres = prompt(`Ձեր նախընտրելի ժանրը`);
        if (!isNaN(b) && a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log("DONE");
        } else {
          console.log("ERROR");
          i--;
        }
    }

};};

function detectUserPersonalLevel () {
	if (numberOfFilms < 5) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms >10 && numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք կինոման եք !!!");
	}
};
function showMyDB() {
	if (personalMovieDB.privat) {
		console.log(personalMovieDB);
	} else {
		console.log("Մեր տվյալների բազան փակ է");
	}
}

start();
detectUserPersonalLevel();
showMyDB();


//   //object 1

  const movie = {
    title: 'Gladiator',
    releaseDate: 'May 1, 2000',
    country: 'United States',
    runningTimeMinutes: 155,
    language: 'English',
    budget: 103000000
  };
  const{title,country} = movie;
  console.log(title,country);

  //2
  const movie = {
  title: 'Gladiator',
  releaseDate: 'May 01, 2000',
  country: 'United States',
  starring: {
    actor: 'Rassell Crowe',
    actress: 'Connie Nielsen'
  },
  runningTimeMinutes: 121,
  language: 'English',
  budget: 11000000
};
let {title, country, budget} = movie;

let {starring} = movie;
console.log(starring);
console.log(`Historical drama -"${title}"`+ `\n country -${country}`);

//3
const driver = {
  
  name: 'Aram',
  age: 42,
  education: {
    degree: 'Masters'
  }
};
const {education: {degree}= {}} =  driver;
console.log(degree);

//4
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};
const {b, d,...rest} = obj;
console.log(b); 
console.log(d); 
console.log(rest);

//5
const a = "Object destructuring";
const obj = {a: 1, b: 2, c: 3};

const {
  a: userName
} = obj;
console.log(a); 
console.log(userName); 

//6
const person = {
  name: 'Karen',
  age: 30,
  job: 'web-developer',
  frieds: ['Arsen', 'Aram', 'Aren', 'Hayk'],
  childList: {
      first: 'Ani',
      second: 'Gay',
      third: 'Kar'
  }
}
const { frieds: [a, b, c,d] } = person; 
console.log(a, b, c,d);

const { childList: { first, second,third } } = person; 
console.log(first, second, third);

// //7
const person = {
  fname: "Robert",
  positon: "sportman",
  salary: '28000$',
  sports: "football",
  slogan: ["Just do it.", "A diamond is forever.", "Do what you can’t."],
  country: {
      first: "US",
      second: "UK"
  }
};
const [a,b,c] = person.slogan;
const {fname,positon,} = person;
const { first,second } = person.country;
console.log(fname + ' is '+positon);
console.log(fname+'-' + a);

//8
function Info({firstName, secondName, profession}) {
	console.log(firstName + ' ' + secondName + ' - ' + profession)
}

var person = {
  firstName: 'John',
  secondName: 'Smith',
  age: 33,
  children: 3,
  profession: 'teacher'
}

Info(person);

//9
const person = {
  name: 'Sara',
  age: 25,
  gender: 'female'    
};

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name,age,gender); 

//10
let person = {name: "Aram", country: "Armenia", job: "Developer"};

let {name, country, job} = person;

console.log(name);
console.log(country);
console.log(job);

//////array 1

let students = ["Աննա", "Վիկա", "Մարիա", "Դավիթ", "Անի", "Արսեն"];
let [first, second, third, ...rest] = students;

console.log(rest) ;
console.log(first,third);

//2
const col= ['one', 'two'];

const [red, yellow, green, blue] = col;
console.log(red,green ); 
console.log(yellow,blue); 

//3
function get() {
  return ["Hello", "I" , "am", "Sarah"];
} 
let [a,...lok] = get();

console.log(a,lok);
console.log(lok);

// //4
var x = 100, y = 200;  
[x, y] = [y, x];  
console.log('x='+x); 
console.log('y='+y);

//5
let arr = [[10,20], [30,40]];
var a,b,c,d;
[[a,b],[c,d]] = arr;
console.log(a,b,c,d);

//6
let chunked = [[1,2,3], [4,5,6], [7,8,9]];
let [[a],[b],[c]]=chunked;
for(let i = 0; i < chunked.length; i++){
  console.log(a,b,c);

console.log(chunked[i])  ;} ??????

    //7
    let hob=[
      ['one'],
      ['two'],
      ['three'],
      ['four'],
      ['five']    
    ];
let[[a],[b],[c],[d]] = hob;
    console.log(a,b,c,d);

//8

   
