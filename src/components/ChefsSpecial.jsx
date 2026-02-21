import React from 'react';


const ChefsSpecial = () => {

    const specials = [
        { 
            id: 1, title: 'Spicy Tilapia Pepper Soup', 
            description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy', 
            price: '3,500',
            image: '/tilapia.png' 
        },

        {
            id: 2, title: 'Jollof Rice with Grilled Chicken',
            description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken',
            price: '4,000',
            image: '/jollofD.png'
         },
         {
            id: 3, title: 'Jollof Rice & Fried Chicken',
            description: 'A classic Nigerian dish featuring fragrant jollof rice served with crispy fried chicken',
            price: '4,000',
            image: '/jollofD.png'
         },
         {
            id: 4, title: 'Jollof Rice & smoked Chicken',
            description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken',
            price: '4,500',
            image: '/jollofD.png'
         },
         {
            id: 5, title: 'Jollof Rice & Grilled Chicken & Fried Plantain',
            description: 'A classic Nigerian dish featuring fragrant jollof rice served with crispy fried chicken',
            price: '4,000',
            image: '/riceDodo.png'
         },
         {
            id: 6, title: 'Egusi soup with pounded yam',
            description: 'Rich and Savory Egusi soup made with ground melon seeds, served with soft and stretchy pounded yam',
            price: '4,000',
            image: '/egusi.png'
         }

    ]

    return (
            <><section className='py-16 px-[5%] md:px-[10%] bg-white'>
            <div className='text-center'>
                <h2 className='text-2xl md:text-3xl font-bold text-[#1e293b]'>Chef's Specials</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 gap-x-6 gap-y-10 mt-4'>
                {specials.map((specials) => (
                    <div key={specials.id} className='flex flex-col group shadow-lg'>
                        <div className='rounded-2xl overflow-hidden shadow-sm mb-4'>
                            <img src={specials.image} alt={specials.title} className="w-full h-48 object-cover" />
                        </div>

                        <h3 className='text-lg font-bold text-slate-800 group-hover:text-[#e67e22] mb-3 transition'>{specials.title}</h3>
                        <p className='text-slate-600 text-md leading-relaxed flex-grow mt-2'>{specials.description}</p>



                        <div className='flex items-center justify-between mb-2'>
                            <span className='text-[#e67e22] font-bold mt-4'>₦{specials.price}</span>
                            <button className='bg-[#e67e22] text-white px-4 py-2 rounded-md font-medium hover:bg-[#d35400] transition'>Add to Cart</button>
                        </div>

                    </div>
                ))}
            </div>
        </section>
        <div>
                <section className='relative h-[400px] md:h-[500px] flex items-center px-6 md:px-16 overflow-hidden'>
                    <div className='absolute inset-0 z-0'>
                        <img src='/beans.png' alt="delicious food" className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-black/50'></div>
                    </div>

                    <div className='relative z-10 max-w-2xl text-white'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight'>
                            Introducing Our New Menu Additions
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-100">
                            Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavours. Limited time offer!
                        </p>
                        
                        <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold transition-all transform hover:scale-105 mt-6 w-full sm:w-auto'>
                            Discover what's new
                        </button>
                    </div>
                </section>
        </div>
        </>

            
    )
}

export default ChefsSpecial;