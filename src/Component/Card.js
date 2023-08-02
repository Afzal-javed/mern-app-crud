import React from 'react'

function Card(props) {
    const { data } = props;
    return (
        <div >
            <div key={data._id} className='col-3'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{data.email}</h6>
                        <p className="card-text">{data.age}</p>
                        <p className="card-text">{data.profession}</p>
                        <a href="#" className="card-link">Edit</a>
                        <a href="#" className="card-link"> Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card