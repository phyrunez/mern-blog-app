import React from 'react'
import MainLayout from '../../components/MainLayout.jsx'
import Articles from './container/Articles.jsx'
import Hero from "./container/Hero"
import CTA from "./container/CTA"

const HomePage = () => {
  return <MainLayout>
    <Hero />
    <Articles />
    <CTA />
  </MainLayout>
}

export default HomePage