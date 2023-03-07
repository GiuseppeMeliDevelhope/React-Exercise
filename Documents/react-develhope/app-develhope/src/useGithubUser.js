import useSWR from 'swr';

export function useGithubUser(username) {
  const { data, error } = useSWR(`https://api.github.com/users/${username}`, async (url) => {
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error("Failed to fetch user data");
    }

    const json = await response.json();

    return console.log(json)
  });

  const loading = !data && !error;

  return {
    data,
    error,
    loading,
  };
}
