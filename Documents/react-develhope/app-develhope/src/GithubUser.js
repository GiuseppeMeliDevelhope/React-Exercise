import { useGithubUser } from "./useGithubUser";


export function GithubUser({ username }) {
  const { data, error, loading } = useGithubUser(username);

  if (loading) {
    return <h1>Loading user data...</h1>;
  }

  if (error) {
    return <h1>There has been an error.</h1>;
  }

  if (!data) {
    return <h1>Enter a Github username to load user data.</h1>;
  }

  return <h1>{data.name}</h1>;
}