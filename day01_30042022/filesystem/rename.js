const fs =require('fs');
fs.rename('data1.txt','rename.txt',(err)=>{
    if(err){
        console.log('unable to rename');
    }else{
        console.log('Rename successfully');
    }
});