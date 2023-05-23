import React from 'react'
import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import Products from '@/components/Products'
import Footer from '@/components/Footer'

const index = () => {
  return (
    <div className=''>
      <Navbar />
      <HeroBanner className='' />
      <Products />
      <Footer />
    </div>
  )
}

export default index
