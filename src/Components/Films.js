import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => setFilms(films))
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Studio Ghibli Films</h1>

            {films.map(film => (
                <div className="card my-2" key={film.id}>
                    <div className="card-body">
                        <h5 className="card-title">{film.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Original title: {film.original_title}</h6>
                        <Link to={`/films/${film.id}`} className="card-link">
                            <button className="btn btn-secondary btn-sm">See More</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Films;