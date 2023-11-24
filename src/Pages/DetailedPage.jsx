import React, { Fragment, Suspense, lazy } from 'react'
import HeaderSection from '../components/components Detailed Page/HeaderSection'
import { useParams } from 'react-router-dom';
import { detailedPageData } from '../components/components Detailed Page/dataForDetail';
import HeaderSectionWithoutQuestion from '../components/components Detailed Page/HeaderSectionWithoutQuestion';
// import SVGComponent from '../components/components Detailed Page/SVGComponent';
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'

const DetailedPage = () => {
  const { id } = useParams()
  const data = detailedPageData.filter(item => item.id === id)[0];
  const SVGComponent = lazy(() => import('../components/components Detailed Page/SVGComponent'))
  return (
    <Fragment>
      {data.partener ? <HeaderSection data={data} /> : <HeaderSectionWithoutQuestion data={data} />}
      <Suspense fallback={<div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>}>
        <SVGComponent />
      </Suspense>
      <Community />
      <Footer />
    </Fragment>
  )
}

export default DetailedPage