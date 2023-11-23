import React, { Fragment } from 'react'
import HeroSection from '../components/Roadmaps components/HeroSection'
import ResourcesRoadmaps from '../components/Roadmaps components/ResourcesRoadmaps'
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'
import { bestPracticesData } from '../components/Roadmaps components/TopicAreas/Roles'

const BestPracticesPage = () => {
  return (
    <Fragment>
        <HeroSection heading={"Best Practices"}
        description={"Best practices on different topics with detailed implementation guidelines"}
        New={false} />
        <ResourcesRoadmaps topics={bestPracticesData} />
        <Community />
        <Footer />

    </Fragment>
  )
}

export default BestPracticesPage