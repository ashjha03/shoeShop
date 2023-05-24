import React from 'react'
import Link from 'next/link'

const failed = () => {
  return (
    <div className='lg:mx-80 lg:my-32 p-12 lg:border lg:border-red-600 rounded-xl'>
      <h1 className="text-2xl font-bold text-red-500">Payment Failed !!!</h1>

      <p className="text-lg pt-4">For any product related query, drop an email to </p>
      <p className="text-lg pb-10">shoeshop@gmail.com</p>

      <Link className='btn bg-red-500 text-primary-content' href="/">Continue Shopping</Link>
    </div>
  )
}

export default failed
