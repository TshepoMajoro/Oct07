
/*
A group of siblings have age gaps that form a pattern of increments of 3 between each other.
Determine the number of siblings who are of age / adult.
 */

let siblingAges = [];

for (let n = 5; n <= 35; n+=3){
    siblingAges.unshift(n); //Compiles a list of sibling ages in descending order.
}

console.log(siblingAges,"complete list of sibling ages.\n");

let notOfAge = [];
for (let m = 0; m <= 17; m++){
    notOfAge.push(m); //Compiles a list of ages under 18
}

console.log(notOfAge,"complete list of ages under 18.\n");

let totalSiblings = siblingAges.length;
console.log(`There are ${totalSiblings} siblings in total.`);
let totalNotOfAgeSiblings = 0;

// notOfAge.forEach(num => {
//     if (siblingAges.includes(num)){
//         totalNotOfAgeSiblings += 1; //A count of the number of siblings who are under aged.
//     }
// })

for (let o = 0; o < notOfAge.length; o++){
    if (siblingAges.includes(notOfAge[o])){
        totalNotOfAgeSiblings += 1;
    }
}

console.log(`${totalNotOfAgeSiblings} of them are not of age.`);
let totalOfAgeSiblings = totalSiblings - totalNotOfAgeSiblings;
console.log(`And ${totalOfAgeSiblings} of them are adult.\n`)

//Suppose that the eldest sibling is a complete doofus who earned themselves a Darwin Award
siblingAges.shift()
console.log(siblingAges,"what remains after the eldest sibling is removed from the gene pool.\n");

console.log("We are joining buddy!!!");
console.log(siblingAges.join("\n"));

// console.log("Practical example!!!!");
// let exampleArray = [["Tshepo","Majoro","tshepomajoro001@gmail.com"],["Andile","Andy","andy@gmail.com"]];
// console.log(exampleArray.join("\n"));

