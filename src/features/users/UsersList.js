import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectAllUsers } from './usersSlice'
import '../../assets/styles/users.css'
const UsersList = () => {

  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map(user => (
    <li key={user.id}>
      <Link to={`/user/${user.id}`}>
        {user.name}
      </Link>
    </li>
  ))
  return (
    <section>
      <div className='users__page'>
      <span>Authors</span>
      <ul className='users__page__list'> {renderedUsers}</ul>
      </div>
      
    </section>
  )
}

export default UsersList