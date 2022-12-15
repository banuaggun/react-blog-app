import { Link } from 'react-router-dom';

import PostAuthor from "./PostAuthor";

import ReactionButtons from "./ReactionButtons";

import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({post}) => {
  return (
    <article>
      <div className='post__text'>
        <div className='post__text__area'>
      <span className='post__text__area__title'>{post.title}</span>
      <p className='excerpt'>{post.body.substring(0, 75)}...
      
      </p>
      <p className="postCredit">
       <img src={post.photos} alt="" />
        <PostAuthor userId = {post.userId} />
        
        <TimeAgo timestamp={post.date} />
      </p>
      </div>
      </div>
      <div className='post__buttons'>
      <Link to={`post/${post.id}`}>View Post</Link>
      <ReactionButtons post={post} />
      </div>
    </article>
  )
}

export default PostsExcerpt