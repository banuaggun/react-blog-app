import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice';
import { selectUserById } from './usersSlice';

import '../../assets/styles/userPage.css';

const UserPage = () => {

  const {userId} = useParams();

  const user = useSelector(state => selectUserById(state, Number(userId)));

  const postsForUser = useSelector(state => selectPostsByUser(state, Number(userId)));
  /*
    const postsForUser = useSelector(state => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter(post => post.userId === Number(userId)); 
  });
  */

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>
        {post.title}
      </Link>
    </li>
  ))
  return (
    <section>
      <div className='user__page'>
        <div className='user__page__title'>
          <span>{user?.name}</span>
        </div>
        <div className='user__page__body'>
          <ul>{postTitles}</ul>
        </div>
      </div>
      
      
    </section>
  )
}

export default UserPage