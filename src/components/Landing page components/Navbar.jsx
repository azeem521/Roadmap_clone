import { Link } from 'react-router-dom'
import SearchModalPage from '../../Pages/SearchModalPage'
import { useDispatch } from 'react-redux';
import { modalSliceAction } from '../state mangement/modalSlice';

const Navbar = ({showBurgerMenuFunction}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-900'>
        <div className="py-5 text-white sm:py-8 mx-[6.5%] md:mx-[12%]">
            <nav className="flex items-center justify-between">
                <Link className="flex items-center text-lg font-medium text-white" to="/" aria-label="roadmap.sh">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 283 283" fill="#000" >
                        <path fill="#fff" d="M0 39C0 17.46 17.46 0 39 0h205c21.539 0 39 17.46 39 39v205c0 21.539-17.461 39-39 39H39c-21.54 0-39-17.461-39-39V39Z">
                        </path>
                        <path d="M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36s-4.014-3.92-5.32-6.72c-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4s6.626-4.573 10.92-6.44c4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72a133.1 133.1 0 0 0-12.04.56c-4.107.373-8.12.933-12.04 1.68s-7.654 1.587-11.2 2.52c-3.36.747-6.254 1.68-8.68 2.8v95.48zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6s11.48-7.84 19.88-7.84 15.026 2.613 19.88 7.84 7.28 11.76 7.28 19.6-2.427 14.373-7.28 19.6-11.48 7.84-19.88 7.84-15.027-2.613-19.88-7.84-7.28-11.76-7.28-19.6z">
                        </path>
                    </svg>
                </Link>
                <ul className="hidden space-x-5 sm:flex sm:items-center">
                    <li>
                        <Link to="/roadmaps" className="text-gray-400 hover:text-white">
                            Roadmaps
                        </Link>
                    </li>
                    <li>
                        <Link to="/best-practices" className="text-gray-400 hover:text-white">
                            Best Practices
                        </Link>
                    </li>
                    <li className="hidden xl:inline">
                        <Link to="/questions" className="text-gray-400 hover:text-white">
                            Questions
                        </Link>
                    </li>
                    <li>
                        <Link to="/teams" className="group relative text-blue-300 hover:text-white">
                            Teams
                            <span className="ml-0.5 hidden rounded-sm border-black bg-blue-300 px-1 py-0.5 text-xs font-semibold uppercase text-black group-hover:bg-white md:inline">
                                New
                            </span>
                            <span className="inline md:hidden absolute -right-[11px] top-0">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75">
                                    </span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500">
                                    </span>
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li onClick={()=>dispatch(modalSliceAction.modalHandler())}>
                        <kbd data-command-menu="" className="hidden items-center rounded-md border border-gray-800 px-2.5 py-1 text-sm text-gray-400 hover:cursor-pointer hover:bg-gray-800 sm:flex"
                        > <svg className="mr-2 h-3 w-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.4145 20.5913L18.7695 15.9463C20.1838 13.8291 20.7601 11.2616 20.3862 8.74311C20.0123 6.22462 18.715 3.93524 16.7466 2.32029C14.7782 0.705331 12.2795 -0.119724 9.73651 0.00560621C7.19351 0.130936 4.78803 1.19769 2.98799 2.99837C1.18795 4.79905 0.122047 7.2049 -0.00238424 9.74795C-0.126815 12.291 0.699123 14.7894 2.31477 16.7572C3.93042 18.725 6.22026 20.0215 8.73889 20.3945C11.2575 20.7675 13.8248 20.1903 15.9415 18.7753L20.5865 23.4193C20.9647 23.7882 21.4721 23.9947 22.0005 23.9947C22.5288 23.9947 23.0363 23.7882 23.4145 23.4193C23.7894 23.0442 24 22.5356 24 22.0053C24 21.4749 23.7894 20.9663 23.4145 20.5913ZM10.2505 3.00527C11.6844 3.00527 13.0861 3.43047 14.2784 4.22711C15.4706 5.02375 16.3999 6.15605 16.9486 7.48081C17.4973 8.80558 17.6409 10.2633 17.3612 11.6697C17.0814 13.076 16.3909 14.3679 15.377 15.3818C14.3631 16.3957 13.0712 17.0862 11.6649 17.366C10.2585 17.6457 8.80078 17.5021 7.47602 16.9534C6.15125 16.4047 5.01896 15.4754 4.22232 14.2832C3.42568 13.0909 3.00047 11.6892 3.00047 10.2553C3.00259 8.3331 3.7671 6.49026 5.12628 5.13108C6.48546 3.7719 8.3283 3.00739 10.2505 3.00527Z" fill="currentColor">
                            </path>
                        </svg>
                            <kbd className="mr-1 font-sans">⌘</kbd>
                            <kbd className="font-sans">K</kbd>
                        </kbd>
                    </li>
                </ul>
                <ul className="hidden h-8 w-[172px] items-center justify-end gap-5 sm:flex">
                    <li className="transition-opacity duration-300">
                        <Link to="/login" className="text-gray-400 hover:text-white">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className="flex h-8 w-28 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 text-sm font-medium text-white hover:from-blue-500 hover:to-blue-600 transition-opacity duration-300" to="/signup">
                            <span>
                                Sign Up
                            </span>
                        </Link>
                    </li>
                </ul>
                <button className="block cursor-pointer text-gray-400 hover:text-gray-50 sm:hidden" aria-label="Menu" data-show-mobile-nav="" onClick={()=>showBurgerMenuFunction()} > <svg className="h-5 w-5" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
                </svg>
                </button>
            </nav>
        </div>
        <SearchModalPage />
        </div>
    )
}

export default Navbar



