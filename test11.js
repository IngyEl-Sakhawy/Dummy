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



function showDetails(a,b,c){
    let age=0;
    let result="unknown";
    let fname="unknown";

    if (typeof a === 'string' && a!= "yes" && a!="no"){
        fname=a;
    } else if (typeof b === 'string' && b!= "yes" && b!="no"){
        fname =b;
    } else if (typeof c === 'string' && c!= "yes" && c!="no"){
        fname =c;
    }
    if (typeof a==="number"){
        age=a;
    } else if (typeof b=== "number"){
        age =b;
    } else if (typeof c=== "number"){
        age =c;
    }
    if (a== "yes" || a== "no"){
        if (a=="yes"){
            result="HIRED";
        } else {
            result="not HIRED";
        }
        
    } else if (b== "yes" || b== "no"){
        if (b=="yes"){
            result="HIRED";
        } else {
            result="not HIRED";
        }

    } else if (c== "yes" || c== "no"){
        if (c=="yes"){
            result="HIRED";
        } else {
            result="not HIRED";
        }
    }

    document.write(`hello ${fname} , your age is ${age}, you are ${result}`);
}





showDetails("ingy",23,"yes");
showDetails("no",23,"ingy");
