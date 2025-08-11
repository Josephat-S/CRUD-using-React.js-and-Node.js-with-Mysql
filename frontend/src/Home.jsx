import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    // Displaying data
    const [data, setData] = useState([]);
    // for fetching data from the server
    useEffect(() => {
       axios.get('http://localhost:8081/')
       .then(res => setData(res.data))
       .catch(err => console.error('Error connecting to server:', err));
    }, []);
    // Deleting student
    const handleDelete = (id) => {
      axios.delete('http://localhost:8081/delete/' + id)
      .then(res => {
        location.reload();
      })
      .catch(err => console.error('Error updating data:', err));
    }
  return (
    <div className='container'>
      <div className='table-container'>
        <h2>Student List</h2>
        <div className='create-link'>
          <Link to="/create" className=''>Create +</Link>
        </div>
        <table>
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {data.map((student, index) => (
                <tr key={index}>
                  <td>{student.ID}</td>
                  <td>{student.Names}</td>
                  <td>{student.Email}</td>
                  <td>
                    <Link to={`/read/${student.ID}`} className='read-button'>Read</Link>
                    <Link to={`/edit/${student.ID}`} className='edit-button'>Edit</Link>
                    <button className='delete-button' onClick={()=> handleDelete(student.ID)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home