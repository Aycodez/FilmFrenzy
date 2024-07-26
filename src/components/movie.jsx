const Movie = ({strMovie, strMovieThumb}) => {
    return (
        <div className="mx-auto md:mx-4 my-3 rounded-lg flex flex-col justify-center items-center
         p-2 hover:scale-95 transition-all duration-500 ease-in-out">
            <img className="w-[300px] h-[350px] md:w[250px] md:h-[300px] rounded-lg  " src={strMovieThumb} alt="" />           
            <h1 className="text-center w-[250px] text-inherit font-bold text-xl pt-3">{strMovie}</h1>
        </div>
    )
}
export default Movie;