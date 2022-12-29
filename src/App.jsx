import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Main from './layouts/Main'


function App() {
  return (
    <div className="App">
      <Main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
      </Main>
    </div>
  )
}

export default App
