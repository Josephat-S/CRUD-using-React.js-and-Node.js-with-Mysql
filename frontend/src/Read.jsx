import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Read = () => {
    // Storing data
    const [student, setStudent] = useState([]);
    // Fetching the ID from the URL
    const { id } = useParams();
    // Fetching data from db when component mounts
    useEffect(()=>{
        axios.get('http://localhost:8081/read/' + id)
        .then(res => {
            console.log(res.data);
            setStudent(res.data)
        })
        .catch(err => console.error('Error fetching data:', err));
    }, [])
  return (
    <div className='container'>
      <div className='table-container'>
        <div className='mb-5'>
        <h2>Student List</h2>
        <p><strong>ID: </strong>{student[0]?.ID}</p>
        <p><strong>Name: </strong>{student[0]?.Names}</p>
        <p><strong>Email: </strong>{student[0]?.Email}</p>
        </div>
         <Link to='/' className='read-button'>Back</Link>
        <Link to={`/edit/${student[0]?.ID}`} className='edit-button'>Edit</Link>
        </div>
        </div>
  )
}

export default Read