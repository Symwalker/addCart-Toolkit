import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './features/cart/CartSlice';

const AllProducts = () => {
const dispatch = useDispatch();

  const handleAddToCart= (product)=>{
    dispatch(addToCart(product))

  }


  const items  = useSelector(state => state.cart.books)
  console.log(items);
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16  sm:px-6 sm:py-3 lg:max-w-7xl lg:px-8">
      {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

      <div className="mt-3 grid grid-cols-1  gap-x-6  gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {items.map((product) => (
          <div key={product.id} className='w-4/6 sm:w-full ml-auto mr-auto'>
          <div  className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.img}
                // alt={product}
                className=" h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              <p className="text-lg font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
          <button onClick={()=>handleAddToCart(product)} className='cursor-pointer w-full p-2 mt-3 bg-black  text-xl text-white'>add to cart</button>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default AllProducts
