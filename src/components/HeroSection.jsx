import vide01 from "../assets/video1.mp4"
import vide02 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div id="HeroSection" className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl tracking-wide text-center h1 sm:text-6xl lg:text-7xl">
            VirtualR build tools 
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text">
                {""} for developers</span>
        </h1>
        <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500">
            Empower your creativity and bring your VR app ideas to life with our intutivedevelopment tools.
            Get started today and turn your imagination into immersive reality
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="px-4 py-3 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                Start for free
            </a>
            <a href="#" className="px-4 py-3 mx-3 border rounded-md">
                Documentation
            </a>
        </div>
        <div className="flex justify-center mt-10">
            <video autoPlay loop muted className="w-1/2 mx-2 my-4 border-orange-700 rounded-lg shadow-orange-400">
                <source src={vide01} type="video/mp4" />
                Your browser does not support the vdeo tag.
            </video>
            <video autoPlay loop muted className="w-1/2 mx-2 my-4 border-orange-700 rounded-lg shadow-orange-400">
                <source src={vide02} type="video/mp4" />
                Your browser does not support the vdeo tag.
            </video>
        </div>
    </div>
  );
}

export default HeroSection
