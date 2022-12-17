import { useDispatch } from "react-redux"

import { reactionAdded } from "./postsSlice"

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  rocket: '🚀'
}

const ReactionButtons = ({post}) => {

  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return(
      <button key={name} type="buton" className="reaction__button" onClick = {() => dispatch(reactionAdded({postId:post.id, reaction:name}))}>
        <span className="reaction__button__icon">
          {emoji}
        </span>
        <span className="reaction__button__text">
          {post.reactions[name]}
        </span> 
      </button> 
    )
  })
  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons