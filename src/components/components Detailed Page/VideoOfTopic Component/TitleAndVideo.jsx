import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { vdoData } from './DataOfVideos';

const TitleAndVideo = () => {
    let { id } = useParams();
    // console.log(id);
    // if(id==="tcp/ip-model-explained"){
    //     id = "tcp-ip-model"
    // }
    const item = vdoData.filter(itm => itm.id === id)[0];
    console.log(item);
    return (
        <div className="bg-white border-b pt-5 sm:pt-12">
            <div className="text-left sm:text-center">
                <p className="text-gray-400 hidden sm:flex items-center justify-start sm:justify-center"> <Link
                    to="https://twitter.com/kamrify" target="_blank"
                    className="font-medium hover:text-gray-600 inline-flex items-center hover:underline"> <img alt="Kamran Ahmed"
                        src="https://roadmap.sh/authors/kamranahmedse.jpeg" className="w-5 h-5 inline mr-2 rounded-full" /> Kamran Ahmed </Link> <span
                            className="mx-1.5">·</span> <span className="capitalize">Illustrated Video</span> </p>
                <h1 className="text-2xl sm:text-5xl my-0 sm:my-3.5 font-bold ml-6 sm:ml-0">{item.topic}</h1>
                <p className="hidden sm:block text-gray-400 text-md">{item.description}
                </p>
            </div>
            <div className="bg-gray-50 py-5 sm:py-10">
                <div
                    className="mx-[6.5%] md:mx-[12%]">
                    <iframe className="w-full aspect-video mb-5" src={`${item.vdoLink}`}
                        title={`${item.topic}`}></iframe> </div>
            </div>
        </div>
    )
}

export default TitleAndVideo