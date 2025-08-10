import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    // for fetching data from the server
    useEffect(() => {
       axios.get('http://localhost:8081/')
       .then(res => console.log(res)
       )
       .catch(err => console.error('Error fetching data:', err));
    }, []);
  return (
    <div>Hello World</div>
  )
}

export default Home