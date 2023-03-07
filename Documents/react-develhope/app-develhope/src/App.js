
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';
import { ShowGithubUser } from './ShowGithubUser';
import { Age } from "./Age";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";

export function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/age">GithubUser</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/hey">unknown route</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome name="Giuseppe" />} />
          <Route path="/age" element={<Age age={27} />} />
          <Route path="/counter" element={<ClickCounter initialValue={0} incrementBy={1} />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
          <Route path="/about" />
          <Route path="*" element={<NotFound />} />
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

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
