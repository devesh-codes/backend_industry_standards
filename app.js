const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection")


require("dotenv").config();

const ownerRouter = require("./routes/ownerRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")
const indexRouter = require("./routes/index")


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");




app.use("/owners", ownerRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/", indexRouter )







app.listen(port);