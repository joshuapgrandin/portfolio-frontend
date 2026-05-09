export interface GithubCommit {
  sha: string;
  repoName: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}
