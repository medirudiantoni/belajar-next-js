import React from 'react'
import { useRouter } from 'next/router' 

const Shop = () => {
  const { query } = useRouter();
  const product = query.slug ? query.slug : null;
  return (
    <div className='p-10'>
        <h1 className="text-2xl mb-4 font-semibold">Produk</h1>
        {product && (
          <p>{product[0]} - {product[1]} - {product[2]}</p>
        ) }
    </div>
  )
}

export default Shop;