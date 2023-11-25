import React from 'react'
import Accordian from './Accordian'
import { useParams } from 'react-router-dom'
import { FAQData } from './FAQData'

const FAQSection = () => {
    const {id} = useParams()

    const faqData = FAQData.filter(item=>item.id===id)[0];

  return (
    <div>
        {faqData && <div className="border-t bg-gray-100 ">
      <div className="mx-[6.5%] md:mx-[12%]">
        <div className="flex justify-between relative -top-5">
          <h2
            className="text-sm sm:text-base font-medium py-1 px-3 border bg-white rounded-md"
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col gap-1 pb-14">
        {faqData && <Accordian Questions={faqData} />}
        </div>
      </div>
    </div>}
    </div>
  )
}

export default React.memo(FAQSection)