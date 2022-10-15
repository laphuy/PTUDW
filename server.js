const app = require('./app')
const config = require("./app/config")
const MongoDB = require("./app/utils/mongodb.util")

//start server
async function startServer(){
    try {
        await MongoDB.connect(config.db.uri)
        console.log(" Connect to DB success!")

        const PORT  = config.app.port
        app.listen(PORT, () => {
            console.log(`Server run port ${PORT}.`)
        });
    } catch (error) {
        console.log("Cannot connect to the db", error)
        process.exit()
    }
}

startServer();