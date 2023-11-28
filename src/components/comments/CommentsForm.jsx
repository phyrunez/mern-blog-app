import { useState } from 'react'

const CommentsForm = ({ btnLabel, formSubmitHandler, formCancelHandler = null, initialText = "" }) => {
  const [value, setValue] = useState(initialText)

  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("")
  }  

  return (
    <form onSubmit={submitHandler}>
        <div className='flex flex-col items-end border border-primary rounded-lg p-4'>
            <textarea 
                rows="5"
                className='w-full focus:outline-none bg-transparent font-montserrat'
                placeholder='Leave your comment here...'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
                { formCancelHandler && (
                    <button 
                        onClick={formCancelHandler}
                        className='w-20 text-xs text-red-500 border-red-500 px-4 py-2 lg:px-4 md:py-2 md:mt-1.5 rounded-lg border md:border-red-500 md:text-red-500'
                    >
                        Cancel
                    </button>
                )}
                <button
                    type='submit'
                    className='w-20 text-xs px-4 py-2 lg:px-6 lg:py-2.5 rounded-lg bg-primary text-white lg:font-semibold md:mt-2'
                >
                    {btnLabel}
                </button>
            </div>  
        </div>
    </form>
  )
}

export default CommentsForm