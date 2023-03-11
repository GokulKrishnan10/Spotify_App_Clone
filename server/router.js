const express = require("express");
const cors = require("cors");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const salt = 10;
const bcrypt = require("bcrypt");
require("./connect");
const User = require("./user");
router.use(
  cors({
    origin: "http://localhost:3000",
  })
);
router.get("/", authenticate, (req, res) => {
  // console.log("In Protected Router");
  const decode = jwt.verify(
    req.token.token,
    "678342687jhdshgdvssxdf8789kj8yhjhj",
    function (error, decoded) {
      //console.log("Decoded is ", decoded);
      if (error) {
        res.status(404).send("No User");
      } else {
        res.status(200).send(decoded);
      }
    }
  );
});
router.get("/new", (req, res) => {
  res.send("<h1>Hello,There in router</h1>");
});
router.post("/password", authenticate, (req, response) => {
  // console.log("In password Router", req.token);
  const form = req.token;
  const decode = jwt.verify(
    req.token.token,
    "678342687jhdshgdvssxdf8789kj8yhjhj",
    function (error, decoded) {
      console.log("Decoded is ", decoded);
      if (error) {
        response.status(404).send("No User");
      } else {
        bcrypt
          .hash(form.new_password2, salt)
          .then((hashedpassword) => hashedpassword)
          .then((data) => {
            console.log("Updated Password", data);
            User.updateOne(decoded, { password: data }, function (error, res) {
              if (error) response.status(404).send("Fatal Error");
              response.status(200).send("Password updated successfully");
            });
          });
      }
    }
  );
});
router.get("/get.account.data", authenticate, (req, response) => {
  const form = req.token;
  const decode = jwt.verify(
    req.token.token,
    "678342687jhdshgdvssxdf8789kj8yhjhj",
    function (error, decoded) {
      console.log("Decoded is ", decoded);
      if (error) {
        response.status(404).send("No User");
      } else {
      }
    }
  );
});
function authenticate(req, res, next) {
  const Bearer = req.headers.authorization;
  //console.log("In password Router Authentication", req);
  // console.log("Request is", req.body);
  if (typeof Bearer !== "undefined") {
    const token = Bearer.split(" ");
    const obj = { ...req.body, token: token[1] };
    req.token = obj;
    next();
  } else {
    // console.log("Bearer is", Bearer);
    res.status(404).send("<h1>Fatal Error</h1>");
  }
}
module.exports = router;
