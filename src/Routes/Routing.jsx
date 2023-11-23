import React, { Fragment, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'


const Routing = ({ showBurgerMenuFunction, isShowMenu }) => {
  const RoadmapsPage = lazy(() => import('../Pages/RoadmapsPage'))
  const BestPracticesPage = lazy(() => import('../Pages/BestPracticesPage'))
  const TeamPage = lazy(() => import('../Pages/TeamPage'))
  const DetailedPage = lazy(()=>import('../Pages/DetailedPage'))
  return (
    <Fragment>
      <Suspense fallback={<div style={{ "position": "fixed", "top": "50%" }} className='text-center'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<LandingPage showBurgerMenuFunction={showBurgerMenuFunction} isShowMenu={isShowMenu} />} />
          <Route path='/roadmaps' element={<RoadmapsPage />} />
          <Route path='/best-practices' element={<BestPracticesPage />} />
          <Route path='/teams' element={<TeamPage />} />
          <Route path='/:id' element={<DetailedPage />} />
          
        </Routes>
      </Suspense>
    </Fragment>
  )
}

export default Routing
