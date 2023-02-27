import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { ClickCounter } from "./ClickCounter"

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
              <Link to="/clickcounter">ClickCounter</Link>
            </li>
          </ul>
        </nav>

        <Routes exact path="/">
          <Route element={<div><h1>Welcome to my app!</h1></div>} />
        </Routes>
        <Routes path="/clickcounter" element={<ClickCounter initialValue={10} incrementBy={2} />} />
      </div>
    </Router>
  );
}
