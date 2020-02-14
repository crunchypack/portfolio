const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendGrid = require("@sendgrid/mail");
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("Api Status: Running");
});

app.post("/api/email", (req, res, next) => {
  sendGrid.setApiKey(
    "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"
  );
  const msg = {
    to: "simon.wolf.lobo@gmail.com",
    from: req.body.email,
    subject: "Portfolio contact",
    text: "My name is: " + req.body.name + "\n" + req.body.message
  };
  sendGrid
    .send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log("error: ", err);
      res.status(401).json({ success: false });
    });
});

app.set("port", 3030);
app.listen(app.get("port"), () => {
  console.log("Api started on port: " + app.get("port"));
});
