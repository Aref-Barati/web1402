let fs =require('fs')
let arvg= process.argv;
let data = arvg[3]
function delet (){

}
function copyerr(err){
    if(err){
        console.log("copy eroro :  ",err)
    }
    else{
        console.log("copy ")
    }

    
}
fs.copyFile(process.argv[2],process.argv[3],copyerr)