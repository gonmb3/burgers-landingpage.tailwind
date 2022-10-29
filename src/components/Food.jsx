import { data } from "../data/data.js"
import { useState } from 'react';

const Food = () => {

    const [foods, setFoods] = useState(data);

    // filter food/types
    const filterTypes = (category) => {
            setFoods(
                data.filter(item => {
                    return item.category === category
                })
            )
    }

      // filter by price
      const filterPrice = (price) => {
        setFoods(
            data.filter(item => {
                return item.price === price
            })
        )
}

    return (
        <div className="max-w-[1640px] m-auto px-4 py-10 ">
            <h1 className="text-yellow-500 font-bold text-4xl text-center">Menu</h1>

            {/*Filter row*/}
            <div className="flex flex-col lg:flex-row justify-between">
                {/*Filter type*/}
                <div>
                    <p className="font-bold text-gray-700">Filtrar por tipo </p>
                    <div className="flex justify-between flex-wrap my-2">
                        <button onClick={() => setFoods(data)} className=" m-1 hover:bg-yellow-400 hover:text-black  bg-yellow-500 text-white">Todo</button>
                        <button onClick={() => filterTypes("burger")} className=" m-1 hover:bg-yellow-400 hover:text-black  bg-yellow-500 text-white">Hamburguesas</button>
                        <button onClick={() => filterTypes("pizza")} className=" m-1 hover:bg-yellow-400 hover:text-black bg-yellow-500 text-white">Pizza</button>
                        <button onClick={() => filterTypes("salad")} className=" m-1  hover:bg-yellow-400 hover:text-black bg-yellow-500 text-white">Ensaldas</button>
                        <button onClick={() => filterTypes("chicken")} className=" m-1 hover:bg-yellow-400 hover:text-black  bg-yellow-500 text-white">Pollo</button>
                    </div>
                </div>
                {/*Filter price*/}
                <div className="">
                    <p className="font-bold text-gray-700">Filtrar por precio</p>
                    <div className="flex justify-between max-w-[390px] w-full">
                        <button onClick={() => filterPrice("500")} className=" m-1 hover:bg-yellow-400 hover:text-black  bg-yellow-500 text-white">$ 500</button>
                        <button onClick={() => filterPrice("800")} className=" m-1 hover:bg-yellow-400 hover:text-black  bg-yellow-500 text-white">$ 800</button>
                        <button onClick={() => filterPrice("1000")} className=" m-1 hover:bg-yellow-400 hover:text-black  bg-yellow-500 text-white">$ 1000</button>
                        <button onClick={() => filterPrice("1500")} className=" m-1 hover:bg-yellow-400 hover:text-black  bg-yellow-500 text-white">$ 1500</button>
                    </div>
                </div>
            </div>


            {/*Foods */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-2">
                    {foods.map((item) => (
                    <div className="border shadow-lg hover:scale-105 duration-300 cursor-pointer rounded-lg" key={item.id}>
                        <img className="w-full h-[200px] object-cover rounded-lg" src={item.image} alt={item.name} />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold ">{item.name}</p>
                            <p>
                                <span className="bg-yellow-400 text-white p-1 rounded-full">${item.price} </span>
                            </p>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default Food