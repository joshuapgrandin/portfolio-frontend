import { useEffect, useState } from "react";
import type { GithubCommit } from "../../../types";

const timeAgo = (dateString: string): string => {
  const diff = Date.now() - new Date(dateString).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) return `${weeks}w ago`;
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  return `${minutes}m ago`;
};

const GithubCommits = () => {
  const [commits, setCommits] = useState<GithubCommit[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/joshuapgrandin/repos?sort=pushed&per_page=10",
        );

        if (!res.ok) throw new Error(`Response Error ${res.status}`);

        const repos = await res.json();

        const commitResponse = await Promise.all(
          repos.map(async (repo: any) => {
            const res = await fetch(
              `https://api.github.com/repos/joshuapgrandin/${repo.name}/commits?per_page=2`,
            );
            const commits = await res.json();
            return commits.map((commit: any) => ({
              ...commit,
              repoName: repo.name,
            }));
          }),
        );

        const allCommits: GithubCommit[] = commitResponse
          .flat()
          .map((commit: any) => ({
            sha: commit.sha,
            repoName: commit.repoName,
            commit: {
              message: commit.commit.message,
              author: {
                name: commit.commit.author.name,
                date: commit.commit.author.date,
              },
            },
            html_url: commit.html_url,
          }))
          .sort(
            (a, b) =>
              new Date(b.commit.author.date).getTime() -
              new Date(a.commit.author.date).getTime(),
          )
          .slice(0, 5);

        setCommits(allCommits);
      } catch (error) {
        setError("Error loading commits");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (isLoading)
    return (
      <div className="border-line bg-bg border-r p-6">
        <p className="text-ink-faint animate-pulse font-mono text-xs">
          fetching commits...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="border-line bg-bg border-r p-6">
        <p className="text-crit font-mono text-xs">{error}</p>
      </div>
    );

  return (
    <div className="border-line bg-bg border-r p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-ink font-serif text-2xl">Recent commits</h2>
        <p className="text-ink-faint mt-1 font-mono text-xs">
          Live feed from the repos powering this very site and active projects.
        </p>
      </div>

      {/* Commit list */}
      <ul className="flex flex-col">
        {commits?.map((commit) => (
          <li
            key={commit.sha}
            className="border-line group border-b border-dashed py-3"
          >
            <a
              href={commit.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[60px_120px_1fr_60px] items-center gap-4"
            >
              {/* SHA */}
              <span className="text-accent font-mono text-xs">
                {commit.sha.slice(0, 7)}
              </span>

              {/* Repo name */}
              <span className="text-ink-faint truncate font-mono text-[10px] tracking-wider uppercase">
                {commit.repoName}
              </span>

              {/* Message */}
              <span className="text-ink-dim group-hover:text-ink truncate font-mono text-xs transition-colors duration-150">
                {commit.commit.message}
              </span>

              {/* Time ago */}
              <span className="text-ink-faint text-right font-mono text-[10px]">
                {timeAgo(commit.commit.author.date)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubCommits;
