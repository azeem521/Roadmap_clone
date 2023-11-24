import React, { Fragment, Suspense, lazy } from 'react'
import HeaderSection from '../components/components Detailed Page/HeaderSection'
import { useParams } from 'react-router-dom';
import { detailedPageData } from '../components/components Detailed Page/dataForDetail';
import HeaderSectionWithoutQuestion from '../components/components Detailed Page/HeaderSectionWithoutQuestion';
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'

const DetailedPage = () => {
  const { id } = useParams()
  const data = detailedPageData.filter(item => item.id === id)[0];
  let ComponentToRender;

  switch (id) {
    case 'blockchain':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Blockchain'));
      break;
      case 'frontend':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Frontend'));
      break;
      case 'backend':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Backend'));
      break;
      case 'devops':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/DevOps'));
      break;
      case 'full-stack':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/FullStack'));
      break;
      case 'android':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Android'));
      break;
      case 'postgresql':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/PostgreSQL'));
      break;
      case 'ai-and-data-scientist':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/AIandDataScientist'));
      break;
      case 'qa':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/QAEngineer'));
      break;
      case 'software-architect':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/SoftwareArchitect'));
      break;
      case 'asp.net-core':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/ASPNETCore'));
      break;
      case 'c++':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/C'));
      break;
      case 'flutter':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Flutter'));
      break;
      case 'cyber-security':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/CyberSecurity'));
      break;
      case 'ux-design':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/UXDesign'));
      break;
      case 'react-native':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/ReactNative'));
      break;
      case 'game-developer':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/GameDeveloper'));
      break;
      case 'technical-writer':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/TechnicalWriter'));
      break;
      case 'computer-science':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/ComputerScience'));
      break;
      case 'react':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/ReactDev'));
      break;
      case 'angular':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Angular'));
      break;
      case 'vue':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Vue'));
      break;
      case 'javascript':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/JavaScript'));
      break;
      case 'node.js':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Nodejs'));
      break;
      case 'typescript':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/TypeScript'));
      break;
      case 'python':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Python'));
      break;
      case 'sql':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/SQL'));
      break;
      case 'system-design':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/SystemDesign'));
      break;
      case 'java':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Java'));
      break;
      case 'spring-boot':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/SpringBoot'));
      break;
      case 'go-roadmap':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Go'));
      break;
      case 'rust':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Rust'));
      break;
      case 'graphql':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/GraphQL'));
      break;
      case 'design-and-architecture':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/DesignArchitecture'));
      break;
      case 'design-system':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/DesignSystem'));
      break;
      case 'code-review':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/CodeReview'));
      break;
      case 'docker':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Docker'));
      break;
      case 'kubernetes':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Kubernetes'));
      break;
      case 'mongodb':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/MongoDB'));
      break;
      case 'prompt-engineering':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/PromptEngineering'));
      break;
      case 'frontend-performance':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/FrontendPerformance'));
      break;
      case 'api-security':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/APISecurity'));
      break;
      case 'code-reviews':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/CodeReviews'));
      break;
      case 'aws':
      ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/AWS'));
      break;
      // case 'blockchain':
      // ComponentToRender = lazy(() => import('../components/components Detailed Page/SVGImages/Blockchain'));
      // break;
      default:
      ComponentToRender = <div><h1>404</h1></div>;
  }
  return (
    <Fragment>
      {data.partener ? <HeaderSection data={data} /> : <HeaderSectionWithoutQuestion data={data} />}
      <Suspense fallback={<div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>}>
        <div className="bg-gray-50 px-10 pt-4 sm:pt-12">
        <ComponentToRender />
        </div>
      </Suspense>
      <Community />
      <Footer />
    </Fragment>
  )
}

export default DetailedPage