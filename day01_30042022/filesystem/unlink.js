const fs = require('fs');
fs.unlink('rename.txt',(err)=>{
    if(err){
        console.log(Error);
    }else{
        console.log('Delete success');
    }
})