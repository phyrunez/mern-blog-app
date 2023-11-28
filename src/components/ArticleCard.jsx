import React from 'react'
import { images } from '../constants'
import { BsCheckLg } from 'react-icons/bs'

const ArticleCard = ({ className }) => {
  return (
    <div
        className={`rounded-xl overflow-hidden shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ${className}`}
    >
        <img 
            src={images.Post} 
            alt="post" 
            className='w-full object-cover object-center h-auto'
        />
        <div className='p-5'>
            <h2 className="font-poppins font-bold text-xl text-dark-soft">
                Future of work
            </h2>
            <p className='text-dark-light mt-3 text-sm'>
                Majority of people will work in jobs that don't exist today.
            </p>
            <div className="flex justify-between flex-nowrap items-center mt-6">
                <div className="flex items-center gap-x-2">
                    <img src={images.PostProfile} alt="post profile" />
                    <div className="flex flex-col">
                        <h4 className="font-bold italic text-dark-soft text-sm">
                            Viola Manisa
                        </h4>
                        <div className="flex items-center gap-x-2">
                            <span className='bg-[#36837E] w-fit bg-opacity-20 p-1.5 rounded-full'>
                                <BsCheckLg className='w-2 h-2 text-[#36837E]' />
                            </span>
                            <span className='italic text-dark-light text-xs'>Verified writer</span>
                        </div>
                    </div>
                </div>
                <span className='font-bold text-dark-light italic text-sm'>02 Jun</span>
            </div>
        </div>
    </div>
  )
}

export default ArticleCard