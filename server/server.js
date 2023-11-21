import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside Server" });
    return res.json(result);
  });
});

app.post("/student", (req, res) => {
  const sql =
    "INSERT INTO student (`regno`, `name`, `email`, `phno`) VALUES (?, ?, ?, ?)";
  const values = [req.body.regno, req.body.name, req.body.email, req.body.phno];

  db.query(sql, values, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/read/:regno", (req, res) => {
  const sql = "SELECT * FROM student WHERE regno=?";
  const regno = req.params.regno;
  db.query(sql, [regno], (err, result) => {
    if (err) return res.json({ Message: "Error inside Server" });
    return res.json(result);
  });
});

app.put("/update/:regno", (req, res) => {
    const sql =
      "UPDATE student SET `regno`=?,`name`=?,`email`=?,`phno`=? WHERE regno=?";
    const regno = req.params.regno;
    const values = [req.body.regno, req.body.name, req.body.email, req.body.phno];
    
    console.log('Update SQL:', sql);
    console.log('Update Values:', values);
  
    db.query(sql, [...values, regno], (err, result) => {
      if (err) {
        console.error('Error updating student:', err);
        return res.status(500).json({ Message: "Error inside Server" });
      }
  
      console.log('Update Result:', result);
      return res.json(result);
    });
  });

  app.delete("/delete/:regno",(req,res)=>{
    const sql =
      "DELETE FROM student  WHERE regno=?";
    const regno = req.params.regno;
  
    db.query(sql, [regno], (err, result) => {
      if (err) {
        return res.json({ Message: "Error inside Server" });
      }
      return res.json(result);
    });
  })

app.listen(8081, () => {
  console.log("listening");
});
