import React, { Fragment, useEffect } from 'react'
import HeroSection from '../components/Roadmaps components/HeroSection'
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'
import { dataRoles } from '../components/Roadmaps components/TopicAreas/Roles'
import ResourcesRoadmaps from '../components/Roadmaps components/ResourcesRoadmaps'

const RoadmapsPage = () => {

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
        <HeroSection heading={"Developer Roadmaps"}
        description={"Step by step guides and paths to learn different tools or technologies"}
        New={true}
        />
        <ResourcesRoadmaps topics={dataRoles} />
        <Community />
        <Footer />
    </Fragment>
  )
}

export default RoadmapsPage