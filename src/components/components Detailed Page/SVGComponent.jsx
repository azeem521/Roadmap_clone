import React from 'react'
import { svgImagesCode } from './svgData'
import { useParams } from 'react-router-dom'

const SVGComponent = () => {
  const {id} = useParams();

    const svgCode = svgImagesCode.filter(item=>item.id===id)[0]
  return (
    <div className="bg-gray-50 px-10 pt-4 sm:pt-12">
    {svgCode.code}
    </div>
  )
}

export default SVGComponent