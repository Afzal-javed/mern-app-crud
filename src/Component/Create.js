import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
function Create() {
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState(0);
    const [profession,setProfession]=useState("");
    const [error,setError]=useState("");
    // console.log(name,email,age,profession)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const addUser={name,email,age,profession};
        const response=await fetch("http://localhost:5000/",{
            method:"POST",
            body:JSON.stringify(addUser),
            headers:{
                "Content-Type":"application/json"
            },
        });
        // const response=await axios.post('http://localhost:5000/',{addUser})
        const result=await response.json();
        if(!response.ok){
            console.log(result.error);
            setError(result.error);
        }
        if(response.ok){
            // console.log(result);
            setError("")
            navigate("/all");
        }
        setName("");
        setEmail("");
        setAge("");
        setProfession("");
    }
    return (
        <div>
            {error && <div class="alert alert-danger" role="alert">{error}</div>}
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text"
                     value={name} 
                     onChange={(e)=>setName(e.target.value)} 
                     className="form-control" 
                     id="exampleInputEmail1"
                      aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Age</label>
                    <input type="number"
                    value={age} 
                    onChange={(e)=>setAge(e.target.value)}
                    className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Profession</label>
                    <input type="text"
                    value={profession} 
                    onChange={(e)=>setProfession(e.target.value)}
                    className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create