import React from 'react'
import HeroImage from '/Hero.jpg'
import { Search } from 'lucide-react'


const Home =() => {
    const categories = [
        { id: 1, name: 'Jollof Delights', image: '/jollofD.png'},
        { id: 2, name: 'Swallow & Soups', image: '/swallow.png'},
        { id: 3, name: 'Grills & BBQ', image: '/grill.png'},
        { id: 4, name: 'Sweet Treats', image: '/sweet.png'},
        { id: 5, name: 'Jollof Delights', image: '/swallow.png'},
        { id: 6, name: 'Jollof Delights', image: '/grill.png'},
    ]





    return (
        <>
        <section className='relative h-96 md:h-180 w-full bg-cover bg-center flex items-center px-[5%] md:px-[10%] ' style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className='absolute inset-0 bg-black/50'></div>

            <div className='relative z-10 max-w-2xl text-white space-y-6 md:space-y-6'>
                <h1 className='text-4xl md:text-5xl font-semibold leading-tight'>The Heart of Nigerian Home Cooking</h1>

                <p className='text-xl md:text-2xl text-slate-100 font-medium'>Handcrafted with passion, delivered with care.</p>

                <button className='w-full md:w-auto  bg-[#e67e22] text-white px-8 py-3 rounded-md font-semibold text-sm hover:bg-[#d35400] transition shadow-lg'>Discover what's new</button>
            </div>

            <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] md:w-175 z-20'>
                <div className='bg-white p-3 md:p-5 rounded-lg shadow-xl flex items-center border border-slate-200'>
                    <span className='text-slate-400 mr-3 text-lg md:text-xl'><Search/></span>

                    <input type="text"
                    placeholder='What are you craving for today?'
                    className='w-full focus:outline-none text-slate-700 placeholder:text-slate-400 font-medium'/>
                </div>
            </div>
        </section>

        <div className='bg-slate-50 py-20 px-[5%] md:px-[10%]'>
            <div className='text-center mb-10'>
                <h2 className='text-2xl md:text-3xl font-bold text-slate-800'>Popular Categories</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-14'>
                {categories.map(category => (
                    <div key={category.id} className='group cursor-pointer rounded-xl w-52 shadow-xl'>
                        <div className='overflow-hidden h-50  group-hover:shadow-md transition'>
                            <img src={category.image} 
                            alt={category.name} 
                            className='h-30 object-cover group-hover:scale-105 transition duration-300'/>
                            <p className='text-center mt-5 text-slate-700 font-semibold group-hover:text-[#e67e22] transition'>{category.name}</p>
                        </div>
                    </div>
                ))}

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
     </>   
    )
}


export default Home