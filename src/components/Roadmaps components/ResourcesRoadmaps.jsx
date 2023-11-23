import React from 'react'
import { Link } from 'react-router-dom'

const ResourcesRoadmaps = ({ topics }) => {
  return (
    <div className="flex bg-gray-100 pt-4 pb-14 sm:pt-8 sm:pb-16">
      <div className="container mx-[6.5%] md:mx-[12%]">
        <div class="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3">
          {
            topics.map(topic => {
              const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
              const address = (() => {
                if (topic.title.includes(' ')) {
                  return topic.title.replace(/\s+/g, '-').toLocaleLowerCase()
                }
                return topic.title.toLocaleLowerCase()
              })();
              return (
                <Link
                  key={randomNumber}
                  to={`/${address}`}
                  className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
                >
                  <span
                    className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl"
                  >
                    {topic.title}
                  </span>
                  <span className="hidden text-sm leading-normal text-gray-400 sm:block"
                  >{topic.description}</span>
                  {topic.new && <span
                    className="flex items-center gap-1.5 absolute bottom-1.5 right-1 rounded-sm text-xs font-semibold uppercase text-purple-500 sm:px-1.5"
                  >
                    <span className="relative flex h-2 w-2">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"
                      ></span>
                      <span
                        className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"
                      ></span>
                    </span>
                    New
                  </span>}
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default ResourcesRoadmaps