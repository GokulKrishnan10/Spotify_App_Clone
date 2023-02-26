const express = require("express");
const app = express();
const User = require("./user");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const image = require("./image_upload/image");
const router = require("./router");
require("dotenv").config();
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
const salt = 10;
const cors = require("cors");
const bcrypt = require("bcrypt");
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
app.use(express.json());
app.use("/protected", router);
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send(`<h1>Server running on port ${PORT}</h1>`);
});

app.get("/images/:id", (req, res) => {
  image.findById(req.params.id, (error, img) => {
    if (error) res.status(500).send(error);
    res.contentType(img.contentType);
    res.send(img.data);
  });
});

app.get("/getimages", (req, res) => {
  image.find({}, function (error, results) {
    if (error) res.status(500).send(error);
    res.send(results);
  });
});

app.post("/submitted", (req, res) => {
  var forms = req.body;
  const password = forms.password;
  bcrypt
    .hash(password, salt)
    .then((hashedpassword) => hashedpassword)
    .then((data) => {
      const newUser = new User({
        email: forms?.mail,
        password: data,
        dob: forms?.birthday,
        gender: forms?.gender,
      });
      newUser.save(function (error) {
        if (error === null) {
          res.send("<h1>Successfully Created</h1>");
        } else {
          if (Object.keys(forms).length === 2) {
            res.status(404).send("404 Error");
          } else res.send("<h1>User Exists</h1>");
        }
      });
    })

    .catch((error) => res.send(error));
});

app.post("/loggedin", (req, res) => {
  var forms = req.body;
  const newUser = {
    email: forms.mail,
  };
  User.find(newUser)
    .then((data) => {
      console.log("Data in user side", data);
      if (data.length === 0)
        res.status(500).send("<h1>User Does not exist</h1>");
      else {
        bcrypt
          .compare(forms.password, data[0].password)
          .then((isMatch) => {
            if (isMatch) {
              const token = jwt.sign(
                JSON.parse(JSON.stringify(data[0])),
                "678342687jhdshgdvssxdf8789kj8yhjhj"
              );
              const obj = data[0];
              res.json({ obj, token });
            } else {
              res.status(500).send("<h1>User Does not exist</h1>");
            }
          })
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => {
      res.send(error);
    });
});
