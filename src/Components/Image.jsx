/* eslint-disable react/prop-types */


export const Image = ({order="", imgMobile, imgDesktop}) => {
  return (
    <picture className={order} >
        <source media="(max-width:639px)" srcSet={imgMobile}/>
        <source media="(min-width:639px)" srcSet={imgDesktop}/>
        <img src={imgMobile} alt="Imagen Servicios" />
    </picture>
  )
}
