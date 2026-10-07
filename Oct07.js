
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
let people = [{name:"Themba",age:24,residence:"Zone 12"}, 
    {name:"Petro",age:27,residence:"Boitumelo"},
    {name:"Smanga", age:24, residence:"Evaton Central"}
];
let [themba, , smanga] = people; 
let {name, residence} = themba;
console.log(`My name is ${name}, and I live in ${residence}\n\n\n`);

const totalAmount = (price, quantity) => {
    return price * quantity;
}
console.log(totalAmount(12,2));


const product = {name:"Ford",model:"Fiesta",
    price:150000,quantity:1, year:2021};

const productDetails = (product_) => {
    const {name, model, price, year} = product_;
    console.log(`\n\nThe product is a ${name} ${model} from ${year}, selling for R ${price}.\n\n`);
}
productDetails(product);


const productsArray = [{type:"cellphone",name:"Samsung",model:"Galaxy",
    price:1500,quantity:1, year:2025}, {type: "laptop",name:"HP",model:"Pavillion",
    price:15000,quantity:1, year:2021}];
const allProductsDetails = (products) => {
    products.forEach(prod => {
        const {type, name, model, price, year} = prod;
        console.log(`\n\nThe product is a ${type}, named ${name} ${model} from ${year}, selling for R ${price}.\n`);
    })
}
allProductsDetails(productsArray);


// let sortArrayInAscending = (numbers) => {
//     let i = 1;
//     for (i; i <= numbers.length; i++){
//         let currentNum = numbers[i];
//         let j = i-1;
//         while (j >= 0){
//             console.log("Current Number: "+currentNum);
//             console.log("COmpared to "+numbers[j]);
//             if (numbers[i] < numbers[j]){
//                 numbers[i] = numbers[j];
//                 numbers[j] = currentNum;
//             }
//             j--;
//         }
//     }
//     return numbers;
// }
//
// console.log(sortArrayInAscending([5,43,6,8,0,7,4,1,2,23]));