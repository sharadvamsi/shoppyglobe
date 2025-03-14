import { Link } from "react-router-dom"
import hero from "../assets/img/hero.png";

function Home() {
  return (
    <main className='min-h-32 md:min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-normal md:justify-between gap-4 md:gap-16 py-8 md:py-24'>
      <div className='w-full md:w-1/2 flex flex-col justify-center space-y-4 md:space-y-8'>
        <div className="space-y-1 md:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-red-500 font-poppins animate-fade-in-up">Discover</h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-red-500 font-poppins animate-fade-in-up delay-100">Most Suitable</h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-red-500 font-poppins animate-fade-in-up delay-200">Products</h2>
        </div>
        <p className="text-base sm:text-lg md:text-2xl xl:text-3xl font-serif text-gray-700 max-w-2xl animate-fade-in-up delay-300">
          Shop for the best products at the best prices.
        </p>
        <Link to="/products">
          <button className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 ease-in-out hover:-translate-y-1 active:translate-y-0 active:shadow-md text-sm sm:text-base md:text-lg">
            Shop Now
          </button>
        </Link>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center order-first md:order-last'>
        <div className="w-full max-w-lg xl:max-w-xl">
          <img src={hero}/>
        </div>
      </div>
    </main>
  )
}

export default Home