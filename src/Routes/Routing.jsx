import React, { Fragment, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import GuidesPage from '../Pages/GuidesPage'
import { engineeringGuideTopic, videoTopic } from '../components/Landing page components/TopicAreas/RoleBaseTopic'


const Routing = ({ showBurgerMenuFunction, isShowMenu }) => {
  const RoadmapsPage = lazy(() => import('../Pages/RoadmapsPage'))
  const BestPracticesPage = lazy(() => import('../Pages/BestPracticesPage'))
  const TeamPage = lazy(() => import('../Pages/TeamPage'))
  const DetailedPage = lazy(()=>import('../Pages/DetailedPage'))
  return (
    <Fragment>
      <Suspense fallback={<div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>}>
        <Routes>
          <Route path='/' element={<LandingPage showBurgerMenuFunction={showBurgerMenuFunction} isShowMenu={isShowMenu} />} />
          <Route path='/roadmaps' element={<RoadmapsPage />} />
          <Route path='/best-practices' element={<BestPracticesPage />} />
          <Route path='/teams' element={<TeamPage />} />
          <Route path='/:id' element={<DetailedPage />} />
          <Route path='/guides' element={<GuidesPage topics={engineeringGuideTopic} resource={"Guides"} description={"Succinct graphical explanations to engineering topics."}/>} />

          <Route path='/videos' element={<GuidesPage topics={videoTopic} resource={"Videos"} description={"Graphical video demonstrations on software engineering topics."}/>} />
          
        </Routes>
      </Suspense>
    </Fragment>
  )
}

export default Routing

