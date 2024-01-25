//alert('Helloo!')
// console.log(test);
// console.log(test2);
// let test = 'test';//muutuja peab tegelikult eespool calli olema ja let annabki errori
// var test2 = 'test2';//aga var ei anna üteb undefined et tõstab test2 kõige algusesse aga ilma väärtuseta
console.log('Hello');
let num = 1;
const pi = 3.141595;
var num2= 2;

num = 2;
//pi = 4;//ei tööta sest konstant
let text = 'hello world';
text = `hello world 
| and pi is ${pi}`;// saab kasutada ka mitme realiste tekstide esitamiseks
console.log(text);
let bool = true;
bool = false;
console.log(bool);
console.log(typeof pi);
let undef;
console.log(undef);//sama mis null
num = 1/0;//infinity
console.log(num);
num = Math.sqrt(-1);
console.log(num);//NaN
num = 0 * -1; // = -0 aga kui 0 = -0 siis nad on võrdsed
console.log(num);
num = 0.1 + 0.2;//peaks olema 0.3 aga annab 0.30000000004 vm binaarsüsteemiga seotud viga pole ainult js probleem
console.log(num);
let array = [1,2,3,4,5,true,"head"];
array.push("asdasda");
console.log(array);
console.log(array[0]);
let obj = {//võtab vastu võti väärtus asju, saab arraysid ja objecte ka sisse panna
    name:"Tarmo",
    age: 32,
    cats:['nuusik','kratt'],
    aadress: {
        country:'Estonia',
        city:'Tallinn'
    },
    'to-do': 'stuff',
    hello(){
        console.log('hello world');// niimoodi saab funktsiooni objecti sisse kirjutada
    }
};
console.log(obj);
console.log(obj.cats[0]);
console.log(obj['to-do']);// sidekriips ei meeldi objectide sees tuleb nagu stringiks teha
//funktsioonid
let func = function (){
    console.log("hello world!")
};
function func2(){
    console.log("hello world!")
};

let func3 = () => {
    console.log('hello world');
}






