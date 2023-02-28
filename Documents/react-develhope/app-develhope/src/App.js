
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';
import { ShowGithubUser } from './ShowGithubUser';


export function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <div>
       

        <Routes>
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>

        <div>
          <label>Put in here your Github Username:</label>
          <br />
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
          <Link to={`/users/${username}`}>
            <button>Confirm</button>
          </Link>
        </div>
      </div>
    </Router>
  );
}
