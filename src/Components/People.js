import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => setPeople(people))
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Studio Ghibli Characters</h1>

            {people.map(person => (
                <div className="card my-2" key={person.id}>
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Age: {person.age}</h6>
                        <Link to={`/characters/${person.id}`} className="card-link">
                            <button className="btn btn-secondary btn-sm">See More</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default People;