import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import coursePic from '../assets/images/coursePic.jpg';
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 p-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">This is a description about the course you are taking.</p>
                            <Link to="#" className="btn btn-primary">Rate</Link>
                    </div>
                </div>
            </div>

             
        </>
        
    );

};

export default Card;