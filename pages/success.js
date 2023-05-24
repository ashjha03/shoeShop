import React from 'react'
import Link from 'next/link'

const Success = () => {
  return (
    <div className='lg:mx-80 lg:my-32 p-12 lg:border lg:border-primary rounded-xl'>
      <h1 className="text-2xl font-bold">Thanks for shopping with us!</h1>
      <h1 className="text-2xl">Your order has been placed successfully.</h1>

      <p className="text-lg pt-4">For any product related query, drop an email to </p>
      <p className="text-lg pb-10">shoeshop@gmail.com</p>

      <Link className='btn bg-primary text-primary-content' href="/">Continue Shopping</Link>
    </div>
  )
}

export default Success
