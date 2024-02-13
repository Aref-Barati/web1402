// console.log("inputs",process.argv);
let lenth=[];
let end = [];

process.argv.forEach(function(val,index){
    lenth[index]=val
}

    
);
let add = 0
for (let index = 2; index < lenth.length; index++) {
   end[add]=lenth[index]
    add++
}
console.log(end)
// console.log(lenth)
// console.log(lenth);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }