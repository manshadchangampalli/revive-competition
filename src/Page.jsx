import React from 'react'
import BookReviwer from './components/BookReviewer/BookReviwer'
import CardsSection from './components/CardsSeciton/CardsSection'
import End from './components/End/End'
import FormSection from './components/FormSection/FormSection'
import Hero from './components/Hero/Hero'
import LastSection from './components/LastSection/LastSection'

const Page = () => {
  return (
    <div>
        <Hero/>
        <div style={{width:"100%",height:"20px",background:"#0E7C83"}} ></div>
        <BookReviwer/>
        <CardsSection/>
        <FormSection/>
        <LastSection/>
        <End/>
    </div>
  )
}

export default Page