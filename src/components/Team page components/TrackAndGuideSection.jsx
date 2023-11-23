import React from 'react'

const TrackAndGuideSection = ({data}) => {
  return (
    <div className="py-4 sm:py-8 md:py-12 border-t">
    <div className="mx-[6.5%] md:mx-[12%]">
      <h2 className="mb-1 sm:mb-1.5 md:mb-2 text-xl sm:text-2xl md:text-3xl font-bold">
        Track and guide your team’s knowledge
      </h2>
      <p className="text-sm md:text-base">
        Individual and team level growth plans, progress tracking, skill gap
        analysis, team insights and more.
      </p>
      <div className="mt-3 sm:mt-5 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {data.map(item=>{
            const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
            return <div key={randomNumber}
            className="rounded-md sm:rounded-xl border p-2 sm:p-5 text-left sm:text-center md:text-left">
            <img
              alt={`${item.title}`}
              src={`${item.imgUrl}`}
              className="mb-5 h-48 hidden sm:block mx-auto md:mx-0" />
            <h3 className="mb-0.5 sm:mb-2 text-lg sm:text-2xl font-bold">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base">
              {item.description}
            </p>
          </div>
        })}
          </div>
      </div>
    </div>
  )
}

export default TrackAndGuideSection