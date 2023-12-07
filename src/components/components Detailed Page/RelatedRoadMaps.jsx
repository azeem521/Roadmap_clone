import React from 'react'
import { detailedPageData } from './dataForDetail';
import { Link } from 'react-router-dom';

const RelatedRoadMaps = () => {

    const getRandomElementsFromArray = (arr, numElements) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numElements);
    }

    const randomElements = getRandomElementsFromArray(detailedPageData, 5);
    console.log(randomElements);

    return (
        <div className="border-t bg-gray-100">
            <div className="mx-[6.5%] md:mx-[12%] ">
                <div className="relative -top-5 flex justify-between">
                    <span
                        className="text-md flex items-center rounded-md border bg-white px-3 py-1 font-medium"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17px"
                        height="17px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-black mr-1.5"
                    >
                            <polygon
                                points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"
                            ></polygon>
                            <line x1="9" x2="9" y1="3" y2="18"></line>
                            <line x1="15" x2="15" y1="6" y2="21"></line>
                        </svg>
                        Related Roadmaps </span
                    >
                    <Link
                        to="/roadmaps"
                        className="text-md rounded-md border bg-white px-3 py-1 font-medium hover:bg-gray-50"
                    ><span className="hidden sm:inline">All Roadmaps →</span
                    ><span className="inline sm:hidden">More →</span></Link
                    >
                </div>
                {
                    randomElements.map(item => {
                        const min = 10000000;
                        const max = 99999999;
                        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                      
                        return (
                            <div className="flex flex-col gap-1 pb-1" key={randomNum}>
                                <Link
                                    to={`/${item.id}`}
                                    className="flex flex-col gap-0.5 rounded-md border bg-white px-3.5 py-2 hover:bg-gray-50 sm:flex-row sm:gap-0"
                                ><span className="inline-block min-w-[150px] font-medium"
                                >{item.mainHeading.split(' ')[0]}</span
                                    ><span className="text-gray-500"
                                    >
                                        {item.description}
                                        </span
                                    ></Link
                                >
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RelatedRoadMaps
