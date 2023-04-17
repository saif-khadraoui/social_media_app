const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");


const app = express();
app.use(express.json())
// app.use(cors())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

// app.use(cookieParser);
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
    key: "userId",
    secret: "saif",
    resave: false,
    saveUninitialized: false,
    cookies: {
        secure: true
    },
}))

const mysql = require("mysql2");

const connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "cool12345",
    database: "social"
})

connection.connect(function(error){
    if(error){
        console.log(error)
    } else{
        console.log("connected")
    }
})

app.post('/signup', (req,res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    connection.query(
        "INSERT INTO users (email, username, password) VALUES(?,?,?)",
        [email, username,password],
        (err,result) => {
            console.log(err)
        }
    )

})

app.get("/login", (req,res) => {
    if (req.session.user){
        res.send({ loggedIn: true, user: req.session.user })
    } else{
        res.send({ loggedIn: false })
    }
})

app.post("/login", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    connection.query(
        "SELECT * FROM users WHERE username=? AND password=?",
        [username, password],
        (err,result) => {
            if(err){
                console.log({ err: err })
            }
            if(result){
                req.session.user = result
                console.log(req.session.user);
                res.send({ message: result })
            }
        }
    )
})

app.listen(1337, () => {
    console.log("server on port 3000")
})