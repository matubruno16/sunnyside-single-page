import { useState } from 'react'
import burgerMenu from '../assets/images/icon-hamburger.svg'


export const Navbar = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () =>{
          setOpen(!open)
  }

  return (
    <nav className=''>

        <ul className={`${open ? 'flex' : 'hidden'}  bg-white w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white z-10
        
         sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:mx-0 sm:right-0 sm:relative sm:h-3 sm:text-White
         
         md:w-[500px]`}>
            <li className='cursor-pointer hover:bg-Yellow hover:rounded-full w-[140px] h-[56px] grid place-content-center font-Fraunces text-Very-dark-grayish-blue hover:text-Very-dar-desaturated-blue text-xl  sm:text-White sm:font-Barlow sm:hover:uppercase  sm:hover:text-uppercase sm:hover:text-md sm:hover:bg-White '><a href="#">About</a></li>
            <li className='cursor-pointer hover:bg-Yellow hover:rounded-full w-[140px] h-[56px] grid place-content-center font-Fraunces text-Very-dark-grayish-blue hover:text-Very-dar-desaturated-blue text-xl  sm:text-White sm:font-Barlow  sm:hover:uppercase sm:hover:text-md sm:hover:bg-White'><a href="#">Services</a></li>
            <li className='cursor-pointer hover:bg-Yellow hover:rounded-full w-[140px] h-[56px] grid place-content-center font-Fraunces text-Very-dark-grayish-blue hover:text-Very-dar-desaturated-blue text-xl  sm:text-White sm:font-Barlow sm:hover:uppercase  sm:hover:text-uppercase sm:hover:text-md sm:hover:bg-White'><a href="#">Proyects</a></li>
            <li className='cursor-pointer hover:bg-Yellow hover:rounded-full w-[140px] h-[56px] grid place-content-center font-Fraunces text-Very-dark-grayish-blue hover:text-Very-dar-desaturated-blue text-xl  sm:text-White sm:font-Barlow sm:hover:uppercase  sm:hover:text-uppercase sm:hover:text-md sm:hover:bg-White'><a href="#">Contact</a></li>
        </ul>
        <div className='cursor-pointer sm:hidden'>
            <img 
                onClick={handleClick}
                src={burgerMenu}
                alt="Icono menu hamburgersa" />
        </div>
    </nav>
  )
}
