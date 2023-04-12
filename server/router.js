const express = require("express");
const cors = require("cors");
const router = express.Router();
const jwt = require("jsonwebtoken");
const salt = 10;
const bcrypt = require("bcrypt");
require("./connect");
const User = require("./user");

//GET requests ROUTING
router.get("/", authenticate, (req, res) => {
  jwt.verify(
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

router.get("/get-privacydata", authenticate, (req, res) => {});
router.get("/get.account.data", authenticate, (req, response) => {
  //const form = req.token;
  jwt.verify(
    req.token.token,
    "678342687jhdshgdvssxdf8789kj8yhjhj",
    function (error, decoded) {
      if (error) {
        response.status(404).send("No User");
      } else {
      }
    }
  );
});
router.get("/new", (req, res) => {
  res.send("<h1>Hello,There in router</h1>");
});

//POST requests ROUTING
router.post("/password", authenticate, (req, response) => {
  // console.log("In password Router", req.token);
  const form = req.token;
  jwt.verify(
    req.token.token,
    "678342687jhdshgdvssxdf8789kj8yhjhj",
    function (error, decoded) {
      if (error) {
        response.status(404).send("No User");
      } else {
        bcrypt
          .hash(form.new_password2, salt)
          .then((hashedpassword) => hashedpassword)
          .then((data) => {
            User.updateOne(decoded, { password: data }, function (error, res) {
              if (error) response.status(404).send("Fatal Error");
              response.status(200).send("Password updated successfully");
            });
          });
      }
    }
  );
});
router.post("/update-details", authenticate, (req, res) => {
  const form = req.token;
  jwt.verify(
    form.token,
    "678342687jhdshgdvssxdf8789kj8yhjhj",
    function (error, decoded) {
      if (error) res.status(404).send("Error!!");
      const updatedData = form.update;
      User.updateOne(
        decoded,
        {
          mail: updatedData.mail,
          gender: updatedData.gender,
          dob: updatedData.dob,
        },
        (error, results) => {
          if (error) res.status(400).send("Error!! Updating the profile");
          res.status(200).send("Successfully Updated");
        }
      );
    }
  );
});

//Middleware functions
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

router.use(
  cors({
    origin: "http://localhost:3000",
  })
);
module.exports = router;
