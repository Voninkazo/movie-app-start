import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Movies({movie, config}) {
    return(
        <li>
            <Link to={`/movie/${movie.id}`}>
                {config.images?.base_url && 
                    <img src={config.images.base_url + "w342" + movie.poster_path} alt={`${movie.title} poster`}/>
                }
            </Link>
        </li>
    )
}

Movies.propTypes={
    movie: propTypes.shape({
        title:propTypes.string.isRequired,
        id:propTypes.number.isRequired,
        images: propTypes.shape({
            base_url: propTypes.string
,        })
    }).isRequired
}