const express = require("express");
const cors = require("cors");

const app = express();

const ctrl = require("./controller");

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON

app.get("/api/fortune", ctrl.sendTheFortune);

app.get("/api/daily-inspiration", ctrl.sendDailyInspo);

app.post("/api/words-of-advice", ctrl.storeUserAdvice);

app.listen(4000, () => console.log("Hello there!"));
