import Movie from "./components/movie";

function MovieApp({movies}){
        const IMG_PATH = "https://image.tmdb.org/t/p/w500";        
        const renderMovies = movies.map((movie) =>{
            if(movie.poster_path !== null){
                return (
                    <Movie
                        strMovie={movie.title}
                        strMovieThumb={ `${IMG_PATH + movie.poster_path}`}
                    />)
            }          
        })    
    return (   
        <>
            <section className="flex flex-wrap pt-20 mx-10" >
                {renderMovies}
            </section>
        </>       
    )      
}
export default MovieApp;