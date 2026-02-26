import React from 'react'
import { NavLink } from 'react-router-dom'
import { Search, Plus } from 'lucide-react'

const fooditems = [
    {
        id: 1,
        name: 'Jollof Rice & Fried chicken',
        description: 'Our signature jollof rice, served with crispy fried chicken and plaintain',
        price: '3500',
        images:'/explore_images/jollof1.png'
    },
    {
        id: 2,
        name: 'Eba & Egusi Soup (Goat Meat)',
        description: 'Hearty Egusi soup with tender goat meat, served with soft Eba',
        price: '3500',
        images:'/explore_images/eba.png'
    },
    {
        id: 3,
        name: 'Pounded Yam & Edikaikong',
        description: 'Traditional pounded yam with rich, leafy Edikaikong soup.',
        price: '3800',
        images:'/explore_images/pounded.png'
    },
    {
        id: 4,
        name: 'Peppered Snail',
        description: 'spicy and savory peppered snail, perfect as a starter',
        price: '2500',
        images:'/explore_images/snail.png'
    },
    {
        id: 5,
        name: 'SGrilled Tilapia Fish',
        description: 'Whole grilled tilapia seasoned wih our special spices',
        price: '4500',
        images:'/explore_images/tilapia.png'
    },
    {
        id: 6,
        name: 'Jollof Rice & Fried Chicken',
        description: 'Our signature jollof rice, served with crispy fried chicken and plaintain',
        price: '3500',
        images:'/explore_images/jollof1.png'
    },
    {
        id: 7,
        name: 'Jollof Rice & Smoked Fish',
        description: 'Flavorful jollof rice served with perfectly smoked fish',
        price: '3500',
        images:'/explore_images/jollof3.png'
    },
    {
        id: 8,
        name: 'Party Jollof Rice (Veg)',
        description: 'Vegetarian party jollof, full of rich flavors',
        price: '2800',
        images:'/explore_images/jollof1.png'
    },
    {
        id: 9,
        name: 'Party Jollof Rice (Veg)',
        description: 'Vegetarian party jollof, full of rich flavors',
        price: '2800',
        images:'/explore_images/jollof1.png'
    },
    {
        id: 10,
        name: 'Amala With Gbegiri & Ewedu',
        description: 'Classic amala served with gbegiri  (beans)and ewedu (jute leaf) soup',
        price: '3100',
        images:'/explore_images/amala.png'
    },
    {
        id: 11,
        name: 'Fufu & Okra Soup (Fish)',
        description: 'Light fufu served with  fresh okra soup & tilapia fish',
        price: '3300',
        images:'/explore_images/okra.png'
    },
    {
        id: 12,
        name: 'Fufu & Okra Soup (Fish)',
        description: 'Light fufu served with  fresh okra soup & tilapia fish',
        price: '3500',
        images:'/explore_images/okra2.png'
    }
]




const Explore = () => {
    const categories = ['Popular', 'jollof Rice & Entrees', 'Soups & Swallows', 'Grills & Sides', 'Beverages', 'Desserts']

    return (
        <div className='min-h-screen bg-white'>
            <div className='relative h-64 md:h-80 w-full overflow-hidden'>
                <img src="/hero-food.png" alt="Chuks Kitchen" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black/40 flex flex-col justify-center px-[5%] md:px-[10%] text-white'>
                <h1 className='text-4xl font-serif italic font-bold'>Chuks Kitchen</h1>
                <p className='text-sm opacity-90'>Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)</p>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-12'>
                

                <aside className='w-full md:w-64 space-y-6'>
                    <h3 className='text-xs font-bold text-slate-400 uppercase tracking-widest'>Menu Categories</h3>
                    <ul className='space-y-1'>
                        {categories.map((cat, index) => (
                            <li key={index} className={`cursor-pointer py-3 px-4 rounded-lg text-sm font-medium transition ${index === 0 ? 'bg-orange-50 text-orange-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                                {cat}
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className='flex-1'>

                    <div className='relative mb-10'>
                        <Search className='absolute left-4 top-3.5 text-slate-400' size={20} />
                        <input 
                            type="text" 
                            placeholder='Search for food....'
                            className='w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-orange-500 transition' 
                        />
                    </div>

                    <h2 className='text-2xl font-bold text-slate-800 mb-6'>Popular</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
                        {fooditems.slice(0, 6).map((item) => (
                            <div key={item.id} className='group rounded-2xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition'>
                                <div className='h-44 rounded-2xl overflow-hidden mb-3'>
                                    <img src={item.images} alt={item.name} className='w-full h-full object-cover group-hover:scale-105 transition duration-500' />
                                </div>
                                <h4 className='font-bold text-slate-800 text-sm mb-1'>{item.name}</h4>
                                <p className='text-[11px] text-slate-500 mb-3 line-clamp-2'>{item.description}</p>
                                <div className='flex justify-between items-center'>
                                    <span className='font-bold text-slate-900'>N{item.price}</span>
                                    <button className='bg-orange-500 border border-slate-200 p-1.5 rounded-full hover:bg-orange-500 hover:text-white transition'>
                                        <Plus size={18} className='text-white'/>
                                    </button>
                            </div>
                            </div>
                        ))}
                    </div>

                    <h2 className='text-2xl font-bold text-slate-800 mb-6'>Jollof Rice & Entrees</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {fooditems.slice(3, 6).map((item) => (
                    <div key={item.id} className='group rounded-2xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition'>
                             <div className='h-44 rounded-2xl overflow-hidden mb-3'>
                                    <img src={item.images} alt={item.name} className='w-full h-full object-cover group-hover:scale-105 transition duration-500' />
                                </div>
                                <h4 className='font-bold text-slate-800 text-sm mb-1'>{item.name}</h4>
                                <p className='text-[11px] text-slate-500 mb-3 line-clamp-2'>{item.description}</p>
                                <div className='flex justify-between items-center'>
                                    <span className='font-bold text-slate-900'>N{item.price}</span>
                                    <button className='bg-orange-500 border border-slate-200 p-1.5 rounded-full hover:bg-orange-500 hover:text-white transition'>
                                        <Plus size={18} className='text-white'/>
                                    </button>
                                </div>
                        </div>
                        ))}
                    </div>

                    <h2 className='text-2xl font-bold text-slate-800 mt-8 mb-6'>Swallows & Soups</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {fooditems.slice(9, 12).map((item) => (
                    <div key={item.id} className='group rounded-2xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition'>
                            <div className='h-44 rounded-2xl overflow-hidden mb-3'>
                                    <img src={item.images} alt={item.name} className='w-full h-full object-cover group-hover:scale-105 transition duration-500' />
                                </div>
                                <h4 className='font-bold text-slate-800 text-sm mb-1'>{item.name}</h4>
                                <p className='text-[11px] text-slate-500 mb-3 line-clamp-2'>{item.description}</p>
                                <div className='flex justify-between items-center'>
                                    <span className='font-bold text-slate-900'>N{item.price}</span>
                                    <button className='bg-orange-500 border border-slate-200 p-1.5 rounded-full hover:bg-orange-500 hover:text-white transition'>
                                        <Plus size={18} className='text-white'/>
                                    </button>
                                </div>
                        </div>
                        ))}
                    </div>
                </main>
            </div>

            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-[#3b82f6] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all z-50 shadow-blue-500/20"
                >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth={3} 
                    stroke="currentColor" 
                    className="w-5 h-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
        </div>

    )
}



export default Explore