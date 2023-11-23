import React from 'react'
import { Link } from 'react-router-dom'

const Community = () => {
    return (
        <div className="py-6 sm:py-16 border-b flex items-center justify-center border-t text-left sm:text-center bg-white"> <div className="!max-w-[600px] mx-[6.5%] md:mx-[12%]"> <p className="text-2xl sm:text-5xl font-bold">Community</p> <p className="text-gray-600 text-sm sm:text-lg leading-relaxed my-2.5 sm:my-5">
            roadmap.sh is the <Link to="https://github.com/search?o=desc&amp;q=stars%3A%3E100000&amp;s=stars&amp;type=Repositories" target="_blank" rel="noreferrer" className="font-medium text-gray-600 hover:text-black underline underline-offset-2">6th most starred project on GitHub</Link> and is visited by hundreds of thousands of developers every month.
        </p> <div className="flex justify-start flex-col sm:flex-row sm:justify-center gap-2 sm:gap-3 mb-1.5 sm:mb-0"> <Link to="https://github.com/kamranahmedse/developer-roadmap" target="_blank" rel="noreferrer" className="inline-flex items-center border border-black py-1.5 px-3 rounded-lg text-sm hover:text-white hover:bg-black bg-white"> <svg className="mr-1 -ml-1 fill-current" focusable="false" width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99999 11.1515L2.88574 13.4545L3.80449 8.82984L0.342407 5.6285L5.02482 5.07317L6.99999 0.791504L8.97516 5.07317L13.6576 5.6285L10.1955 8.82984L11.1142 13.4545L6.99999 11.1515Z"></path>
        </svg> <span className="lowercase">258K</span> <span className="ml-2 hover:block">GitHub Stars</span> </Link> <Link to="https://discord.gg/cJpEt5Qbwa" target="_blank" rel="noreferrer" className="relative pointer inline-flex items-center border border-black py-1.5 px-3 rounded-lg text-sm hover:text-white hover:bg-black bg-white group"> <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[14px] mr-2 -ml-1 fill-current">
            <g clip-path="url(#clip0_1303_4)">
                <path d="M2.79481 1.71886C2.80349 1.70994 2.81651 1.70101 2.82953 1.68762C3.86686 0.830474 5.25576 0.392973 6.23667 0.183152C7.20455 -0.0266694 8.17242 0.540293 8.48492 1.50012C8.48925 1.51798 8.49792 1.53136 8.5023 1.54922C6.87467 1.71886 5.42067 2.17869 4.24013 2.89744C3.93196 3.08494 3.83214 3.49565 4.01443 3.81708C4.13596 4.0269 4.35296 4.14298 4.57434 4.14298C4.68717 4.14298 4.80438 4.11172 4.90855 4.04923C6.23667 3.23672 7.9988 2.80815 9.99967 2.80815C12.0005 2.80815 13.7627 3.23672 15.0908 4.04923C15.4033 4.23673 15.8026 4.13404 15.9849 3.81708C16.1672 3.49565 16.0674 3.08494 15.7592 2.89744C14.5787 2.17869 13.1247 1.71886 11.4971 1.54922C11.5014 1.53136 11.5101 1.51798 11.5144 1.50012C11.8269 0.540293 12.7948 -0.0266694 13.7627 0.183152C14.7436 0.392973 16.1325 0.830474 17.1698 1.68762C17.1828 1.70101 17.1958 1.70994 17.2045 1.71886C18.1681 2.63851 19.9476 7.31707 19.9476 11.5671C19.9476 11.6831 19.9215 11.7947 19.8651 11.8974C18.8061 13.8126 16.3104 14.5135 15.2818 14.7233C15.1559 14.7501 15.03 14.7635 14.9042 14.7635C14.2879 14.7635 13.6933 14.4599 13.3243 13.9331L13.0986 13.6162C15.3339 13.0715 16.4797 12.0894 16.5448 12.0314C16.8183 11.7903 16.853 11.3707 16.6186 11.0894C16.3842 10.8082 15.9763 10.7724 15.7028 11.009C15.6681 11.0403 13.754 12.6341 9.99967 12.6341C6.22796 12.6341 4.31392 11.0269 4.29655 11.009C4.02311 10.7724 3.61078 10.8082 3.38075 11.0939C3.15071 11.3751 3.1811 11.7947 3.45453 12.0314C3.51964 12.0894 4.66546 13.0715 6.90071 13.6162L6.67501 13.9331C6.30609 14.4599 5.71146 14.7635 5.09517 14.7635C4.9693 14.7635 4.84342 14.7501 4.71755 14.7233C3.68891 14.5135 1.19325 13.8126 0.134222 11.8974C0.0777986 11.7947 0.0517578 11.6831 0.0517578 11.5671C0.0517578 7.31707 1.83127 2.63851 2.79481 1.71886ZM12.8078 10.3573C13.6368 10.3573 14.3096 9.56707 14.3096 8.58941C14.3096 7.61171 13.6368 6.82156 12.8078 6.82156C11.9745 6.82156 11.3018 7.61171 11.3018 8.58941C11.3018 9.56707 11.9745 10.3573 12.8078 10.3573ZM7.20455 10.393C8.04221 10.393 8.72363 9.59386 8.72363 8.60724C8.72363 7.62067 8.04221 6.82156 7.20455 6.82156C6.36251 6.82156 5.68542 7.62067 5.68542 8.60724C5.68542 9.59386 6.36251 10.393 7.20455 10.393Z" fill="currentColor"></path>
            </g>
            <defs>
                <clipPath id="clip0_1303_4">
                    <rect width="20" height="15" fill="currentColor"></rect>
                </clipPath>
            </defs>
        </svg>
                    Join on Discord
                </Link> </div></div> </div>
    )
}

export default Community