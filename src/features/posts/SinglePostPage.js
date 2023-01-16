import {useSelector} from 'react-redux';

import { selectPostById } from './postsSlice';

import PostAuthor from './PostAuthor';

import TimeAgo from './TimeAgo';

import ReactionButtons from './ReactionButtons';
import { Link, useParams } from 'react-router-dom';
import '../../assets/styles/singlePost.css';
const SinglePostPage = () => {

  const {postId} = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)))

  if(!post){
    return(
      <section>
        <h2>Post not found</h2>
      </section>
    )
  }
  return (
    <article>
      <div className='single__post'>
        <span className='single__post__title'>{post.title}</span>
        <div className='single__post__body'>
          <span>{post.body}</span>
        </div>
        <div className='single__post__end'>
          <div className='single__post__end__time'>
            <TimeAgo timestamp={post.date} />
          </div>
          <div className='single__post__end__author'>
            <PostAuthor userId = {post.userId} />
          </div>
        </div>
        <div className='postCredit single__post__buttons'>
          <div className='single__post__buttons__reactions'>
            <ReactionButtons post = {post} />
          </div>
          <dv className='single__post__buttons__edit'>
            <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
          </dv>
        </div>
      </div>
      
    </article>
  )
}

export default SinglePostPage