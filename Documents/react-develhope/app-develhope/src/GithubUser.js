import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error } = useGithubUser(username);

  return (
    <div>
      {error && <h1>There has been an error.</h1>}
      {!error && !data && <h1>Enter a Github username to load user data.</h1>}
      {!error && data && <h1>{data.name}</h1>}
    </div>
  );
}
