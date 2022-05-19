import React from 'react'
import BookReviwer from './components/BookReviewer/BookReviwer'
import Hero from './components/Hero/Hero'

const Page = () => {
  return (
    <div>
        <Hero/>
        <div style={{width:"100%",height:"20px",background:"#0E7C83"}} ></div>
        <BookReviwer/>
    </div>
  )
}

export default Page