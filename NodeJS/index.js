const path = require('path');
const fs = require('fs');
const { promisify } = require('util')

module.exports = class Handler{

    async tree(){
        const readDirAsync = promisify(fs.readdir);
        const accessAwait = promisify(fs.exists)
        try{
            const res = await readDirAsync(__dirname);
            console.log(`current dir: ${__dirname}`);
            
            let indexFile = 0;
            let exist = await accessAwait(path.join(__dirname, 'monDossier'), fs.F_OK);
            while(exist){
                indexFile++;
                exist = await accessAwait(path.join(__dirname, `monDossier-${indexFile}`), fs.F_OK);
                if(!exist){
                    fs.mkdirSync(path.join(__dirname, `monDossier-${indexFile}`));
                    console.log(`monDossier-${indexFile} created`);
                    return;
                }

            }
            fs.mkdirSync(path.join(__dirname, `monDossier`));
            console.log("monDossier created");
        }catch(err){
            console.log(`An error ${err}`)
        }
    }

}