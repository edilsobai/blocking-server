const express = require("express")

const app = express()

function delay(performance) {
    const startTime = Date.now()
    
    while(Date.now() - startTime < performance){

    }
}
app.get("/", (req, res) => {
    res.send("Home page")
})

app.get("/timer", (req, res) => {
    delay(9000)
    res.send("Timer page")
})

app.listen(5000, () => console.log("running on port: 5000"))