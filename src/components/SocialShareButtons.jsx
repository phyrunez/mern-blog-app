import React from 'react'
import { FaFacebookSquare, FaRedditSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className='w-full flex justify-between'>
        <a target="_blank" rel="noreferrer" href={`https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`}>
            <FaFacebookSquare className='text-[#3b5598] w-10 h-auto' />
        </a>
        <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${url}`}>
            <FaTwitterSquare className='text-[#00acee] w-10 h-auto' />
        </a>
        <a target="_blank" rel="noreferrer" href={`https://www.reddit.com/dialog/submit?url=${url}&title=${title}`}>
            <FaRedditSquare className='text-[#ff4500] w-10 h-auto' />
        </a>
        <a target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?text=${url}`}>
            <FaWhatsappSquare className='text-[#25D366] w-10 h-auto' />
        </a>
    </div>
  )
}

export default SocialShareButtons