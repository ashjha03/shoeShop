import React from 'react'
import { useRouter } from "next/router";
import ProductItem from '@/components/ProductItem';

const Category = () => {
    const router = useRouter()
    const {slug} = router.query

  return (
    <div className='py-12 lg:px-48 md:px-12 px-3'>
        <div className="heading">
            <h1 className="text-6xl text-center">{slug}</h1>
        </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-8'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
    </div>
  )
}

export default Category
