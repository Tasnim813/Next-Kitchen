'use client'

import { useRouter, useSearchParams } from 'next/navigation'; // searchParams ইমপোর্ট যোগ করা হয়েছে
import React from 'react';

const InputSearch = () => {
    const router = useRouter();
    const searchParams = useSearchParams(); // variable এর নাম searchParams রাখা স্ট্যান্ডার্ড

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.search.value;

        // বর্তমান URL এর সব প্যারামিটার কপি করা
        const params = new URLSearchParams(searchParams.toString());
        
        if (value) {
            params.set("search", value); // ভ্যালু থাকলে সেট করবে
        } else {
            params.delete("search"); // ভ্যালু না থাকলে প্যারামিটার ডিলিট করে দিবে (ক্লিন ইউআরএল)
        }

        // নতুন ইউআরএল এ পুশ করা
        router.push(`?${params.toString()}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                    name='search' 
                    className='px-3 py-3 border-2 rounded w-full max-w-2xl' 
                    type="text"  
                    placeholder='Enter Food name'
                    defaultValue={searchParams.get('search') || ""} // আগের সার্চ করা লেখাটি বক্সে ধরে রাখবে
                />
                <button type="submit" className='px-4 py-2 bg-yellow-500 font-bold rounded'>
                    Search
                </button>
            </form>
        </div>
    );
};

export default InputSearch;