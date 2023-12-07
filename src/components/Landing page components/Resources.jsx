import React from 'react'
import { Link } from 'react-router-dom';

const Resources = ({ topicForGuide, resource, buttonTittle, description }) => {

  return (
    <div className={`grid grid-cols-1 gap-7 bg-gray-50 ${description ? "pt-7 mb-[-20px] sm:pt-16" : "py-7 sm:py-16"} pt-7 sm:gap-16`}>
      <div className={`${description ? 'pt-2' : "mx-[6.5%] md:mx-[12%] "}`}>
        <h1 className={`text-2xl ${description ? "mx-[6.5%] md:mx-[12%] sm:text-5xl" : "sm:text-3xl"} font-bold block`}>{resource}</h1>
        {description &&
          <p class={`text-gray-500 text-sm ${description && "mx-[6.5%] md:mx-[12%]"} pb-3 sm:pb-6 sm:text-lg`}>Succinct graphical explanations to engineering topics.</p>
        }
        <div className={`mt-3 ${description && "bg-gray-100 pb-20"} pt-2 ${description && "border-t border-b border-t-gray-300 border-b-gray-300"} sm:my-5`}>
          {
            topicForGuide.map((topic) => {
              const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
              const address = (() => {
                if (topic.title.includes(' ')) {
                  return topic.title.replace(/\s+/g, '-').toLocaleLowerCase()
                }
                return topic.title.toLocaleLowerCase()
              })()
              return (
                <Link key={randomNumber}
                  className={`block no-underline py-2 group text-md items-center text-gray-600 ${description && "mx-[6.5%] md:mx-[12%]"} hover:text-blue-600 flex justify-between border-b`}
                  to={`/${resource}/${address}`}
                >
                  <span className="group-hover:translate-x-2 transition-transform">
                    {topic.title}
                  </span>
                  <span className="capitalize text-gray-500 text-xs hidden sm:block">
                    {topic.time}
                  </span>
                  <span className="text-gray-400 text-xs block sm:hidden"> »</span>
                </Link>
              )
            })
          }
        </div>
        {buttonTittle && <Link
          to={`/${resource.toLowerCase()}`}
          className="hidden sm:inline transition-colors py-2 px-3 text-xs font-medium rounded-full bg-gradient-to-r from-slate-600 to-black hover:from-blue-600 hover:to-blue-800 text-white"
        >
          {buttonTittle} →
        </Link>}
        {buttonTittle && <div className="block sm:hidden mt-3">
          <Link
            to={`/${resource.toLowerCase()}`}
            className="text-sm font-regular block p-2 border border-black text-black rounded-md text-center hover:bg-black hover:text-gray-50"
          >
            {buttonTittle} &nbsp;→
          </Link>
        </div>}
      </div>
    </div>
  )
}

export default Resources