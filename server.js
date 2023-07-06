const express = require("express");
const app = express();

function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
 
}

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/timer", async (req, res) => {
    await delay(4000);
    res.send(`Beep! beeep! 
    Process PID: ${process.pid}`);
});


console.log("Running server...");
console.log(`Master ${process.pid} is running`);
console.log(`Worker ${process.pid} is running`);
app.listen(5000, () => console.log("Running on port: 5000"));
