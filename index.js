const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const router = require("./routes");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "variables.env" });
const db = require("./config/db");
require("./models/Usuarios");

db.sync()
  .then(() => console.log("*--------DB CONNECT CORRECTLY--------*"))
  .catch((error) => console.log(error));
const app = express();

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Enadble EJS
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

//Static Files
app.use(express.static("public"));

//CookieParser habilitar
app.use(cookieParser());

//session
app.use(
  session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
  })
);

//Agregar flash messages
app.use(flash());

//Middleware
app.use((req, res, next) => {
  res.locals.mensajes = req.flash();
  const fecha = new Date();
  res.locals.year = fecha.getFullYear();
  next();
});

//Router
app.use("/", router());

//Server
app.listen(process.env.PORT, () => {
  console.log(
    `*------------SERVER ONLINE ON PORT ${process.env.PORT}-----------*`
  );
});
