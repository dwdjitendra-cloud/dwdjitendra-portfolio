import { useState, useEffect, useCallback } from 'react';

export interface GitHubStats {
  followers: number;
  publicRepos: number;
  totalStars: number;
  totalPRs: number;
  totalContributions: number;
  error?: string;
}

const GITHUB_API = 'https://api.github.com';
const USERNAME = 'dwdjitendra-cloud';

export function useGitHubStats(token?: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const headers: Record<string, string> = token ? { Authorization: `token ${token}` } : {};
      // Followers & public repos
      const userRes = await fetch(`${GITHUB_API}/users/${USERNAME}`, { headers });
      const user = await userRes.json();

      // Repos for stars
      const reposRes = await fetch(`${GITHUB_API}/users/${USERNAME}/repos?per_page=100`, { headers });
      const repos = await reposRes.json();
      const totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);

      // PRs (public + private)
      const prsRes = await fetch(`${GITHUB_API}/search/issues?q=type:pr+author:${USERNAME}`, { headers });
      const prsData = await prsRes.json();
      const totalPRs = prsData.total_count;

      // Contributions (last year)
      const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}`);
      const contribData = await contribRes.json();
      const totalContributions = contribData.total;

      setStats({
        followers: user.followers,
        publicRepos: user.public_repos,
        totalStars,
        totalPRs,
        totalContributions,
      });
    } catch (err: any) {
      setError('Failed to fetch GitHub stats');
      setStats(null);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { stats, loading, error, refresh: fetchStats };
}
