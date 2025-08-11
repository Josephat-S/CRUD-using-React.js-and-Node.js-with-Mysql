import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
// Library for connecting fronted with server
app.use(cors());
// Use express.json() to parse JSON bodies
app.use(express.json());
// Database connecting
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
});
// Routing
app.get('/', (req, res)=>{
    // Retreiving all students
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, result)=>{
        // If there is an error
        if(err) {
            return res.status(500).send('Error retrieving data');
        }
        // If no error, send the result
        res.json(result);
    });
});
// Registering students
app.post('/students', (req, res) => {
    // Inserting data into database
    const sql = 'INSERT INTO students (`Names`, `Email`) VALUES (?)';
    const values = [req.body.name, req.body.email];
    db.query(sql, [values], (err, result) => {
        // If there is an error
        if(err) {
            return res.status(500).send('Error inserting data');
        }
        // If no error, send success message
        return res.status(201).json(result);
    });
})
// Getting student's data by id
app.get('/read/:id', (req, res) =>{
    // Getting data by id
    const sql = "SELECT * FROM students WHERE ID = ?";
    const id = req.params.id;
    // Fetching from DB
    db.query(sql, [id], (err, result)=>{
         // If there is an error
        if(err) {
            return res.status(500).send('Error retrieving data');
        }
        // If no error, send the result
        res.json(result);
    });
})
// Updating student's data by id
app.put('/update/:id', (req, res)=>{
    // Getting updating by id
    const sql = "UPDATE students SET `Names` = ?, `Email` = ? WHERE ID = ?";
    const id = req.params.id;
    const values = [req.body.name, req.body.email, id];
    db.query(sql, values, (err, result)=>{
        // If there is an error
        if(err) {
            return res.status(500).send('Error updating data');
        }
        // If no error, send success message
        return res.status(200).json(result);
    })})
// Deleting students
app.delete('/delete/:id', (req, res)=>{
    // Query for deletion
    const sql = "DELETE FROM students WHERE ID =?";
    const id = req.params.id;
    db.query(sql, id, (err, result)=>{
        if(err) {
            return res.status(500).send('Error updating data');
        }
        // If no error, send success message
        return res.status(200).json(result);
    })
})
// Setting where the server will listen
app.listen(8081, ()=>{
    console.log('Server is running...');
})