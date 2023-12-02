import React from 'react'
import { Link } from 'react-router-dom'


const RoleBaseRoadmapHero = ({topics,mainHeading,createNew}) => {
  return (
    <div class="relative border-b border-b-[#1e293c] py-10 sm:py-14">
      <div class="flex flex-wrap items-center justify-center">
        <h2
          class="text-md font-regular absolute -top-[17px] flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2"
        >
          {mainHeading}
        </h2>
        <ul class="grid grid-cols-1 gap-2 w-[75vw] sm:grid-cols-2 md:grid-cols-3">
          {
            topics.map(topic => {
              const address = (() => {
                if (topic.title.includes(' ')) {
                  return topic.title.replace(/\s+/g, '-').toLocaleLowerCase()
                }
                return topic.title.toLocaleLowerCase()
              })()
              return <li key={address}>
                <Link
                  className="group border border-slate-800 bg-slate-900 p-2.5 sm:p-3.5 block no-underline rounded-lg relative text-slate-400 font-regular text-md hover:border-slate-600 hover:text-slate-100 overflow-hidden"
                  to={address}
                >
                  <span className="relative z-20 text-slate-400"> {topic.title} </span>
                  {mainHeading !== 'Questions' && <astro-island
                    uid="ZGdC8e"
                    component-url="/_astro/MarkFavorite.e8682adc.js"
                    component-export="MarkFavorite"
                    renderer-url="/_astro/client.fc59b24d.js"
                    props={`resourceId:[0,${topic.title}],resourceType:[0,roadmap]`}
                    client="only"
                    opts='{"name":"MarkFavorite","value":"react"}'
                  ><button
                    aria-label="Add to favorites"
                    tabindex="-1"
                    className="opacity-30 hover:opacity-100 absolute right-1.5 top-1.5 z-30 focus:outline-0"
                  >
                      <svg
                        width="8"
                        height="10"
                        viewBox="0 0 8 10"
                        fill="none"
                        className="h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.93682 0.5H2.06282C1.63546 0.500094 1.22423 0.663195 0.912987 0.956045C0.601741 1.2489 0.413919 1.64944 0.387822 2.076L0.00182198 8.461C-0.012178 8.6905 0.0548218 8.9185 0.191822 9.104L0.242322 9.1665C0.575322 9.5485 1.15132 9.6165 1.56582 9.31L3.99982 7.5115L6.43382 9.31C6.58413 9.42115 6.76305 9.48708 6.94954 9.50006C7.13603 9.51303 7.32235 9.4725 7.4866 9.38323C7.65085 9.29397 7.78621 9.15967 7.87677 8.99613C7.96733 8.83258 8.00932 8.64659 7.99782 8.46L7.61232 2.0765C7.58622 1.64981 7.39835 1.24914 7.08701 0.956192C6.77567 0.663248 6.36431 0.500094 5.93682 0.5ZM5.93682 1.25C6.42732 1.25 6.83382 1.632 6.86382 2.122L7.24932 8.506C7.25216 8.55018 7.24229 8.59425 7.22089 8.63301C7.19949 8.67176 7.16745 8.70359 7.12854 8.72472C7.08964 8.74585 7.0455 8.75542 7.00134 8.75228C6.95718 8.74914 6.91484 8.73343 6.87932 8.707L4.27582 6.783C4.19591 6.72397 4.09917 6.69211 3.99982 6.69211C3.90047 6.69211 3.80373 6.72397 3.72382 6.783L1.11982 8.707C1.0843 8.73343 1.04196 8.74914 0.9978 8.75228C0.953639 8.75542 0.909502 8.74585 0.8706 8.72472C0.831697 8.70359 0.799653 8.67176 0.778252 8.63301C0.756851 8.59425 0.746986 8.55018 0.749822 8.506L1.13632 2.122C1.16632 1.632 1.57232 1.25 2.06282 1.25H5.93682Z"
                          fill="currentColor"
                        ></path>
                      </svg></button
                    ></astro-island>}
                  {
                    topic.new && <span
                      className="absolute bottom-1.5 right-2 flex items-center rounded-br rounded-tl text-xs font-medium text-purple-300"
                    >
                      <span className="mr-1.5 flex h-2 w-2">
                        <span
                          className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75"
                        ></span>
                        <span
                          className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"
                        ></span>
                      </span>
                      New
                    </span>
                  }
                  <span
                    data-progress=""
                    className="absolute bottom-0 left-0 top-0 z-10 w-0 bg-[#172a3a] transition-[width] duration-300"
                  ></span>
                </Link>
              </li>
            })
          }
          {createNew && <li>
            <astro-island
              uid="Z2vj2g2"
              prefix="r4"
              component-url="/_astro/CreateRoadmapButton.2d2ed890.js"
              component-export="CreateRoadmapButton"
              renderer-url="/_astro/client.fc59b24d.js"
              props='{"className":[0,"min-h-[54px]"]}'
              client="load"
              opts='{"name":"CreateRoadmapButton","value":true}'
              await-children=""
            ><button
              class="flex h-full w-full items-center justify-center gap-1 overflow-hidden rounded-md border border-dashed border-gray-800 p-3 text-sm text-gray-400 hover:border-gray-600 hover:bg-gray-900 hover:text-gray-300 min-h-[54px]"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-plus"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path></svg
                >Create your own Roadmap
              </button></astro-island
            >
          </li>}
        </ul>
      </div>
    </div>
  )
}

export default RoleBaseRoadmapHero