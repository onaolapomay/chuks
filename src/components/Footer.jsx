import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='flex flex-col w-full'>
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

                <footer className='bg-[#8b5e3c] text-white py-12 px-6 md:px-16'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                        
                        <div className='space-y-4'>
                            <h2 className='text-2xl font-serif italic border-b border-orange-400/30 pb-2 w-fit'>Chucks Kitchen</h2>
                            <p className='text-sm leading-relaxed text-orange-50'>
                                Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
                            </p>
                        </div>

                        <div>
                            <h3 className='font-bold text-lg mb-4 text-orange-300'>Quick Links</h3>
                            <ul className='space-y-2 text-sm text-orange-100'>
                                <li className='hover:text-white transition-colors cursor-pointer'>Home</li>
                                <li className='hover:text-white transition-colors cursor-pointer'>Explore</li>
                                <li className='hover:text-white transition-colors cursor-pointer'>My Order</li>
                                <li className='hover:text-white transition-colors cursor-pointer'>Account</li>
                                <li className='hover:text-white transition-colors cursor-pointer'>Contact</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-bold text-lg mb-4 text-orange-300'>Contact Us</h3>
                            <div className='space-y-2 text-sm text-orange-100'>
                                <p className='hover:text-white cursor-default'>+234 801 234 5678</p>
                                <p className='hover:text-white cursor-default'>Hello@chuckskitchen.com</p>
                                <p className='italic opacity-80'>123 Taste Blvd, Lagos, Nigeria</p>
                            </div>
                        </div>

                        <div>
                            <h3 className='font-bold text-lg mb-4 text-orange-300'>Follow Us</h3>
                            <div className='flex flex-row sm:flex-col gap-4 sm:gap-2 text-sm text-orange-100'>
                                <span className='hover:text-white cursor-pointer'>Facebook</span>
                                <span className='hover:text-white cursor-pointer'>Instagram</span>
                                <span className='hover:text-white cursor-pointer'>Twitter</span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-12 pt-8 border-t border-orange-400/20 text-xs text-orange-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-center'>
                        <p>© {year} Chuck's Kitchen. All rights reserved.</p>
                        <div className="flex gap-4">
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>
                </footer>
        </div>
    );
};

export default Footer;