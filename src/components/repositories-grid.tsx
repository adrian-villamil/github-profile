import { getRepositoriesByUsername } from "@/actions/get-repositories-by-username";
import { dateToDays } from "@/utils/date-to-days";
import Link from "next/link";

interface Props {
  username: string;
  type: string;
}

export const RepositoriesGrid = async ({ username, type }: Props) => {
  const repositories = await getRepositoriesByUsername(username) ?? [];

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-9">
        {repositories.map((repository) => (
          <Link
            key={repository.id}
            href={repository.html_url}
            target="_blank"
            className="h-fit p-6 rounded-xl space-y-4 bg-gradient-to-r from-[#111729] to-[#1D1B48]"
          >
            <h1 className="text-xl font-medium text-[#CDD5E0]">{repository.name}</h1>
            <p className="text-sm text-[#CDD5E0]/60">{repository.description}</p>
            <div className="flex gap-x-4 items-center">
              <div className="flex items-center gap-x-2">
                {repository.license && (
                  <span className="pl-7 text-[#CDD5E0]/60 bg-[url('/Chield_alt.svg')] bg-left bg-no-repeat">
                    {repository.license.spdx_id}
                  </span>
                )}
                {repository.forks > 0 && (
                  <span className="pl-7 text-[#CDD5E0]/60 bg-[url('/Nesting.svg')] bg-left bg-no-repeat">
                    {repository.forks}
                  </span>
                )}
                {repository.stargazers_count > 0 && (
                  <span className="pl-7 text-[#CDD5E0]/60 bg-[url('/Star.svg')] bg-left bg-no-repeat">
                    {repository.stargazers_count}
                  </span>
                )}

              </div>
              <span className="text-xs text-[#CDD5E0]/60">
                {dateToDays(repository.updated_at)}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href={type === 'Organization' ? `https://github.com/orgs/${username}/repositories` : `https://github.com/${username}?tab=repositories`}
          target="_blank"
          className="text-sm text-[#CDD5E0]/60 hover:underline hover:underline-offset-2"
        >
          View all repositories
        </Link>
      </div>
    </div>
  );
};