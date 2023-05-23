import React from 'react'

const ProductItem = () => {
  return (
    <div className='border shadow-lg rounded-xl'>
      <div className="productImg">
        <img src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" className='h-64 w-full rounded-t-lg' />
      </div>
      <div className="productAbout p-4 bg-secondary text-secondary-content rounded-b-xl">
        <h1 className="name text-xl">
            Jordan Delta 3 Low
        </h1>
        <div className="flex w-full justify-between font-bold text-md">
            <p>₹77777</p>
            <p>12%off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
