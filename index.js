const exp=require("express")  //npm install express
const cors=require("cors")
const  bodyParser = require('body-parser')
const fu=require("express-fileupload");
const app=exp();
app.use(exp.static('public'))
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(fu());

const mongoose = require('mongoose');  //npm install mongoose
mongoose.connect('mongodb+srv://samaponcsegmit2024:samapon1234@cluster0.cq7kaaz.mongodb.net/database1?retryWrites=true&w=majority');

const cr=require("./routes/Category.js");
const pr=require("./routes/Product");
const ar=require("./routes/Auth");

app.get("/",(req,res)=>{

    res.send("Hello express");
});

app.use("/pro",pr);

app.use("/cat",cr);
app.use("/auth",ar);

app.listen(2000);