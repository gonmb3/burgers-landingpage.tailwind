import React from 'react'

const Home = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 '>
            <div className="max-h-[500px] relative">

                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                    <h1  className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>La mejor <span >comida</span></h1>
                    <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400' >Trutru <span >Food</span></h2>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?cs=srgb&dl=pexels-ray-piedra-1565982.jpg&fm=jpg" alt="food-img" />
            </div>

        </div>
    )
}

export default Home