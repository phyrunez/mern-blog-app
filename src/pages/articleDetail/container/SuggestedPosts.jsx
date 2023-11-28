import React from 'react'
import { Link } from 'react-router-dom'

const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div className={`w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg p-4 ${className}`}>
        <h2 className="font-poppins font-medium text-dark-hard md:text-xl">{header}</h2>
        <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
            {posts.map(item => (
                <div 
                    key={item._id}
                    className='flex space-x-3 flex-nowrap items-center'
                >
                    <img 
                        className='aspect-square object-cover rounded-lg w-1/5'
                        src={item.image} alt="laptop" 
                    />
                    <div className="text-sm font-poppins text-dark-hard font-medium">
                        <h3 className='text-sm font-poppins text-dark-hard font-medium md:text-base lg:text-lg'>
                            {item.title}
                        </h3>
                        <span className='text-xs opacity-60'>
                            { new Date(item.createdAt).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "short",
                                year: "numeric"
                            })}
                        </span>
                    </div>
                </div>
            ))}
        </div>
        <h2 className='font-montserrat font-medium text-dark-hard mt-8 md:text-xl'>Tags</h2>
        <div className='flex flex-wrap gap-x-3 gap-y-2 mt-4'>
            {tags.map((item, index) => (
                <Link
                    key={index}
                    to='/'
                    className='inline-block rounded-md px-3 py-1.5 bg-primary font-poppins text-xs text-white md:text-sm'
                >
                    {item}
                </Link>
            ))}
        </div>
    </div>
        
  )
}

export default SuggestedPosts