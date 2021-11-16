import React from 'react'
import Button from '../components/Button'
import hero from "../imgs/hero-bg.png"
function Hero() {
    return (
        <div className="relative">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div className="flex flex-1 flex-col items-center lg:items-center">
                <h2 className="text-bookmark-purple text-3x1 md:text-4 lg:text-5xl text-container lg:text-left mb-6">
                    A Simple Bookmark Manager
                </h2>
                <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
                load instantly. Try it for free.
                </p>
                <div className="flex justify-center flex-wrap gap-6">
                <Button  btncolor="btn-purple" bhhover="bg-bookmark-white" texthover="text-black" text="Get it on Chrome" />
                <Button  btncolor="btn-white" bhhover="bg-bookmark-purple" texthover="text-white" text="Get it on Firefox" />
                </div>
                </div>

                <div className="flex justify-center flex-1 mb-10 md:mb-16 z-10">
                    <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:h-full md:w-full" src={hero} alt=""></img>
                </div>
            </div>
            <div className="hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-1/3 top-32 right-0 lg:-bottom-1 ">

            </div>

            
        </div>
    )
}

export default Hero
