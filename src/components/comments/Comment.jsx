import React from 'react'
import { images } from '../../constants'
import { FiEdit2, FiMessageSquare, FiTrash } from "react-icons/fi"
import CommentsForm from './CommentsForm'

const Comment = ({ 
    comment, 
    loggedInUserId, 
    affectedComments, 
    setAffectedComments, 
    addComment, 
    parentId = null,
    updateComment,
    deleteComment,
    getReplies
}) => {
  const isUserLoggedIn = Boolean(loggedInUserId)  
  const commentsBelongsToUser = loggedInUserId === comment.user._id
  const isReplying = 
    affectedComments && 
    affectedComments.type === "replying" && 
    affectedComments._id === comment._id;
  const isEditing = 
    affectedComments && 
    affectedComments.type === "editing" && 
    affectedComments._id === comment._id;

  const repliedCommentId = parentId ? parentId : comment._id
  const replyOnUserId = comment.user._id

  return (
    <div className='flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg'>
        <img 
            src={images.PostProfile} 
            alt="profile-img" 
            className='w-9 h-9 object-cover rounded-full' 
        />
        <div className="flex-1 flex flex-col">
            <h5 className="font-bold text-dark-hard text-xs lg:text-sm">
                { comment.user.name }
            </h5>
            <span className='text-xs text-dark-light'>
                { new Date(comment.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit"
                }) }
            </span>
            { !isEditing && 
                <p className='font-montserrat mt-5 text-dark-light'>
                    { comment.desc }
                </p>
            }
            { isEditing && 
                <CommentsForm 
                    btnLabel='Update' 
                    formSubmitHandler={(value) => updateComment(value, comment._id)}
                    formCancelHandler={() => setAffectedComments(null)}
                    initialText={ comment.desc }
                /> 
            }
            <div className="flex items-center gap-x-3 font-montserrat text-sm mt-3 mb-3">
                { isUserLoggedIn && (
                    <button 
                        className="flex items-center space-x-2"
                        onClick={() => setAffectedComments({ type: 'replying', _id: comment._id })}
                    >
                        <FiMessageSquare className='w-4 h-auto' />
                        <span>Reply</span>
                    </button>
                )}
                { commentsBelongsToUser && (
                    <>
                        <button 
                            className="flex items-center space-x-2"
                            onClick={() => setAffectedComments({ type: 'editing', _id: comment._id })}
                        >
                            <FiEdit2 className='w-4 h-auto' />
                            <span>Edit</span>
                        </button>
                        <button 
                            className="flex items-center space-x-2"
                            onClick={() => deleteComment(comment._id)}
                        >
                            <FiTrash className='w-4 h-auto' />
                            <span>Delete</span>
                        </button>
                    </>
                )}
            </div>
            { isReplying && 
                <CommentsForm 
                    btnLabel='Reply' 
                    formSubmitHandler={(value) => addComment(value, repliedCommentId, replyOnUserId)}
                    formCancelHandler={() => setAffectedComments(null)}
                /> 
            }
            { getReplies.map(reply => (
                <Comment 
                    key={ reply._id }
                    addComment={ addComment }
                    affectedComments={ affectedComments }
                    setAffectedComments={ setAffectedComments }
                    comment={ reply }
                    deleteComment={ deleteComment }
                    loggedInUserId={ loggedInUserId }
                    getReplies={[]}
                    updateComment={ updateComment }
                    parentId={ comment._id }
                />
            ))}
        </div>
    </div>
  )
}

export default Comment