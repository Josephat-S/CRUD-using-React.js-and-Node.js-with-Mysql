import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
// Library for connecting fronted with server
app.use(cors());
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
// Setting where the server will listen
app.listen(8081, ()=>{
    console.log('Server is running...');
})