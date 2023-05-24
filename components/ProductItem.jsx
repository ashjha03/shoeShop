import React from 'react'
import Link from 'next/link'

const ProductItem = ({product}) => {
  return (
    <Link href={`/product/${product?.slug}`} className='border shadow-lg rounded-xl'>
      <div className="productImg">
        <img src={`http://localhost:1337${product?.thumbnail?.data?.attributes?.url}`} alt="Loading..." className='h-64 w-full rounded-t-lg' />
      </div>
      <div className="productAbout p-4 bg-secondary text-secondary-content rounded-b-xl">
        <h1 className="name text-xl">
            {product?.name}
        </h1>
        <div className="flex w-full justify-between font-bold text-md">
            <p>{product?.price}</p>
            <p>12%off</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
