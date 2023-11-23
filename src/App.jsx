import React, { Fragment, useState } from 'react'
import Routing from './Routes/Routing'
import Navbar from './components/Landing page components/Navbar';
import HumBurgerMenu from './components/Landing page components/HumBurgerMenu';

const App = () => {
    const [isShowMenu,setIsShowMenu]=useState(false);

    const showBurgerMenu=()=>{
      setIsShowMenu(prev=>!prev)
    }

  return (
    <Fragment>
         {!isShowMenu ? <Navbar showBurgerMenuFunction={showBurgerMenu} isShowMenu={isShowMenu} /> : <HumBurgerMenu showBurgerMenuFunction={showBurgerMenu} />}
        <Routing showBurgerMenuFunction={showBurgerMenu} isShowMenu={isShowMenu} />
    </Fragment>
  )
}

export default App
