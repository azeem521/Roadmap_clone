import { useState } from "react";

const Accordian = ({ Questions }) => {

    const [openIndex, setOpenIndex] = useState(0);

    const toggleAnswer = (index) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div
        >
            {
                Questions.questions.map((data, index) => {
                    const min = 10000000;
                    const max = 99999999;
                    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                    return (
                        <div 
                        className="faq-item bg-white border rounded-md mb-1 hover:bg-gray-50 border-gray-300"
                        key={randomNum}>
                            <button
                                onClick={() => toggleAnswer(index)}
                                className="flex flex-row justify-between items-center border-b p-2 sm:p-3 w-full"
                            >
                                <span className="text-sm sm:text-base text-left font-medium"
                                >{data.question}</span
                                >
                                <svg
                                    cliprule="evenodd"
                                    fill-rule="evenodd"
                                    strokelinejoin="round"
                                    stroke-miterlimit="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 hidden sm:block text-gray-400"
                                >
                                    <path
                                        d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </button>

                            {openIndex === index && <div className="answer" faq-answer="">
                                <div
                                    className="text-sm sm:text-base leading-relaxed text-left p-2 sm:p-4 text-md text-gray-800 border-t border-t-gray-300 bg-gray-100 rounded-bl-md rounded-br-md [&amp;>p:not(:last-child)]:mb-3 [&amp;>p>a]:underline [&amp;>p>a]:text-blue-700"
                                >
                                    <p>
                                        {data.answer}
                                    </p>
                                </div>
                            </div>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordian