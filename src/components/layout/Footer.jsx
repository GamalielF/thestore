import React from 'react'

const Footer = () => {
    return (
        <footer className='relative pt-12 pb-8 bg-red-900/40 text-white-400'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap justify-center items-center gap-x-4'>
                    <div className='w-full md:w-1/2 lg:w-1/4 mb-8'>
                        <h3 className='text-lg font-bold mb-2'>Acerca de nosotros</h3>
                        <p className='text-sm'>Somos una tienda dedicada a ofrecer los mejores productos a nuestros clientes.</p>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4 mb-8'>
                        <h3 className='text-lg font-bold mb-2'>Contacto</h3>
                        <p className='text-sm'>Puedes ponerte en contacto con nosotros a través de nuestro correo electrónico o número de teléfono.</p>
                        <p className='text-sm mt-2'>Email: info@tienda.com</p>
                        <p className='text-sm'>Teléfono: +1 123 456 7890</p>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4 mb-8'>
                        <h3 className='text-lg font-bold mb-2'>Redes sociales</h3>
                        <ul className='flex gap-x-2'>
                            <li><a href='#' className='text-sm hover:text-white'>Facebook</a></li>
                            <li><a href='#' className='text-sm hover:text-white'>Instagram</a></li>
                            <li><a href='#' className='text-sm hover:text-white'>Twitter</a></li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4 mb-8'>
                        <h3 className='text-lg font-bold mb-2'>Newsletter</h3>
                        <p className='text-sm'>Suscríbete a nuestro boletín para recibir noticias y promociones exclusivas.</p>
                        <form className='mt-4'>
                            <input type='email' className='w-full bg-gray-800 border border-gray-700 py-2 px-3 rounded-md text-sm text-gray-400 focus:outline-none focus:border-gray-600' placeholder='Ingresa tu correo electrónico' />
                            <button type='submit' className='bg-yellow-500 text-gray-900 py-2 px-3 rounded-md text-sm font-bold mt-2 hover:bg-yellow-600 transition-colors'>Suscribirse</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
