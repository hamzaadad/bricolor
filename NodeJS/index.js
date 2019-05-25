const path = require('path');
const fs = require('fs');
const { promisify } = require('util')

module.exports = class Handler{

    async tree(){
        const readDirAsync = promisify(fs.readdir)
        try{
            const res = await readDirAsync(__dirname);
            console.log(`current dir: ${__dirname}`);

        }catch(err){
            console.log(`An error ${err}`)
        }
    }

}