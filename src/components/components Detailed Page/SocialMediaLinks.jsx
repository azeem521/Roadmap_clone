import React from 'react'
import { Link } from 'react-router-dom'

const SocialMediaLinks = () => {
    return (
        <div classNameName='mx-[6.5%] md:mx-[12%]'>

            <div className="absolute left-[18px] top-[110px] h-full" id="page-share-icons">
                <div className="flex sticky top-[100px] flex-col gap-1.5 items-center">
                    <Link
                        to="https://twitter.com/intent/tweet?text=Step by step guide to becoming a blockchain developer in 2023&amp;url=https://roadmap.sh/blockchain"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-700 mb-0.5"
                    >
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="23" height="23" rx="3" fill="currentColor"></rect>
                            <path
                                d="M12.9285 10.3522L18.5135 4H17.1905L12.339 9.5144L8.467 4H4L9.8565 12.3395L4 19H5.323L10.443 13.1754L14.533 19H19M5.8005 4.97619H7.833L17.1895 18.0718H15.1565"
                                fill="#E5E5E5"
                            ></path>
                        </svg>
                    </Link>
                    <Link
                        to="https://www.facebook.com/sharer/sharer.php?quote=Step by step guide to becoming a blockchain developer in 2023&amp;u=https://roadmap.sh/blockchain"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="currentColor"
                            className="h-[26px] w-[26px]"
                        >
                            <path
                                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                            ></path>
                        </svg>
                    </Link>
                    <Link
                        to="https://news.ycombinator.com/submitlink?t=Step by step guide to becoming a blockchain developer in 2023&amp;u=https://roadmap.sh/blockchain"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="currentColor"
                            className="h-[26px] w-[26px]"
                        >
                            <path
                                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.2 229.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z"
                            ></path>
                        </svg>
                    </Link>
                    <Link
                        to="https://www.reddit.com/submit?title=Step by step guide to becoming a blockchain developer in 2023&amp;url=https://roadmap.sh/blockchain"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="currentColor"
                            className="h-[26px] w-[26px]"
                        >
                            <path
                                d="M283.2 345.5c2.7 2.7 2.7 6.8 0 9.2-24.5 24.5-93.8 24.6-118.4 0-2.7-2.4-2.7-6.5 0-9.2 2.4-2.4 6.5-2.4 8.9 0 18.7 19.2 81 19.6 100.5 0 2.4-2.3 6.6-2.3 9 0zm-91.3-53.8c0-14.9-11.9-26.8-26.5-26.8a26.67 26.67 0 0 0-26.8 26.8c0 14.6 11.9 26.5 26.8 26.5 14.6 0 26.5-11.9 26.5-26.5zm90.7-26.8c-14.6 0-26.5 11.9-26.5 26.8 0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-11.9 26.8-26.5a26.67 26.67 0 0 0-26.8-26.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-99.7 140.6c-10.1 0-19 4.2-25.6 10.7-24.1-16.7-56.5-27.4-92.5-28.6l18.7-84.2 59.5 13.4c0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-12.2 26.8-26.8s-11.9-26.8-26.8-26.8c-10.4 0-19.3 6.2-23.8 14.9l-65.7-14.6c-3.3-.9-6.5 1.5-7.4 4.8l-20.5 92.8c-35.7 1.5-67.8 12.2-91.9 28.9-6.5-6.8-15.8-11-25.9-11-37.5 0-49.8 50.4-15.5 67.5-1.2 5.4-1.8 11-1.8 16.7 0 56.5 63.7 102.3 141.9 102.3 78.5 0 142.2-45.8 142.2-102.3 0-5.7-.6-11.6-2.1-17 33.6-17.2 21.2-67.2-16.1-67.2z"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaLinks