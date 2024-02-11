// let titleName=" el zero ",titleDescription="elzero web school",titleDate="25/10";
// let markUp=`
// <div class="card">
// <h2>${titleName}</h2>
// <p>${titleDescription}</p>
// <span>${titleDate}</span>
// </div>
// `; 

// document.write(markUp);


// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.min(a,b,c,d));
// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(parseInt(d));
// console.log(d.toFixed(2));
// let namef ="  ahmed  ";
// console.log(namef.charAt(4).toUpperCase());


// let my  = ["Ahmed",  "Mazero", "Elham", "Osama", "Gamal", "Ameer"];


// console.log(my.slice(0,4).reverse()); //  ["Osama",  "Elham",  "Mazero",  "Ahmed"]

// console.log(my.slice(1,3).reverse()); // ["Elham", . "Mazero"]
// my[1]=["elzero"];
// console.log(my[1]); //"Elzero"

// console. log(); //"rO"



// let myAdmins=["ahmed","osama","sayed","stop","samera"];
// let myEmp=["amged","sameh","ameer","omar","othman","amany","samia"];
// let i=0;
// let j=0;
// document.write(`<div>we have ${myAdmins.length} admins</div>`);

// while(true){
//     if(myAdmins[i]=="stop"){
//     document.write(`<div>we have ${i} admins</div>`);
//     break;
//     }
// i++;
// }

// while (j<myAdmins.length){

//     document.write(`<h1>the admin of team ${j+1} is ${myAdmins[j]} </h1>`)
//     let firstletter=myAdmins[j][0];
//     for (let k=0;k<myEmp.length;k++)
//     {
//         if(myEmp[k][0]==firstletter){
//             document.write(`<h3> ${myEmp[k]}</h3>`);
//         }
//     }
//     j++;

// }

// function showDetails(a,b,c){
//     let age=0;
//     let result="unknown";
//     let fname="unknown";

//     if (typeof a === 'string' && a!= "yes" && a!="no"){
//         fname=a;
//     } else if (typeof b === 'string' && b!= "yes" && b!="no"){
//         fname =b;
//     } else if (typeof c === 'string' && c!= "yes" && c!="no"){
//         fname =c;
//     }
//     if (typeof a==="number"){
//         age=a;
//     } else if (typeof b=== "number"){
//         age =b;
//     } else if (typeof c=== "number"){
//         age =c;
//     }
//     if (a === "yes" || a === "no") {
//         result = a === "yes" ? "HIRED" : "not HIRED";
//     } else if (b === "yes" || b === "no") {
//         result = b === "yes" ? "HIRED" : "not HIRED";
//     } else if (c === "yes" || c === "no") {
//         result = c === "yes" ? "HIRED" : "not HIRED";
//     }
//     document.write(`hello ${fname} , your age is ${age}, you are ${result}`);
// }
// showDetails("ingy",23,"yes");
// showDetails("yes",23,"ingy");

// let names=(...names)=> `[${names.join(",")}] => Done !`;
// document.write(names("ahmed","omar","alaa"));


// let myNum = [20,50,10,60];

// let calc = (one, two, ...nums)=>one+two+nums[0];

// document.write(calc(10,myNum[0],myNum[1]));

let mix="A13BS2ZX";

let filtered = mix.split("").filter(function(el){
    return isNaN(el)? "":el;
});

console.log(filtered);

let mult = filtered.map(function(el){
    return el*el;
});

console.log(mult);