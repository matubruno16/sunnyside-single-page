import imgMobile from '../assets/images/mobile/image-header.jpg'
import imgDesktop from '../assets/images/mobile/image-header.jpg'


export const Main = () => {
  return (
    <main>
        <picture>
            <source media="(max-width:640px)" src={imgMobile}/>
            <source media="(min-width:641px)" src={imgDesktop}/>
            <source />
            <img src={imgMobile} alt="Background Header" />
        </picture>      
    </main>
  )
}
