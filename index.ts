import path from "path"
let newPath="C:\Users\FAITH OBIEKEZE\Desktop\github\ignore/index.js"
console.log(path.basename(newPath))
console.log(path.dirname(newPath))
console.log(path.extname(newPath))
console.log(path.join(__dirname, "ignore","index.js"))

import fs from "fs"
import fsPromise from "fs/promises"


// async
// try{
//     const data=fs.readFileSync(path.join(__dirname,"ignore","index.js"),{
//         encoding:"utf-8"
//     })
//     console.log(data.toString())
// }catch (error) {
//     console.log(error)
// }


// callback
// fs.readFile(path.join(__dirname,"ignore" ,"faith.js"),"utf-8",(err,data)=>{
//     if (err) {
//         throw err
//     }else{
//         console.log(data)
//     }
// })


// promise

const readFile= async() =>{
    try{const data=await fsPromise.readFile(
        path.join(__dirname,"ignore","faith.js",),
        {encoding:"utf-8"}
    );
console.log(data);
}catch (error) {
  throw error
}
};

readFile()