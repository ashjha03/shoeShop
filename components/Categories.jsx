import React from 'react'
import Link from 'next/link'

const Categories = ({showCategories}) => {
  if(!showCategories) return <></>

  return (
    <div className='fixed top-5 mt-10 bg-primary text-primary-content border-2 py-2 z-20 shadow-lg'>
      <ul className='flex flex-col'>
        <Link href="/category/Jordan" className='border-b py-2 px-10 border-dotted'>Jordan</Link>
        <Link href="/category/Adidas" className='border-b py-2 px-10 border-dotted'>Adidas</Link>
        <Link href="/category/Nike" className='border-b py-2 px-10 border-dotted'>Nike</Link>
        <Link href="/category/Bata" className='py-2 px-10 border-dotted'>Bata</Link>
      </ul>
    </div>
  )
}

export default Categories
