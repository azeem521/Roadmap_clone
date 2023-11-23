import React from 'react'

const HeroSectionTeam = () => {
  return (
    <div class="bg-white py-8 mx-[6.5%] md:mx-[12%] lg:py-12">
      <div class="container">
        <div
          class="flex flex-row items-center justify-start text-left lg:justify-between"
        >
          <div class="flex flex-grow flex-col">
            <h1
              class="mb-0.5 text-2xl font-bold sm:mb-2.5 sm:text-4xl lg:mb-4 lg:text-5xl"
            >
              Roadmaps for Teams
            </h1>
            <p
              class="mb-4 text-base leading-normal text-gray-600 sm:mb-0 sm:leading-none lg:text-lg"
            >
              Train, plan and track your team's skills and career growth.
            </p>
            <ul
              class="mb-4 mt-0 hidden text-sm leading-7 sm:mb-4 sm:mt-4 sm:flex sm:flex-col lg:mb-6 lg:mt-6 lg:text-base lg:leading-8"
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="hidden h-6 w-6 text-green-500 sm:inline-block"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path></svg
                ><span class="ml-0 sm:ml-2"
                  >Create custom roadmaps for your team</span
                >
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="hidden h-6 w-6 text-green-500 sm:inline-block"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path></svg
                ><span class="ml-0 sm:ml-2"
                  >Plan, track and document your team's skills and growth</span
                >
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="hidden h-6 w-6 text-green-500 sm:inline-block"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path></svg
                ><span class="ml-0 sm:ml-2">Invite your team members</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="hidden h-6 w-6 text-green-500 sm:inline-block"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path></svg
                ><span class="ml-0 sm:ml-2"
                  >Get insights on your team's skills and growth</span
                >
              </li>
            </ul>
            <div
              class="flex flex-col items-start gap-2 sm:flex-row sm:items-center"
            >
              <a
                href="/signup"
                class="flex w-full items-center justify-center rounded-lg border border-transparent bg-purple-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 sm:w-auto sm:text-base"
                >Create your Team</a
              ><span class="ml-1 hidden text-base sm:inline"
                >or &nbsp;<a
                  href="/login"
                  class="text-purple-600 underline hover:text-purple-700"
                  >Login to your account</a
                ></span
              ><a
                href="/login"
                class="flex w-full items-center justify-center rounded-lg border border-purple-600 px-5 py-2 text-base text-sm font-medium text-purple-600 hover:bg-blue-700 sm:hidden sm:text-base"
                >Login to your account</a
              >
            </div>
          </div>
          <img
            alt="team roadmaps"
            class="hidden h-64 md:block lg:h-80"
            src="https://roadmap.sh/images/team-promo/hero-img.png"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSectionTeam