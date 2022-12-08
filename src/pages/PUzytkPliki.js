import React from 'react'
import pliki from'./../image/file.png'
import polubione from'./../image/Polubione.png'
import udostepnione from'./../image/Udostepnione.png'
import ustawienia from'./../image/Ustawienia.png'
import kosz from'./../image/Kosz.png'
import userexmp from './../image/usexmp.png'
import {Menu, MenuHandler, MenuList, MenuItem, Button,} from "@material-tailwind/react";
import {Link} from 'react-router-dom'

const PUzytkPliki = () =>{
    return(
        <div className='flex h-screen'>
            {/*Menu*/}
            <div className="min-w-[5em] max-w-max h-[100%]">
                <div className="flex justify-center items-center w-[100%] bg-[#022DAA] h-screen">
                    {/*pasek boczny*/}
                    <div className="w-[100%]">
                        <ul className="space-y-5">
                            <li className="flex justify-center items-center rounded-sm px-0.5 py-3 cursor-pointer">
                                <button className="flex items-center justify-center pt-[10px] pb-[10px] w-[90%] hover:rounded-[5px] hover:bg-[#324E99]">
                                    <Link to={"/main"}>
                                        <img src={pliki} alt="pliki"/>
                                    </Link>
                                </button>
                            </li>

                            <li className="flex justify-center items-center rounded-sm px-0.5 py-3 cursor-pointer">
                                <button className="flex justify-center pt-[10px] pb-[10px] w-[90%] hover:rounded-[5px] hover:bg-[#324E99]">
                                    <Link to={"/favourite"}>
                                        <img src={polubione} alt="polubione"/>
                                    </Link>
                                </button>
                            </li>

                            <li className="flex justify-center items-center rounded-sm px-0.5 py-3 cursor-pointer ">
                                <button className="flex justify-center pt-[10px] pb-[10px] w-[90%] hover:rounded-[5px] hover:bg-[#324E99]">
                                    <Link to={"/favourite"}>
                                        <img src={udostepnione} alt="udostepnione"/>
                                    </Link>
                                </button>
                            </li>

                            <li className="flex justify-center items-center rounded-sm px-0.5 py-3 cursor-pointer ">
                                <button className="flex justify-center pt-[10px] pb-[10px] w-[90%] hover:rounded-[5px] hover:bg-[#324E99]">
                                    <Link to={"/favourite"}>
                                        <img src={ustawienia} alt="ustawienia"/>
                                    </Link>
                                </button>
                            </li>

                            <li className="flex justify-center items-center rounded-sm px-0.5 py-3 cursor-pointer   ">
                                <button className="flex justify-center pt-[10px] pb-[10px] w-[90%] hover:rounded-[5px] hover:bg-[#324E99]">
                                    <Link to={"/bin"}>
                                        <img src={kosz} alt="kosz"/>
                                    </Link>
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            {/*Search bar*/}
                <div className="w-screen h-[75px] flex border-b-2 border-gray-300 divide-x">
                    <div className="w-[70%] min-h-[4rem] bg-white h-[100%]">
                        <input type="text " placeholder='Wyszukaj' className='w-full h-full focus:outline-none pl-[10px] text-[20px]' />
                    </div>
                    <div className="flex pr-[10px] justify-end items-center w-[30%] min-h-[4rem] h-[100%]">
                        <Menu className='w-[50%]' animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },

                        }}>
                            <MenuHandler>
                                <Button variant="gradient"><img src={userexmp} alt={"user"}/></Button>
                            </MenuHandler>
                            <MenuList className="flex flex-col space-y-[3px] w-[10%] h-fit">
                                <MenuItem>Andrzej Ruchala</MenuItem>
                                <MenuItem><Link to={"/"}>Wyloguj</Link></MenuItem>
                            </MenuList>
                        </Menu>
                    </div>


                </div>




        </div>
    )
}

export default  PUzytkPliki
