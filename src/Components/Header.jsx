import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='absolute max w-full px-6 pt-8 flex place-content-between items-center '>
    
        <img
            src={logo} 
            alt="Logo SUNNYSIDE" 
        />
            
        <Navbar />
    </header>
  )
}
