import {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addNewPost } from './postsSlice';

import { selectAllUsers } from '../users/usersSlice';

import { useNavigate } from 'react-router-dom';

import '../../assets/styles/form.css';

const AddPostForm = () => {

  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onAuthorChanged = e => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = () => {
    if(canSave){
      try{
        setAddRequestStatus('pending');
        dispatch(addNewPost({title, body:content, userId})).unwrap();
        setTitle('');
        setContent('');
        setUserId('');
        navigate('/');
      }catch (err){
        console.error('failed to save the post', err);
      }finally{
        setAddRequestStatus('idle');
      }
    }
  }

  
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
  return (
    <section>
      <div className='add__post__form'>
        <span>Add a new post</span>
        <form>
          <label htmlFor='postTitle'>Post Title:</label>
          <input type="text" id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />

          <label htmlFor='postAuthor'>Author:</label>
          <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
            <options value=""></options>
            {usersOptions}
          </select>

          <label htmlFor='postContent'>Content:</label>
          <textarea id='postContent' rows="12" name='postContent' value={content} onChange={onContentChanged} />

          <button type='button' onClick={onSavePostClicked} disabled={!canSave}>
            <span>Save Post</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default AddPostForm