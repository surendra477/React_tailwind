import React from 'react'
import Button from '../components/Button';
import chrome from "../imgs/logo-chrome.svg";
import firefox from "../imgs/logo-firefox.svg";
import opera from "../imgs/logo-opera.svg";

function Download() {
    return (
        <div className="py-20 mt-20">
            <div className="sm:w-3/4 lg:w-5/2 mx-auto px-2">
                <h1 className="text-3xl text-center text-bookmark-purple">
                    Download the extension
                </h1>
                <p className="text-center text-bookmark-grey mt-4">
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to
                    prioritize.
                </p>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                {/* Cards  */}
                <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                    <div className="p-6 flex flex-col items-center">
                        <img src={chrome} alt=""></img>
                        <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
                            Add to Chrome
                        </h3>

                        <p className="mb-2 text-bookmark-grey font-light">
                            Minimum version 62
                        </p>
                    </div>
                    <hr className="border-b border-bookmark-white"></hr>

                    <div className="flex justify-center p-6">
                        <Button btncolor="btn-purple flex" bhhover="bg-bookmark-white" texthover="text-black" text="Add & Install Extension" />
                    </div>
                </div>
                <div className="flex flex-col rounded-md shadow-md lg:my-8">
                    <div className="p-6 flex flex-col items-center">
                        <img src={firefox} alt=""></img>
                        <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
                            Add to firefox
                        </h3>

                        <p className="mb-2 text-bookmark-grey font-light">
                            Minimum version 62
                        </p>
                    </div>
                    <hr className="border-b border-bookmark-white"></hr>

                    <div className="flex justify-center p-6">
                        <Button btncolor="btn-purple flex" bhhover="bg-bookmark-white" texthover="text-black" text="Add & Install Extension" />
                    </div>
                </div>
                <div className="flex flex-col rounded-md shadow-md lg:mt-16">
                    <div className="p-6 flex flex-col items-center">
                        <img src={opera} alt=""></img>
                        <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">
                            Add to Opera
                        </h3>

                        <p className="mb-2 text-bookmark-grey font-light">
                            Minimum version 62
                        </p>
                    </div>
                    <hr className="border-b border-bookmark-white"></hr>

                    <div className="flex justify-center p-6">
                        <Button btncolor="btn-purple flex" bhhover="bg-bookmark-white" texthover="text-black" text="Add & Install Extension" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download
