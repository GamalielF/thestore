import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { changeIsShowCart } from '../../store/slices/cart.slice'

const Header = () => {
    const {token} = useSelector(store => store.userInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickChangeShowCart = () => {
        if(!token) return navigate("/login")
        dispatch(changeIsShowCart())
    }

    return (
        <header className='fixed top-0 left-0 right-0 h-16 z-20 flex items-center justify-between text-white bg-blue-800'>
            <Link to={"/"} className='text-lg  xl:text-2xl ml-9 md:ml-8 md:text-3xl font-bold text-gray-100'>
                <h1 className='tracking-tight'>The<span className='text-green-300'>Store</span></h1>
            </Link>

            <nav className='h-full grid grid-cols-3'>
                <Link to={"/login"} className='px-3 xs:px-6 text-md md:text-xl xl:text-2xl flex justify-center items-center gap-2 border-r border-gray-400'>
                    <i className='bx bx-user'></i>
                    <h2 className='hidden md:block text-base'>Login</h2>
                </Link>

                <Link to={"/purchases"} className='px-3 xs:px-6 text-md md:text-xl xl:text-2xl flex justify-center items-center gap-2 border-r border-gray-400'>
                    <i className='bx bx-receipt'></i>
                    <h2 className='hidden md:block text-base'>Orders</h2>
                </Link>

                <button onClick={handleClickChangeShowCart} className='px-3 xs:px-6 text-md md:text-xl xl:text-2xl grid items-center justify-center'>
                    <i className='bx bx-cart'></i>
                </button>
            </nav>
        </header>
    )
}

export default Header
