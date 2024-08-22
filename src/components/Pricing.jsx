import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <div id="Pricing" className="mt-20 ">
        <div className="text-center">
        <span className="h-6 px-2 py-1 text-sm font-medium text-orange-500 uppercase rounded-full bg-neutral-900">pricing</span>
        </div>
        
        <h2 className="my-8 text-3xl tracking-wider text-center sm:text-5xl lg:text-6xl">
             Pricing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
                <div key={index} className="w-full p-2 sm:w-1/2 lg:w-1/3">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="mb-8 text-4xl">
                            {option.title}
                            {option.title === "Pro" && (<span className="mb-4 ml-2 text-xl text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text">
                                (Most Popular)</span>
                            ) }
                        </p>
                        <p className="mb-8">
                            <span className="mt-6 mr-2 text-5xl">{option.price}</span>
                            <span className="tracking-tight text-neutral-400">/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index} className="flex items-center mt-8">
                                    <CheckCircle2 />
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex items-center justify-center w-full h-12 p-5 mt-20 text-xl tracking-tight text-center transition duration-200 border border-orange-900 rounded-lg hover:bg-orange-900"
                        >
                            Subscribe
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing
