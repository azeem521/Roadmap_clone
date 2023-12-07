import React, { Fragment, useEffect } from 'react'
import TitleAndVideo from '../components/components Detailed Page/VideoOfTopic Component/TitleAndVideo'
import Community from '../components/Landing page components/Community'
import Footer from '../components/Landing page components/Footer'

const VideoOfTopic = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <Fragment>
            <TitleAndVideo />
            <Community />
            <Footer />
        </Fragment>
    )
}

export default VideoOfTopic