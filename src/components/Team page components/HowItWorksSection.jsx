import React from 'react'

const HowItWorksSection = () => {
    return (
        <div class="hidden border-t py-12 sm:block">
            <div class="mx-[6.5%] md:mx-[12%]">
                <h2 class="mb-2 text-3xl font-bold">See how it works</h2>
                <p>Here is a sneak peek of what you can do today (more coming soon!)</p>
                <div class="relative mt-7 flex flex-row items-center gap-2.5">
                    <span class="rounded-full bg-black px-3 py-0.5 text-sm text-white"
                    >Roadmap Editor</span>



                    {
                        [1,2,3,4,5,6,7].map(num=>{
                            const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
                            return <span class="relative flex items-center" key={randomNumber}>
                                <span class="z-50 cursor-pointer rounded-full p-[6px] bg-gray-300 hover:bg-gray-400"
                            ></span><span
                                    class="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"
                                ></span></span>
                        })
                    }
                </div>
                <div class="mt-4 overflow-hidden rounded-xl border border-gray-300">
                    <div class="p-3">
                        <p class="text-base text-black">
                            <span class="font-semibold">Powerful editor</span> to create
                            custom roadmaps and other trackable documents
                        </p>
                    </div>
                    <img
                        class="rounded-b-xl border-t"
                        src="https://roadmap.sh/images/team-promo/roadmap-editor.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default HowItWorksSection