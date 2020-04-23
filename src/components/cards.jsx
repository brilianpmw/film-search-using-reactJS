import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Card = (props) => {
    return (
        <>
            <div className="col-12 col-md-4 my-1">

                <div className="card"  >
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.tahun}</p>
                        <a href="#" className="btn btn-primary">See detail</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card