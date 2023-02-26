import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [username, setUsername] = useState("");


  function handleAddUser() {
    setUsernames([...usernames, username]);
    setUsername("");
  }

  return (
    <div>
      <label>Put in here a Github Username:</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleAddUser}>Add user</button>

      {usernames.map((username) => (
        <GithubUser key={username} username={username} />
      ))}
    </div>
  );
}
