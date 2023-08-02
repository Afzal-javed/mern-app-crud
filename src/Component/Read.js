import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
// import Card from './Card';

function Read() {
    const [data, setData] = useState();
    const [error, setError] = useState("");
    async function getData() {
        const response = await fetch("http://localhost:5000/");
        const result = await response.json();
        if (!response.ok) {
            console.log(result.error);
            setError(result.error)
        }
        if (response.ok) {
            setData(result);
            setError("");
        }
    }
    const handleDelete=async(id)=>{
        const response=await fetch(`http://localhost:5000/${id}`,{
            method:"DELETE"
        });
        const result=await response.json();
        if(!response.ok){
            console.log(result.error);
            setError(result.error);
        }
        if(response.ok){
            setError("Deleted Successfully");
            setTimeout(()=>{
                setError("");
                getData();
            },1000);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    // console.log(data);
    return (
        <div className='container my-2'>
            <h2 className='text-container'>All Data</h2>
            {error && <div class="alert alert-danger" role="alert">{error}</div>}
            <div className='row'>
                {data?.map((data, ele) => (
                    <div key={data._id} className='col-3'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{data.email}</h6>
                                <p className="card-text">{data.age}</p>
                                <p className="card-text">{data.profession}</p>
                                <Link to={`/${data._id}`}  className="card-link">Edit</Link>
                                <a href='#' className="card-link" onClick={()=>handleDelete(data._id)}> Delete</a>
                            </div>
                        </div>
                    </div>
                    // <Card key={ele.id} data={data}/>     
                ))}
            </div>
        </div>
    )
}

export default Read