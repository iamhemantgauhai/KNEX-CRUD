const express = require("express")
const app = express()
app.use(express.json())

const home = require("./router/routes")
app.use("/",home)

const port = 4000


app.listen(port, () => {
  console.log(`Server STARTED on ${port}.`);
});