import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {
    // UseState for holding values to be submitted
    const [values, setValues] = useState({
        name: '',
        email: ''
    });
    // Create a UseNavigate after submitting
        const navigate = useNavigate();
    // For handling submit
    const handleSubmit = (e) =>{
        // Prevent use to do the default after clicking submit
        e.preventDefault();
        // Submitting to the server
        axios.post('http://localhost:8081/students', values)
        .then(res =>{
           console.log(res);
           // Navigate to home
           navigate('/');
          }
        ).catch(err=>console.error(err));
    }
  return (
    <div className='container'>
      <div className='table-container'>
        <h2>Add Student</h2>
        <form className='mt-5' onSubmit={handleSubmit}>
            <div className='input-container'>
            <label htmlFor="">Name</label>
            <input type="text" name="name" placeholder='Enter Name' required onChange={e => setValues({...values, name: e.target.value})} />
            </div>
            <div className='input-container'>
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder='Enter Email' required onChange={e => setValues({...values, email: e.target.value})}/>
            </div>
             <Link to='/' className='read-button'>Back</Link>
            <button className='edit-button mt-5' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create