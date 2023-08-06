import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.jpg'

const Memories = () => {
    const memoriesData = [
        {
            id: 1,
            imageUrl: '/public/logo.jpg',
            title: 'Camping trip',
            description: 'Me and my family went camping in 2021, it was amazing!'
        },
        {
            id: 2,
            imageUrl: '/public/logo.jpg',
            title: 'Birthday party',
            description: 'Me and my friends celebrating my birthday parting. Best day ever! '
        },
        {
            id: 3,
            imageUrl: '/public/logo.jpg',
            title: 'Solo hiking trip @18',
            description: 'Ah, so tranquil. I love the mountains...'
        },
    ];

    return (
        <div className="pt-2 flex flex-wrap justify-center gap-6">
            {memoriesData.map(memory => (
                <div key={memory.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image className="rounded-t-lg" src={Logo} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{memory.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{memory.description}</p>
                        <a href="https://mumbai.polygonscan.com/tx/0xa39a23572ecb98b9364f11890df62d135962137756cfac05967330c07809b6e7" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View NFT
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Memories;