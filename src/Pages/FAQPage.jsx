import React, { Fragment, useEffect } from 'react'
import FAQHeadSection from '../components/FAQ componets/FAQHeadSection'
import FAQfaqSection from '../components/FAQ componets/FAQfaqSection'
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'

const FAQPage = () => {
  useEffect(() => {
    setTimeout(()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },0)
  }, [])
  return (
    <Fragment>
        <FAQHeadSection />
        <FAQfaqSection />
        <Community />
        <Footer />
    </Fragment>
  )
}

export default FAQPage