import React from 'react'
import style from './Header.module.css'
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
const Header = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style.input}>
           <i><CiSearch /></i>
            <input type="text" placeholder='Search' />
        </div>
        <div>
            <span>Shoppers</span>
        </div>
        <div className={ style.iconbox}>
            <i><IoMdPerson /></i>
            <i><FaHeart /></i>
            <span>2</span>
            <i><FaCartShopping /></i>
        </div>
    </div>
    <div className={style.navbar}>
        <i><FaBars /></i>
        <nav>
            <ul>
                <li className={style.drop}><a href="">Home</a>
                <div className={style.dropdown}>
                    <ul>
                        <li><a href="">Menu One</a></li>
                        <li><a href="">Menu Two</a></li>
                        <li><a href="">Menu Three</a></li>
                        <li><a href="">Sub Menu</a></li>
                    </ul>
                </div>
                </li>
                <li><a href="">About</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Catalog</a></li>
                <li><a href="">New Arrivals</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Header