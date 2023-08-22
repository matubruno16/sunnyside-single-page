/* eslint-disable react/prop-types */


export const Testimonial = ({img,testimonial, name, position}) => {
  return (
    <div className="flex flex-col items-center text-center mb-16">
        <img
            className="w-20 rounded-full" 
            src={img}
            alt="imagen testimonio" />
        <p className="my-8 font-Barlow text-Very-dark-grayish-blue px-4 max-w-[400px]">{testimonial}</p>
        <h3 className="font-Fraunces text-[18px] text-Very-dar-desaturated-blue">{name}</h3>
        <p className=" text-Dark-grayish-blue blue font-Barlow text-[14px]">{position}</p>
    </div>
  )
}
