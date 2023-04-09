// const express = require('express');
// const app = express();
// const bodyParser = require("body-parser");
// const mysql = require("mysql2")
// const cors =require("cors");

// const db = mysql.createPool({
//     host: "qualcommbackenddbstage.cxiqoa7uqghb.ap-south-1.rds.amazonaws.com",
//     user: "admin",
//     password: "fCkfGbHJE7jo",
//     database : "mergedb"
// })

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}));

// app.get('/api/get', (req, res) => {
//     const sql = "SELECT * FROM users";
//     db.query(sql,(error,result) =>{
//         console.log("error", error);
//         console.log("result",result);
//         res.send(result);

//     });
//   });

// app.get('/', (req, res) => {
//     const sql = "SELECT COUNT(*) as total_users FROM users";
//     db.query(sql,(error,result) =>{
//         console.log("error", error);
//         console.log("result",result);
//         res.send(result);

//     });
//   });

//   app.listen(5000, () => {
//     console.log('Server listening on port 5000');
//   });
    
// const express = require('express');
// const app = express();

// app.get('/totalusers', (req, res) => {
//   const name = req.query.name;
//   res.send(`Hello ${name}!`);
// });

// app.listen(4000, () => {
//   console.log('Server started on port 4000');
// });

const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const mysql = require("mysql2")
const cors = require("cors");

//Database connection
const db = mysql.createPool({
  host: "qualcommbackenddbstage.cxiqoa7uqghb.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "fCkfGbHJE7jo",
  database : "crud_contact"
})

// Define the endpoint to serve the data
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get",(req,res)=>{
  const sqlGet = "SELECT * FROM contact_db";
  db.query(sqlGet,(error,result)=>{
    console.log("error",error);
    res.send(result);
  })
})

// app.post("/api/post",(req,res)=>{
//   const {name,email,contact} = req.body;
//   const sqlInsert = "INSERT INTO contact_db (name, email, contact) VALUES(%s,%s,%s)";
//   db.query(sqlInsert,[name,email,contact],(error,result)=>{
//     if(error){
//       console.log(error);
//     }
//   })
// })


app.get('/',(req,res)=>{
  const sqlInsert = "INSERT INTO contact_db (name, email, contact) VALUES ('abhishek' , 'abhishek@gmail.com', 7017906345)";
  db.query(sqlInsert, (err,result) => {
    console.log("error", err);
    console.log("result", result);
    res.send("Data inserted again")
  })
 
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});