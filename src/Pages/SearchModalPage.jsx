import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import { modalSliceAction } from '../components/state mangement/modalSlice';
import { Link } from 'react-router-dom';

export default function SearchModalPage() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.modalSlice.isOpen)

  const cancelButtonRef = useRef(null)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={() => dispatch(modalSliceAction.modalHandler())}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                <div className="bg-white !p-0 sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="text-center sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 m-0 text-gray-900">
                        {/* Deactivate account */}
                        <input
                          type="text"
                          class="w-full rounded-t-md border-b p-4 text-sm focus:bg-gray-50 focus:outline-none"
                          placeholder="Search roadmaps, guides or pages .."
                          autocomplete="off"
                        // value=""
                        />
                      </Dialog.Title>
                      <div className="m-0">
                        <div className="text-sm p-5 text-gray-500">
                          {/* popup body */}
                          <div class="px-2 w-[100%] py-2">
                            <div class="flex flex-col" onClick={() => setTimeout(() => { dispatch(modalSliceAction.modalHandler()) }, 0)}>
                              <Link class="flex w-full items-center rounded p-2 text-sm hover:bg-gray-100" to="/"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="mr-2 h-4 w-4 stroke-2"
                              >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                  ></path></svg
                                >Home</Link
                              ><Link
                                class="flex w-full items-center rounded p-2 text-sm hover:bg-gray-100"
                                to="/roadmaps"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="mr-2 h-4 w-4 stroke-2"
                              >
                                  <path
                                    d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"
                                  ></path>
                                  <path d="M12 13v8"></path>
                                  <path d="M12 3v3"></path></svg
                                >Roadmaps</Link
                              ><Link
                                class="flex w-full items-center rounded p-2 text-sm hover:bg-gray-100"
                                to="/best-practices"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="mr-2 h-4 w-4 stroke-2"
                              >
                                  <line x1="10" x2="21" y1="6" y2="6"></line>
                                  <line x1="10" x2="21" y1="12" y2="12"></line>
                                  <line x1="10" x2="21" y1="18" y2="18"></line>
                                  <polyline points="3 6 4 7 6 5"></polyline>
                                  <polyline points="3 12 4 13 6 11"></polyline>
                                  <polyline points="3 18 4 19 6 17"></polyline></svg
                                >Best Practices</Link
                              ><Link
                                class="flex w-full items-center rounded p-2 text-sm hover:bg-gray-100"
                                to="/about"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="mr-2 h-4 w-4 stroke-2"
                              >
                                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                  <path
                                    d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                                  ></path>
                                  <path d="M12 11h4"></path>
                                  <path d="M12 16h4"></path>
                                  <path d="M8 11h.01"></path>
                                  <path d="M8 16h.01"></path></svg
                                >Questions</Link
                              ><Link class="flex w-full items-center rounded p-2 text-sm hover:bg-gray-100" to="/guides"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="mr-2 h-4 w-4 stroke-2"
                              >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                                  ></path></svg
                                >Guides</Link
                              ><Link class="flex w-full items-center rounded p-2 text-sm hover:bg-gray-100" to="/videos"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="mr-2 h-4 w-4 stroke-2"
                              >
                                  <path
                                    stroke-linecap="round"
                                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                                  ></path></svg
                                >Videos</Link
                              >
                            </div>
                          </div>
                          {/* popup body end */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}