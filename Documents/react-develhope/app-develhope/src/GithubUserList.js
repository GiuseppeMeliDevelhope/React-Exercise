import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

export function GithubUserList() {
  const [username, setUsername] = useState('');
  const [usernames, setUsernames] = useState([]);

  const handleAddUser = () => {
    setUsernames([...usernames, username]);
    setUsername('');
  };

  return (
    <div>
      <div>
        <label>Put in here your Github Username:</label>
        <br />
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <Link to={`${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
      <Routes>
      <Route path="" element={<p>Add a user and select it</p>} />
      </Routes>
    </div>
  );
}
