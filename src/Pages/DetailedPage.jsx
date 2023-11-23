import React, { Fragment } from 'react'
import HeaderSection from '../components/components Detailed Page/HeaderSection'
import { useParams } from 'react-router-dom';
import { detailedPageData } from '../components/components Detailed Page/dataForDetail';
import HeaderSectionWithoutQuestion from '../components/components Detailed Page/HeaderSectionWithoutQuestion';
import SVGComponent from '../components/components Detailed Page/SVGComponent';
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'

const DetailedPage = () => {
  const { id } = useParams()
  const data = detailedPageData.filter(item => item.id === id)[0];
  return (
    <Fragment>
        {data.partener ? <HeaderSection data={data} /> : <HeaderSectionWithoutQuestion data={data} />}
        <SVGComponent />
        <Community />
        <Footer />
    </Fragment>
  )
}

export default DetailedPage