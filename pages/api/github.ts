import { type NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler(req: NextRequest) {
  const userResponse = await fetch('https://api.github.com/users/charleskasasira');
  const userReposResponse = await fetch(
    'https://api.github.com/users/charleskasasira/repos?per_page=100'
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  const mine = repositories.filter((repo) => !repo.fork);
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository['stargazers_count'];
  }, 0);

  console.log(user)

  return new Response(
    JSON.stringify({
      avatar: user.avatar_url,
      followers: user.followers,
      stars,
      public_repos: user.public_repos,
      public_gists: user.public_gists
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
      }
    }
  );
}