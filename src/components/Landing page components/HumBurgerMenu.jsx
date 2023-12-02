import React from 'react'
import { Link } from 'react-router-dom';

const HumBurgerMenu = ({ showBurgerMenuFunction }) => {
    const arrayOfData = [
        'Roadmaps',
        'Best Practices',
        'Guides',
        'Videos',
    ]
    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-40 flex items-center bg-slate-900" data-mobile-nav="">
            <button data-close-mobile-nav="" className="absolute right-6 top-6 block cursor-pointer text-gray-400 hover:text-gray-50" aria-label="Close Menu" onClick={() => showBurgerMenuFunction()}>
                <svg aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" cliprule="evenodd">
                    </path>
                </svg>
            </button>
            <ul className="flex w-full text-white flex-col items-center gap-2 md:gap-3">
                {
                    arrayOfData.map((item) => {
                        const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
                        const address = (() => {
                            if (item.includes(' ')) {
                                return item.replace(/\s+/g, '-').toLocaleLowerCase()
                            }
                            return item.toLocaleLowerCase()
                        })()
                        return <li key={randomNumber}>
                            <Link to={`/${address}`} className="text-xl hover:text-blue-300 md:text-lg" onClick={() => showBurgerMenuFunction()}>
                                {item}
                            </Link>
                        </li>
                    })
                }
                <li>
                    <Link to="#" className="text-xl text-white md:text-lg transition-opacity duration-300">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="#" className="text-xl text-green-300 hover:text-green-400 md:text-lg transition-opacity duration-300">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HumBurgerMenu