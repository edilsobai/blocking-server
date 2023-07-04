const express = require("express");
const cluster = require("cluster");
const os = require("os") 
const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Process PID: ${process.pid}`);
});

console.log("Running server...");
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    const NUM_WORKERS = os.cpus().length 
    console.log(NUM_WORKERS)
    for(let i = 0; i < NUM_WORKERS; i ++){
    cluster.fork();
    }
  
} else {
  console.log(`Worker ${process.pid} is running`);
  app.listen(5000, () => console.log("Running on port: 5000"));
}
