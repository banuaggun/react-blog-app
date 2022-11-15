import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectAllUsers } from './usersSlice'

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
      <h2>Users</h2>
      <ul>{renderedUsers}</ul>
    </section>
  )
}

export default UsersList