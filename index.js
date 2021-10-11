
const cpus = require("os").cpus().length
const cluster = require("cluster")

require("dotenv").config()

const PORT = process.env.PORT || 80

if(cluster.isMaster){
    for(let i=0; i<cpus; i++) cluster.fork()

    cluster.on("exit", (worker)=>{
        console.log(`Worker ${worker.id} has exitted.`)
    })
}else{

    console.log(`Express is listening on ${PORT} and workder ${process.pid}`)
}
