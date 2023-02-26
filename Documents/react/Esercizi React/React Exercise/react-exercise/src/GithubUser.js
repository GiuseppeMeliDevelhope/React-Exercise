import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error, loading, fetchGithubUser } = useGithubUser();

  function handleGetUserData() {
    fetchGithubUser(username);
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Load user data.</button>
      {loading && <h1>loading...</h1>}
      {error && <h1>There has been an error.</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
