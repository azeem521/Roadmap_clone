import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = ({ heading,description,New}) => {
    return (
        <div><div className="bg-white border-b pt-6 pb-5 sm:pt-12 sm:pb-10  mx-[6.5%] md:mx-[12%]">
            <div className="container">
                {New && <div className="mb-4 hidden sm:block">
                    <Link
                        to="https://youtube.com/theroadmap?sub_confirmation=1"
                        target="_blank"
                        className="text-md hidden sm:flex items-center text-red-600 group hover:text-red-900"
                    >
                        <span
                            className="bg-red-600 group-hover:bg-red-800 group-hover: px-1.5 py-0.5 rounded-sm text-white text-xs uppercase font-medium mr-2"
                        >New</span>
                        <span className="underline mr-1"
                        >We also have a YouTube channel with visual content</span
                        >
                        <span>»</span>
                    </Link>
                </div> }
                <h1 className="text-3xl sm:text-5xl mb-1 sm:mb-2 font-bold">
                    {heading}
                </h1>
                <p className="text-gray-500 text-sm sm:text-lg">
                   {description}
                </p>
            </div>
        </div></div>
    )
}

export default HeroSection