import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { selectAllUsers } from '../users/usersSlice';
import { selectPostById, updatePost, deletePost } from './postsSlice';

import '../../assets/styles/form.css';

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState('idle');

  const dispatch = useDispatch();

  if (!post) {
    return (
      <section>
        <h2>Post Not Found!</h2>
      </section>
    )
  }

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onAuthorChanged = e => setUserId(Number(e.target.value));

  const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle';

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus('pending');
        dispatch(updatePost({ id: post.id, title, body: content, userId, reactions: post.reactions })).unwrap();
        setTitle('');
        setContent('');
        setUserId('');
        navigate(`/post/${postId}`);
      } catch (err) {
        console.log('Failed to save the post', err);
      } finally {
        setRequestStatus('idle');
      }
    }
  }

  const usersOptions = users.map(user => (
    <option 
      key={user.id} 
      value={user.id}
    >
      {user.name}
    </option>
  ))

  const onDeletePostClicked = () => {
    try {
      setRequestStatus('pending');
      dispatch(deletePost({ id: post.id })).unwrap();
      setTitle('');
      setContent('');
      setUserId('');
      navigate('/');
    } catch (err) {
      console.log('failed to delete post', err);
    } finally {
      setRequestStatus('idle');
    }
  }

  return (
    <section>
      <div className='edit__post__form'>
        <div className='edit__post__form__title'>
          <span>Edit Post</span>
          <p>
            You can reach your readers by editing and publishing a post.
          </p>
         
        </div>
      
      
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input 
          type='text' 
          id='postTitle' 
          name='postTitle' 
          value={title} 
          onChange={onTitleChanged} 
        />
        <label htmlFor='postAuthor'>Author:</label>
        <select 
          id='postAuthor' 
          defaultValue={userId} 
          onChange={onAuthorChanged}
        >
          <option value=''></option>
          {usersOptions}
        </select>
        <label htmlFor='postContent'>Content:</label>
        <textarea 
          id='postContent' 
          name='postContent' 
          value={content} 
          onChange={onContentChanged} 
          rows="12"
        />
        <button 
          type='button' 
          onClick={onSavePostClicked} 
          disabled={!canSave}
        >
          <span>Save Post</span>
        </button>
        <button 
          type='button' 
          className='deleteButton' 
          onClick={onDeletePostClicked}
        >
          <span>Delete Post</span>
        </button>
      </form>
      </div>
    </section>
  )
}

export default EditPostForm