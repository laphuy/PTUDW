const app = require("./app")
const config = require("./app/config")

//start server

const PORT = config.app.PORT
app.listen(PORT, () => {
    console.log(`Server run port ${PORT}.`)
});