import React, { Fragment } from 'react'
import HeroSectionGuideSinglePage from '../components/GuideSinglePage Components/HeroSectionGuideSinglePage'
import MainSectionGuideSinglePage from '../components/GuideSinglePage Components/MainSectionGuideSinglePage'
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'

const GuideSinglePage = () => {
  return (
    <Fragment>
        <HeroSectionGuideSinglePage />
        <MainSectionGuideSinglePage />
        <Community />
        <Footer />
    </Fragment>
  )
}

export default GuideSinglePage