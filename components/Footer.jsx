import React from 'react'
import {AiFillFacebook, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='bg-primary text-primary-content lg:p-16 lg:px-48 p-4 flex flex-col lg:flex-row justify-between'>
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="first">
            <p className="text-lg font-bold pb-1">Find a Store</p>
            <p className="text-lg font-bold pb-1">Become a Partner</p>
            <p className="text-lg font-bold pb-1">Signup for email</p>
            <p className="text-lg font-bold pb-1">Send us Feedback</p>
            <p className="text-lg font-bold pb-1">Student Discount</p>
        </div>
        <div className="second">
            <p className="text-lg font-bold pb-2">Get Help</p>
            <p className="text-lg  pb-2">Order Status</p>
            <p className="text-lg  pb-2">Delivery</p>
            <p className="text-lg pb-2">Return</p>
            <p className="text-lg  pb-2">Payment Options</p>
        </div>
        <div className="third">
        <p className="text-lg font-bold pb-2">Abut Nike</p>
            <p className="text-lg  pb-2">News</p>
            <p className="text-lg  pb-2">Careers</p>
            <p className="text-lg pb-2">Inverstors</p>
            <p className="text-lg  pb-2">Sustainability</p>
        </div>
      </div>
      <div className="social flex gap-2">
        <AiFillFacebook className='rounded-full text-3xl' />
        <AiFillTwitterCircle className='rounded-full text-3xl' />
        <AiFillYoutube className='rounded-full text-3xl' />
        <AiFillInstagram className='rounded-full text-3xl' />
      </div>
    </div>
  )
}

export default Footer
