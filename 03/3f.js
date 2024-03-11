const { create } = require('domain');
let fs =require('fs')
let arvg= process.argv;
if (arvg[2]=='create') {
    fs.writeFile(arvg[3],arvg[4],function(err){
        if(err) throw err
        console.log("its done")
    })
}
else if (arvg[2]=='append') {
    fs.appendFile(arvg[3],arvg[4],function(err){
        if(err) throw err
        console.log("its done")
    })
}
else if (arvg[2]=='delete') {
    function unlinkcallback(err){
        if(err){
            if(err.code==='EPERM'){
                fs.rmdir(process.argv[3],delet)
    
            }
            else{
                console.log("eror : ",err)
            }
            
        }
        else{
            console.log("deleted ")
        }
    
        
    }
    fs.unlink(process.argv[3],unlinkcallback)
}
else if (arvg[3]=='copy') {
    function copyerr(err){
        if(err){
            console.log("copy eroro :  ",err)
        }
        else{
            console.log("copy ")
        }
    
        
    }
    fs.copyFile(process.argv[3],process.argv[4],copyerr)
}

