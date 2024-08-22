import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div id="Testimonials" className="mt-10 tracking-wide">
        <div className="text-center">
        <span className="h-6 px-2 py-1 text-sm font-medium text-orange-500 uppercase rounded-full bg-neutral-900">testimonials</span>
        </div>
        <h2 className="my-10 text-3xl text-center sm:text-5xl lg:text-6xl lg:my-20">
            What people are saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
                    <div className="p-6 font-thin border rounded-md bg-neutral text-md border-neutral-800">
                        <p>{testimonial.text}</p>
                        <div className="flex items-start mt-8">
                            <img className="w-12 h-12 mr-6 rounded-full border-neutral-300 " src={testimonial.image} alt={testimonial.user} />
                            <div>
                                <h6>{testimonial.user}</h6>
                                <span className="text-sm italic font-normal text-neutral-600">{testimonial.company}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Testimonials
