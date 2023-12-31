import React, { Fragment, useEffect } from 'react'
import Resources from '../components/Landing page components/Resources'
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'

const GuidesPage = ({topics,resource,description }) => {

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
        <Resources resource={resource} topicForGuide={topics} description={description} />
        <Community />
        <Footer />
    </Fragment>
  )
}

export default GuidesPage


