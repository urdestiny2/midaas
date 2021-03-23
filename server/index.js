const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    password : 'mysql_pass',// enter your musql server pass here
    database : 'primeM', 
});

app.post("/create", (req, res) => {
    const fNo = req.body.fNo;
    const sNo = req.body.sNo;

    db.query("INSERT INTO prime_det ( fNo, sNo) VALUES (?,?)",
    [fNo, sNo], 
    (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send("Values Inserted");
        }
    })
});



app.listen(3001, ()=> {
    console.log("Hooray!, running on port 3001");
});

