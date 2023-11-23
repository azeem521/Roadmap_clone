import React from 'react'

const BetaPricing = () => {
  return (
    <div className="border-t py-4 sm:py-8 md:py-12">
      <div className="mx-[6.5%] md:mx-[12%]">
        <h2
          className="mb-1 text-xl font-bold sm:mb-1.5 sm:text-2xl md:mb-2 md:text-3xl"
        >
          Beta Pricing
        </h2>
        <p className="mb-4 text-base text-gray-600 sm:mb-8 sm:text-lg">
          We are currently in public beta and are offering free access to all
          features.
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-4">
          <div
            className="relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-purple-500"
          >
            <div className="px-8 pb-2 pt-5 text-center sm:pt-4">
              <h3 className="mb-1 text-2xl font-bold">Free</h3>
              <p className="text-sm text-gray-500">No credit card required</p>
              <p className="flex items-start justify-center gap-1 py-6 text-3xl">
                <span className="text-base text-gray-600">$</span
                ><span className="text-5xl font-bold">0</span>
              </p>
              <a
                href="/signup"
                className="block rounded-md bg-purple-600 px-6 py-2 text-center text-sm font-medium leading-6 text-white shadow transition hover:bg-gray-700 hover:shadow-lg focus:outline-none"
                >Sign up for free</a
              >
            </div>
            <div
              className="flex w-full flex-col gap-1 border-t px-8 py-5 text-center sm:py-3"
            >
              <p className="font-semibold text-black">All the features</p>
              <p className="text-gray-600">Roles and Permissions</p>
              <p className="text-gray-600">Custom Roadmaps</p>
              <p className="text-gray-600">Sharing Options</p>
              <p className="text-gray-600">Progress Tracking</p>
              <p className="text-gray-600">Team Insights</p>
              <p className="text-gray-600">Onboarding support</p>
            </div>
          </div>
          <div
            className="flex flex-grow flex-col items-center justify-center rounded-md border border-gray-300 py-8"
          >
            <img
              alt="waving hand"
              src="https://roadmap.sh/images/team-promo/contact.png"
              className="mb-3 h-40"
            />
            <p className="mb-2 font-medium text-gray-500">
              Questions? We are here to help!
            </p>
            <p className="text-gray-600">
              <button
                className="relative flex items-center justify-between gap-3 overflow-hidden rounded-md border border-black bg-white px-4 py-2 text-black hover:bg-gray-100"
              >
                teams@roadmap.sh<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="relative top-[1px] ml-2 inline-block text-black transition-opacity"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path
                    d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                  ></path></svg
                ><span
                  className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black text-white transition-all top-full"
                  >Email copied!</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BetaPricing
