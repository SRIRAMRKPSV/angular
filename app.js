/*const {readFileSync,writeFileSync}=require("fs")

const first = readFileSync("./firstpage.html","utf8")

console.log(first)

//const second=writeFileSync("./second.txt","Hello this is second page")
//console.log(second)
const readSecond=readFileSync("./second.txt","utf8")
console.log(readSecond) */

console.log("start");

const {readFile,writeFile}=require("fs")
 readFile("./firstpage.html","utf8",(err,result)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(result)
    }

}
)
/*writeFile("./seconds.txt","second page works",(err,result)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(result)
    }
})*/
readFile("./seconds.txt","utf8",(err,result)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(result)
    }

}
)
readFile("./second.txt","utf8",(err,result)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(result)
    }

}
)

console.log("last line");



