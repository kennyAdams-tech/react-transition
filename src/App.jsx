import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './css/App.css'

import TransitionComp from './component/Transition'
import TransitionGrp from './component/tgroup'
import Csstransition from './component/CSStransition'
const App = () => {
  return (
    <div>
      <header>
        <ul>
          <li><NavLink to='/'>Transition</NavLink></li>
          <li><NavLink to='/CSStransition'>CSStransition</NavLink></li>
          <li><NavLink to='/tgroup'>TransitionGroup</NavLink></li>
        </ul>
      </header>

    <Routes>
      <Route path='/' element={<TransitionComp/>}/>
      <Route path='/CSStransition' element={<Csstransition/>}/>
      <Route path='/tgroup' element={<TransitionGrp/>}/>
    </Routes>
    </div>
  )
}

export default App