import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from './features/cart/CartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cart)
    const  totalPrice = useSelector(state => state.cart.totalPrice)
    console.log(totalPrice);
    const dispatch = useDispatch();

    const removeHandler = (product)=>{
        dispatch(removeToCart(product))
    }

    return (
        <>
            <div className='w-4/5 mr-auto ml-auto'>

                <div className='flex justify-between gap-3 flex-col sm:flex-row'>
                    <div className='sm:w-2/4 w-full   p-2'>
                        <h1 className='text-lg'>Your items</h1>
                        {cartItems.map((product) => (
                            <div key={product.id}>
                            <li className="flex py-6">
                                <div className="w-48 h-48 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                        src={product.img}
                                        // alt={product.imageAlt}
                                        className="h-full w-full "
                                    />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a href={product.href}>{product.title}</a>
                                            </h3>
                                            <p className="ml-4">{product.price}</p>
                                        </div>
                                        {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500 border border-black p-1">Qty {product.quantity}</p>

                                        <div className="flex">
                                            <button
                                            onClick={()=>removeHandler(product)}
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                                <hr />
                                </div>
                        ))}
                    </div>
                    <div className='sm:w-2/4 w-full p-2'>
                    <h1 className='text-lg'>Summary</h1>
                    <div className='mt-4 bg-gray-300 p-4'>
                        <h1 className='text-lg text'>Order Total</h1>
                        <p className='mt-4'>Rs: {totalPrice}/=</p>
                        <hr className='text-black bg-black'/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage
