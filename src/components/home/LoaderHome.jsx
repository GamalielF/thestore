import React from 'react'
import {ImSpinner} from 'react-icons/im'

const LoaderHome = () => {
    return (
        <section className='mx-auto h-3/4 flex flex-col justify-center gap-4'>
            <ImSpinner className='h-20 w-40 mx-auto text-blue-500 animate-spin' />

            <h4 className='text-xl text-gray-700 mx-auto p-5 text-center'>Cargando tus compras...</h4>
        </section>
    )
}

export default LoaderHome
