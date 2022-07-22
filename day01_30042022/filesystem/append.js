const fs = require('fs');
let appendData = '/n /n This need to append';

fs.appendFile('rename.txt',appendData,(err)=>{
    if(err){
        console.log('error');
    }else{
        console.log('data appended');
    }
})