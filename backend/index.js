const express = require("express");

const app = express();
const port = 9000;
//changed this from 3000 for testing purposes

var adminRouter = require("./Routes/admin.routes");
var schedulerRouter = require("./Routes/scheduler.routes");
var socialRouter = require("./Routes/social.routes");
var testAPIRouter = require("./Routes/test.route");
var cors = require("cors");
const bodyParser = require('body-parser');
//added cors for test purposes also idk what it does tbh

app.use(cors());
app.use(express.json())
app.use('/admin', adminRouter);
app.use('/social', socialRouter);
app.use('/scheduler', schedulerRouter);
app.use("/testAPI", testAPIRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


