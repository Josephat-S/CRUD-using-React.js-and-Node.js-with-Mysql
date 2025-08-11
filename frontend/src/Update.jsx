import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialize form values with empty strings
  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    // Fetch existing student data
    axios.get(`http://localhost:8081/read/${id}`)
      .then(res => {
        // Assuming res.data[0] contains the student object
        const student = res.data[0];
        setValues({
          name: student.Names,
          email: student.Email
        });
      })
      .catch(err => console.error('Error fetching data:', err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8081/update/${id}`, values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.error('Error updating data:', err));
  };

  return (
    <div className='container'>
      <div className='table-container'>
        <h2>Update Student</h2>
        <form className='mt-5' onSubmit={handleUpdate}>
          <div className='input-container'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter Name'
              required
              value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className='input-container'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter Email'
              required
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
           <Link to='/' className='read-button'>Back</Link>
          <button className='edit-button mt-5' type='submit'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
