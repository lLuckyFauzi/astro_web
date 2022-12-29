import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Main = (props) => {
    const { children } = props

  return (
    <>
        <Navbar />
            { children }
        <Footer />
    </>
  )
}

export default Main