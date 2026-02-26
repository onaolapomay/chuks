import React from 'react'
import { Minus, Plus, X } from 'lucide-react'

const Cart = () => {
    const cartItems = [
        { 
            id: 1, 
            name: 'Jollof Rice & Fried Chicken', 
            price: 3200, 
            desc: 'With plaintain, extra pepper sauce', 
            img: '/cartImages/img1.png' 
        },

        { 
            id: 2, 
            name: 'Jollof Rice & Fried Chicken', 
            price: 3200, 
            desc: 'With plaintain, extra pepper sauce', 
            img: '/cartImages/img2.png' 
        },

        { 
            id: 3, 
            name: 'Jollof Rice & Fried Chicken', 
            price: 3200, 
            desc: 'With plaintain, extra pepper sauce', 
            img: '/cartImages/img3.png' 
        },

        { 
            id: 4, 
            name: 'Jollof Rice & Fried Chicken', 
            price: 3200, 
            desc: 'With plaintain, extra pepper sauce', 
            img: '/cartImages/img4.png' 
        }
    ]

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0)
    const deliveryFee = 1000
    const total = subtotal + deliveryFee

    return (
        <div className='min-h-screen bg-slate-50 p-5 md:p-10 lg:p-20'>
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start'>
                
                <div className='flex-[2] w-full bg-white rounded-3xl shadow-sm p-6 md:p-8'>
                    <h1 className='text-2xl font-bold mb-8'>Your Cart</h1>

                    <div className='space-y-6'>
                        {cartItems.map(item => (
                            <div key={item.id} className='flex flex-row items-center gap-4 md:gap-6 border-b pb-8'>
                                <img src={item.img} alt={item.name} className='w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg' />

                                <div className='flex-1'>
                                    <h3 className='font-semibold text-sm md:text-lg leading-tight'>{item.name}</h3>
                                    <p className='text-slate-500 text-[10px] md:text-sm'>{item.desc}</p>
                                </div>

                                <div className='hidden sm:flex items-center gap-4 bg-slate-50 px-3 py-1 md:px-4 md:py-2 rounded-full'>
                                    <button className='text-slate-400 hover:text-orange-500'>
                                        <Minus size={16} />
                                    </button>
                                    <span className='font-bold text-sm'>1</span>
                                    <button className='text-slate-400 hover:text-orange-500'>
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <div className='text-right'>
                                    <span className='font-bold text-orange-600 text-sm md:text-lg'>₦{item.price.toLocaleString()}</span>
                                </div>

                                <button className='text-slate-300 hover:text-red-400 transition ml-2'>
                                    <X size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className='flex mt-8 cursor-pointer gap-2 items-center hover:opacity-80 transition'>
                        <Plus size={16} className='text-blue-700' />
                        <p className='text-blue-700 font-medium text-sm'>Add more items from Chuks Kitchen</p>
                    </div>
                </div>

                <div className='w-full lg:w-[400px] bg-white rounded-3xl shadow-sm p-6 md:p-8 sticky top-10'>
                    <h2 className='text-xl font-bold mb-6 pb-4 border-b'>Order Summary</h2>
                    
                    <div className='space-y-4 mb-8'>
                        <div className='flex justify-between text-slate-600'>
                            <span>Subtotal</span>
                            <span className='font-semibold text-slate-900'>₦{subtotal.toLocaleString()}</span>
                        </div>
                        <div className='flex justify-between text-slate-600'>
                            <span>Delivery Fee</span>
                            <span className='font-semibold text-slate-900'>₦{deliveryFee.toLocaleString()}</span>
                        </div>
                        <div className='flex justify-between items-center pt-4 border-t border-dashed'>
                            <span className='text-lg font-bold'>Total</span>
                            <span className='text-2xl font-bold text-orange-600'>₦{total.toLocaleString()}</span>
                        </div>
                    </div>

                    <button className='w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 active:scale-[0.98]'>
                        Checkout
                    </button>
                    
                    <p className='text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold'>Secure Checkout</p>
                </div>
            </div>

            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-[#3b82f6] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all z-50 shadow-blue-500/20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
        </div>
    )
}

export default Cart