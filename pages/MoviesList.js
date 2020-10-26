import React, { useEffect, useState } from 'react';
import Movies from './Movies';
import Filter from './Filter';

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

const API_URL = "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key="
const CONFIG_URL = "https://api.themoviedb.org/3/configuration?&api_key="


export default function MoviesList() {
    console.log(process.env.MOVIE_API);

    const [filter, setFilter] = useState('');
    const [movies, setMovies] = useState([]);
    const [config, setConfig] = useState([]);

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL + process.env.MOVIE_API)
            const data = await res.json();
            setMovies(data.results);
        }catch(e){
            console.log(error(e))
        }
    }
    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL + process.env.MOVIE_API)
            const config = await res.json();
            setConfig(config);
        }catch(e){
            console.log(error(e))
        }
    }

    useEffect(() => {
        console.log('Hello effect')
        getMovies();
        getConfig();
    }, [])
    // const ulRef = useRef(null);
    // const ref = useRef(null);

    return(
        <div>
            {/* <form onSubmit={(e) =>{
                e.preventDefault();
                console.log(ref.current.value)
            }}>
                <input ref={ref} />
                <button/>
            </form> */}
            <Filter setFilter={setFilter} filter={filter}/>
            <ul className="movies-list">
                {movies.filter((movie) => 
                movie.title.toLowerCase().includes(filter.toLowerCase()))
                    .map((movie) => {
                    return(
                   <Movies key={movie.id} movie={movie} config={config}/>
                    )
                    })
                }
            </ul>
        </div>
    )
}