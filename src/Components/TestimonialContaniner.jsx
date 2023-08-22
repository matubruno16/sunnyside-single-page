import { Testimonial } from "./Testimonial"
import testimonio1 from '../assets/images/image-emily.jpg'
import testimonio2 from '../assets/images/image-thomas.jpg'
import testimonio3 from '../assets/images/image-jennie.jpg'

export const TestimonialContaniner = () => {
  return (
    <section className="bg-White pt-16">
        <h2 className=" text-Dark-grayish-blue text-center uppercase font-Fraunces mb-16">Client Testimonials</h2>
        <div className="md:flex md:w-[900px] md:mx-auto xl:w-[1200px]">
            <Testimonial 
                img={testimonio1}
                testimonial='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
                name='Emily R.'
                position='Marketing Director'
            />
            <Testimonial 
                img={testimonio2}
                testimonial=' Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
                name='Thomas S.'
                position='Chief Operating Officer'
            />
            <Testimonial 
                img={testimonio3}
                testimonial='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
                name='Jennie F.'
                position='Business Owner'
            />
        </div>
    </section>
  )
}
