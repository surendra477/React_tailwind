import React from 'react'
import Button from '../components/Button';
import illustration from "../imgs/illustration-features-tab-1.png";
import illustration1 from "../imgs/illustration-features-tab-2.png";
import illustration2 from "../imgs/illustration-features-tab-3.png";
function Features() {
    return (
        <div className="bg-bookmark-white py-20 mt-20 lg:mt-60">
            <div className="sm:w-3/4 lg:w-5/2 mx-auto px-2">
                <h1 className="text-3xl text-center text-bookmark-purple">
                    Features
                </h1>
                <p className="text-center text-bookmark-grey mt-4">
                    Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your device so you can access them on the go.
                </p>
            </div>

            {/* Features */}

            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:h-full md:w-full" src={illustration} alt=""></img>
                    </div>
                

                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl text-bookmark-purple">Bookmark in one click</h1>
                    <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                    Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control
              over how you manage your favourite sites.                </p>
                    <Button btncolor="btn-purple" bhhover="bg-bookmark-white" texthover="text-black" text="More info" />
                </div>
            </div>
            <div className="hidden md:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-1/3 -bottom-24 -left-0">

            </div>
        </div>
 {/* Features 2*/}

        <div className="relative mt-20 lg:mt-52">
                <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:h-full md:w-full" src={illustration1} alt=""></img>
                    </div>
                

                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl text-bookmark-purple">Intelligent search</h1>
                    <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                    Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all
              of your bookmarks.                </p>
                    <Button btncolor="btn-purple" bhhover="bg-bookmark-white" texthover="text-black" text="More info" />
                </div>
            </div>
            <div className="  hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-l-full
            absolute
            h-80
            w-1/3
            -bottom-24
            -right-0">

            </div>
        </div>

         {/* Features 2*/}

         <div className="relative mt-20 lg:mt-52">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:h-full md:w-full" src={illustration2} alt=""></img>
                    </div>
                

                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl text-bookmark-purple">Share your bookmarks</h1>
                    <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                    Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
              click of a button.              </p>
                    <Button btncolor="btn-purple" bhhover="bg-bookmark-white" texthover="text-black" text="More info" />
                </div>
            </div>
            <div className="hidden md:block overflow-hidden bg-bookmark-purple rounded-r-full absolute h-80 w-1/3 -bottom-24 -left-0">

            </div>
        </div>

        </div>
    )
}

export default Features
