import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

import './Login.css';


function Login() {
  const navigate = useNavigate();

    const baseUrl = "http://localhost:80";
 

  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');

  const handleChange_name = (e)=>{
      e.preventDefault();
      setName(e.target.value);
  }

  const handleChange_studentID = (e)=>{
      e.preventDefault();
      setStudentID(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/api/login');
    xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        navigate('/home');
      } else {
        console.log('Error:', xhr.status);
      }
    }
    };
    xhr.send(JSON.stringify({ name: name, studentid: studentID }));}
    return (
      <div className="login-container">
        <br></br><h1> Login</h1>
        <div className="login-text">
          
          <p>name: 
            <input type="text" 
                   className="form-control" 
                   placeholder="name" 
                   aria-label="name"  
                   required={true} 
                   value={name} 
                   onChange={handleChange_name}>    
            </input>
          </p>
          <p>studentID: 
            <input type="text" className="form-control" placeholder="StudentID" aria-label="StudentID" required={true} value={studentID} onChange={handleChange_studentID}></input>
          </p></div>
          <Button className="btn btn-outline-primary" onClick={handleSubmit}> OK</Button></div>
        
      
    );
}

export default Login;