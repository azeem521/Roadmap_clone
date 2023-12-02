import React, { Fragment } from 'react'
import Resources from '../components/Landing page components/Resources'
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'

const GuidesPage = ({topics,resource,description }) => {
  return (
    <Fragment>
        <Resources resource={resource} topicForGuide={topics} description={description} />
        <Community />
        <Footer />
    </Fragment>
  )
}

export default GuidesPage


