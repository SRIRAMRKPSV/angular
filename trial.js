const os = require("os")

const user = {
    name:os.type(),
    version:os.version(),
    release:os.release()
    
}

console.log(user)
console.log(os.uptime())