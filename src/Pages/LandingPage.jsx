import '../index.css'
import HeroHeader from '../components/Landing page components/HeroHeader';
import {bestPracticesTopic, guideTopic, questionTopic, roleBaseTopic, skillBaseTopic, videosData} from '../components/Landing page components/TopicAreas/RoleBaseTopic';
import RoleBaseRoadmap from '../components/Landing page components/RoleBaseRoadmap';
import Resources from '../components/Landing page components/Resources';
import Community from '../components/Landing page components/Community';
import Footer from '../components/Landing page components/Footer';
import { useEffect } from 'react';

function LandingPage({isShowMenu, showBurgerMenuFunction}) {

  useEffect(() => {
    setTimeout(()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },0)
  }, [])

  return (
    <div className='bg-gradient-to-b from-slate-900 to-black'>
      {!isShowMenu && <div>
      <HeroHeader />
      <RoleBaseRoadmap createNew={true} mainHeading={"Role based Roadmaps"} topics={roleBaseTopic} />
      <RoleBaseRoadmap createNew={true} mainHeading={"Skill based Roadmaps"} topics={skillBaseTopic} />
      <RoleBaseRoadmap createNew={false} mainHeading={"Best Practices"} topics={bestPracticesTopic} />
      <RoleBaseRoadmap createNew={false} mainHeading={"Questions"} topics={questionTopic} />

      <Resources resource={"Guides"} buttonTittle={"View All Guides"} topicForGuide={guideTopic} />
      <Resources resource={"Videos"} buttonTittle={"View All Videos"} topicForGuide={videosData} />
      <Community />
      <Footer />
      </div>}
      {/* {isShowMenu && <HumBurgerMenu showBurgerMenuFunction={showBurgerMenuFunction} />} */}
    </div>
  );
}

export default LandingPage;

