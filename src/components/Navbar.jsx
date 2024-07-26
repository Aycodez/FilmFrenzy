import {GoSun} from "react-icons/go";
import {FaMoon} from "react-icons/fa";
const Navbar = ({search, inputChange, changeMode,backgroundColor}) => {
  return (
            <nav className="w-screen z-50 fixed px-4 py-5 md:px-10 bg-black flex justify-between items-center">
                <a href="#" className="text-xl font-['Kalnia Glaze'] font-[700] md:text-4xl text-red-600">FilmFrenzy</a>
                <div className="flex justify-center items-center md:gap-4">
                  <input className="w-[10rem] md:w-[20rem] h-8 md:h-10 outline-none rounded-lg
                       bg-slate-300 p-3 border-2 border-[#666666] text-[0.65rem] md:text-lg text-[#212121]"
                          type="search" value={search} onChange={inputChange} placeholder="Search for any movie..." />
                  <button onClick={changeMode}
                        className="ml-2 px-1 text-xl md:text-3xl text-white hover:text-[#777777] duration-500 ease-in-out">
                        {backgroundColor ==='#141414'? <GoSun/>:<FaMoon/>}   
                  </button>
                </div>              
            </nav>
          )
}

export default Navbar;