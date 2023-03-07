
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { GithubUserList } from './GithubUserList';
import { ShowGithubUser } from './ShowGithubUser';

function Home() {
  return <h1>Welcome to Github User Search!</h1>;
}



function NotFound() {
  return <h1>404 - Page not found</h1>;
}


export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Github Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/*" element={<GithubUserList />}>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
