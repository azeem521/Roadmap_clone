import React, { Fragment } from 'react'
import HeroSectionTeam from '../components/Team page components/HeroSectionTeam'
import TrackAndGuideSection from '../components/Team page components/TrackAndGuideSection'
import { trackAndGuideData } from '../components/Team page components/Data'
import HowItWorksSection from '../components/Team page components/HowItWorksSection'
import BetaPricing from '../components/Team page components/BetaPricing'
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'

const TeamPage = () => {
  return (
    <Fragment>
        <HeroSectionTeam />
        <TrackAndGuideSection data={trackAndGuideData} />
        <HowItWorksSection />
        <BetaPricing />
        <Community />
        <Footer />
    </Fragment>
  )
}

export default TeamPage