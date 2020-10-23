import React, { useState } from 'react';

const movies =[
    {
        name:"36th Chamber"
    },
    {
        name:"5 Deadly Venom"
    },
    {
        name:"Man of Iron"
    },
]


export default function MoviesList() {

    const [filter, setFilter] = useState('');

    return(
        <div className="">
            <ul>
                {
                    movies.map((movie) => {
                    return(
                    <li key={movie.name}>{movie.name}</li>
                    )
                    })
                }
            </ul>
        </div>
    )
}