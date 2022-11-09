import Link from "next/link";
import Container from "components/Container";
import useSWR from "swr";
import Image from "next/image";
import { AiFillStar } from 'react-icons/ai'
import { RiUserUnfollowFill, RiGitRepositoryLine } from 'react-icons/ri'
import { BiCodeBlock } from 'react-icons/bi'
import GithubGraph from "components/GithubGraph";


import fetcher from "utils/fetcher";

export default function Projects() {

  const { data, error } = useSWR<any>(`api/github`, fetcher);

  const avatar_url = data?.avatar
  const followers = data?.followers
  const public_repos = data?.public_repos
  const stars = data?.stars

  return (
    <Container title="Projects - Charles Kasasira">
      <div className="flex flex-col justify-center items-start mb-16 w-full text-black dark:text-white">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Charles Kasasira
        </h1>
        <h2 className="tracking-tight my-4 text-gray-700 dark:text-white">
          Projects on Github
        </h2>
        <Image src={avatar_url} alt="charles kaasira" width={50} height={50} className="rounded-full" />
        <div className="flex flex-wrap gap-2 items-center justify-between w-full my-4">
          <h3 className="font-light flex items-center justify-between gap-1"> <RiUserUnfollowFill /> followers: <span className="font-medium">{followers}</span></h3>
          <h3 className="font-light flex items-center justify-between gap-1"><AiFillStar /> stars: <span className="font-medium">{stars}</span></h3>
          <h3 className="font-light flex items-center justify-between gap-1"><RiGitRepositoryLine /> public repos: <span className="font-medium">{public_repos}</span></h3>
          <h3 className="font-light flex items-center justify-between gap-1"><BiCodeBlock /> public gists: <span className="font-medium">{followers}</span></h3>
        </div>

        <div className="flex justify-center w-full overflow-x-scroll">
          <GithubGraph />
        </div>
        
        
      </div>
    </Container>
  );
}
