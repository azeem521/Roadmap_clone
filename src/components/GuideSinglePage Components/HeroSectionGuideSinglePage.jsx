import React from 'react'
import { Link } from 'react-router-dom'

const HeroSectionGuideSinglePage = () => {
    return (
        <div className="bg-white border-b py-5 sm:py-12">
            <div className="mx-[6.5%] md:mx-[12%] text-left sm:text-center">
                <p className="text-gray-400 hidden sm:flex items-center justify-start sm:justify-center"> <Link
                    to="https://twitter.com/kamrify" target="_blank"
                    className="font-medium hover:text-gray-600 inline-flex items-center hover:underline"> <img alt="Kamran Ahmed"
                        src="https://roadmap.sh/authors/kamranahmedse.jpeg" className="w-5 h-5 inline mr-2 rounded-full" /> Kamran Ahmed </Link> <span
                            className="mx-1.5">·</span> <span className="capitalize">textual Guide</span> <span className="mx-1.5">·</span> <Link
                                className="text-blue-400 hover:text-blue-500 hover:underline"
                                to="https://github.com/kamranahmedse/developer-roadmap/tree/master/src/data/guides/free-resources-to-learn-llms.md"
                                target="_blank">Improve this Guide</Link> </p>
                <h1 className="text-2xl sm:text-5xl my-0 sm:my-3.5 font-bold"> 5 Free Resources to Master LLMs </h1>
                <p className="hidden sm:block text-gray-400 text-xl"> Dive into the world of LLMs with these free resources </p>
            </div>
        </div>
    )
}

export default HeroSectionGuideSinglePage