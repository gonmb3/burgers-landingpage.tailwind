import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
  
        {/* Card*/} 
        <div className="rounded-xl relative">
             {/* overlay*/} 
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className='font-bold text-2xl px-2 pt-4'>Doble Queso</p>
                <p className='px-2'>Hasta el 9/12</p>
                <button className='border-white mx-2 absolute bottom-4 bg-yellow-500 cursor-pointer text-white'>Ordena Ahora!</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/1552641/pexels-photo-1552641.jpeg?cs=srgb&dl=pexels-engin-akyurt-1552641.jpg&fm=jpg" alt="burger" />
        </div>

        <div className="rounded-xl relative">
             {/* overlay*/} 
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className='font-bold text-2xl px-2 pt-4'>La Más Vendida</p>
                <p className='px-2'>Hasta el 11/22</p>
                <button className='border-white mx-2 absolute bottom-4 bg-yellow-500 cursor-pointer text-white'>Ordena Ahora!</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?cs=srgb&dl=pexels-engin-akyurt-2282532.jpg&fm=jpg" alt="burger" />
        </div>


        <div className="rounded-xl relative">
             {/* overlay*/} 
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className='font-bold text-2xl px-2 pt-4'>Recargada</p>
                <p className='px-2'>Hasta el 9/10</p>
                <button className='border-white mx-2 absolute bottom-4 bg-yellow-500 cursor-pointer text-white'>Ordena Ahora!</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.pexels.com/photos/10922926/pexels-photo-10922926.jpeg?cs=srgb&dl=pexels-gonzalo-acu%C3%B1a-10922926.jpg&fm=jpg" alt="burger" />
        </div>
    </div>
  )
}

export default HeadlineCards