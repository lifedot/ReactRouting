import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const SingleFilm = () => {
    const [film, setFilm] = useState({});
    const { filmid } = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film))
    }, [filmid]);

    return (
        <div className="container">
            <div className="card my-2">
                <div className="card-body">
                    <h2 className="card-title text-center">{film.title}</h2>
                    <h6 className="card-subtitle mb-2 text-muted text-center">Original title: {film.original_title}</h6>
                    <p class="card-text">{film.description}</p>
                    <p class="card-text">Director: {film.director}</p>
                    <p class="card-text">Released: {film.release_date}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleFilm;