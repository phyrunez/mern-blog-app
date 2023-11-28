import { useState, useEffect } from 'react'
import { getCommentsData } from '../../data/comments';
import Comment from './Comment';
import CommentsForm from './CommentsForm'

const CommentsContainer = ({ className, loggedInUserId }) => {
  const [comments, setComments] = useState([]);
  const [affectedComments, setAffectedComments] = useState(null);

  const mainComments = comments.filter(comment => comment.parent === null);

  console.log(comments)

  useEffect(() => {
    (async () => {
        const commentData = await getCommentsData();
        setComments(commentData);
    })();
  }, [])

  const addCommentsHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
        _id: Math.random().toString(),
        user: {
            _id: "a",
            name: "Mohammed Razaii"
        },
        desc: value,
        post: "1",
        parent: parent,
        replyOnUser: replyOnUser,
        createdAt: new Date().toISOString()
    }
    setComments(curState => {
        return [newComment, ...curState]
    })
    setAffectedComments(null)
  }

  const updateCommentHandler = (value, commentId) => {
    const updatedComments = comments.map(comment => {
        if (comment._id === commentId) return { ...comment, desc: value }
        return comment;
    })
    setComments(updatedComments)
    setAffectedComments(null)
  }
  
  const deleteCommentHandler = (commentId) => {
    const updatedComments = comments.filter(comment => {
        return comment._id !== commentId;
    })
    setComments(updatedComments)
  }

  const getRepliesHandler = (commentId) => {
    return comments
    .filter(comment => comment.parent === commentId)
    .sort((a, b) => {
        return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
    })
  }

  return (
    <div className={`${className}`}>
        <CommentsForm 
            btnLabel="Send"
            formSubmitHandler={(value) => addCommentsHandler(value)} 
        />
        <div className="space-y-4 mt-8">
            { mainComments.map(comment => (
                <Comment 
                    key={comment._id}
                    comment={comment} 
                    loggedInUserId={loggedInUserId}
                    affectedComments={affectedComments}
                    setAffectedComments={setAffectedComments}
                    addComment={addCommentsHandler}
                    updateComment={updateCommentHandler}
                    deleteComment={deleteCommentHandler}
                    getReplies={getRepliesHandler(comment._id)}
                />
            )) }
        </div>
    </div>
  )
}

export default CommentsContainer