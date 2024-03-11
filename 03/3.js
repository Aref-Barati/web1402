let fs =require('fs')
let arvg= process.argv;
let data = arvg[3]

fs.appendFile(arvg[2],data,function(err){
    if(err) throw err
    console.log("its done")
})
