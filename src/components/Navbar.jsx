import { useState } from "react"

import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import {BsFillCartFill } from "react-icons/bs"
import {MdFavorite, MdHelp} from "react-icons/md"
import { FaUserFriends, FaWallet} from "react-icons/fa"
import {TbTruckDelivery} from "react-icons/tb"

const Navbar = () => {

    const [nav, setNav] = useState(false);

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">

                {/*left side*/ }
            <div className="flex items-center ">
                <div
                onClick={() => setNav(!nav)}
                 className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Trutru <span className="font-bold text-yellow-500">Food</span>
                </h1>

                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

             {/*Search input*/ }

             <div className="flex bg-gray-200 rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={22}/>
                <input className="bg-transparent p-2 focus w-full"    type="text" placeholder="Buscar Comida..." />
             </div>

               {/*cart button*/ }
                   
               <button className="bg-black text-white hidden md:flex items-center text-center py-2 rounded-full">
                <BsFillCartFill size={19} />
               </button>

                  {/*mobile menu*/ }
                 
             {/*black opacity background*/ }
             {nav ?   <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}

            {/*side menu*/ }

            <div className={ nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 " : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose 
                onClick={() => setNav(!nav)}
                className="absolute right-3 top-3 cursor-pointer" size={20}/>
                <h2 className="text-2xl p-4 ">Trutru <span className="font-bold">Food</span> </h2>

                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4"/>Ordenes </li>
                        <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4"/>Favoritos </li>
                        <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4"/>Billetera </li>
                        <li className="text-xl py-4 flex"><MdHelp size={25} className="mr-4"/>Ayuda </li>
                        <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4"/>Promociones </li>
                        <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4"/>Invita Amigos </li>
                    </ul>
                </nav>

            </div>


        </div>
    )
}

export default Navbar