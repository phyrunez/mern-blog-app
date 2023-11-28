import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function MainLayout({ children }) {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}

export default MainLayout