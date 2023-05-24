import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import { useState } from 'react'
import { fetchDataFromApi } from '@/utils/api'

const Products = () => {
  const [data, setData] = useState(null)

  const fetchProducts = async () => {
    const {data} = await fetchDataFromApi("/api/products")
    setData(data)
    console.log(data)
  }
  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-6 lg:px-48 md:px-4 px-2'>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}

export default Products
