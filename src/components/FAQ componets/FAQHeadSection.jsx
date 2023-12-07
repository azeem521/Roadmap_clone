import React from 'react'
import { Link } from 'react-router-dom'

const FAQHeadSection = () => {
  return (
    <div className="bg-white border-b pt-7 pb-7 sm:pt-12 sm:pb-10">
    <div className="mx-[6.5%] md:mx-[12%">
      <div className="flex items-center"> <img src="https://roadmap.sh/authors/kamran.jpeg"
          className="h-[170px] aspect-1/1 w-[170px] rounded-full mr-6 hidden sm:block" alt="Kamran Ahmed" />
        <div>
          <h1 className="text-3xl sm:text-4xl mb-3 font-bold"> <span className="hidden sm:inline">Hello,</span>I am Kamran Ahmed
          </h1>
          <p className="text-gray-500 text-md mb-5">
            I created roadmap.sh to help developers find their path if they are
            confused and help them learn and grow in their career.
          </p>
          <p className="flex flex-col sm:flex-row gap-1.5"> <Link
              className="bg-blue-600 hover:bg-blue-700 font-medium text-white px-2 py-1.5 rounded-md inline-flex items-center"
              target="_blank" to="https://twitter.com/kamrify"> <span className="ml-1.5 mr-1">@kamrify</span> </Link> <Link
              className="bg-gray-500 hover:bg-gray-700 font-medium text-white px-3 py-1.5 rounded-md inline-flex items-center"
              target="_blank" to="mailto:kamranahmed.se@gmail.com">
              kamranahmed.se@gmail.com
            </Link> </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FAQHeadSection