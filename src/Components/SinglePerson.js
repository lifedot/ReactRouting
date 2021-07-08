import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const SinglePerson = () => {
    const [person, setPerson] = useState({});
    const { characterid } = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${characterid}`)
            .then(res => res.json())
            .then(person => setPerson(person))
    }, [characterid]);

    return (
        <div className="container">
            <div className="card my-2">
                <div className="card-body">
                    <h2 className="card-title text-center">{person.name}</h2>
                    <h6 className="card-subtitle mb-2 text-muted text-center">Age: {person.age}</h6>
                    <p className="card-text">Gender: {person.gender} </p>
                    <p className="card-text">Hair Color: {person.hair_color}</p>
                    <p className="card-text">Eye Color: {person.eye_color}</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePerson;