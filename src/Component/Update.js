import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [age,setAge]=useState(0);
  const [profession,setProfession]=useState("");
  const [error,setError]=useState("");
  
  const {id}=useParams();
  const getSingleUser = async()=> {
      const response = await fetch(`http://localhost:5000/${id}`);
      const result = await response.json();
      // console.log(result.name)
      if (!response.ok) {
          console.log(result.error);
          setError(result.error)
      }
      if (response.ok) {
          // setData(result);
          setName(()=>result.name);
          setEmail(result.email);
          setAge(result.age);
          setProfession(result.profession);
          setError("");
      }
  }

  useEffect(()=>{
    getSingleUser();
  },[]);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const updatedUser={name,email,age,profession};
    const response=await fetch(`http://localhost:5000/${id}`,{
        method:"PATCH",
        body:JSON.stringify(updatedUser),
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
      setError("")
        navigate("/all");
    }
    
}
  return (
    <div>
    {/* {error && <div class="alert alert-danger" role="alert">{error}</div>} */}
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
        <button type="submit" className="btn btn-primary">Update</button>
    </form>
</div>
  )
}

export default Update