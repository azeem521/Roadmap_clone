import React from 'react'
import { Link } from 'react-router-dom'

const HeroHeader = () => {
  return (
    <div
      className="min-h-auto relative min-h-[192px] border-b border-b-[#1e293c]  sm:min-h-[281px] transition-all flex justify-center"
    >
      <div
        className="container px-5 py-6 pb-14 text-left transition-opacity duration-300 sm:px-0 sm:py-20 sm:text-center"
        id="hero-text"
      >
        <p className="-mt-4 sm:-mt-10 mb-7">
          <Link
            className="rounded-md border border-dashed border-purple-700 px-3 py-1.5 text-purple-400 transition-colors hover:border-gray-700 hover:text-white"
            to="/teams"
            ><span
              className="relative -top-[0.5px] mr-1 text-xs font-semibold uppercase text-white"
              >New</span>
            <span className="hidden sm:inline"
              >Announcing roadmaps for teams.
              <span className="font-semibold">Learn more!</span></span
            ><span className="inline sm:hidden"
              >Announcing roadmaps for teams!</span
            ></Link>
        </p>
        <h1
          className="mb-2 bg-gradient-to-b from-amber-50 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:mb-4 sm:text-5xl"
        >
          Developer Roadmaps
        </h1>
        <p className="hidden px-4 text-lg text-gray-400 mx-[6.5%] md:mx-[12%] sm:block">
          <span className="font-medium text-gray-400">roadmap.sh</span> is a
          community effort to create roadmaps, guides and other educational
          content to help guide developers in picking up a path and guide their
          learnings.
        </p>
        <p className="text-md block px-0 text-gray-400 sm:hidden">
          Community created roadmaps, guides and articles to help developers
          grow in their career.
        </p>
      </div>
    </div>
  )
}

export default HeroHeader