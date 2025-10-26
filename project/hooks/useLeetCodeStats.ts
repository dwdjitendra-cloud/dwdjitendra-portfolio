import { useState, useEffect, useCallback } from 'react';

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number | null;
  rating: number | null;
  error?: string;
}

const USERNAME = 'little_krishna';

export function useLeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // LeetCode unofficial API (GraphQL)
      const res = await fetch('https://leetcode-stats-api.herokuapp.com/' + USERNAME);
      const data = await res.json();

      setStats({
        totalSolved: data.totalSolved,
        easySolved: data.easySolved,
        mediumSolved: data.mediumSolved,
        hardSolved: data.hardSolved,
        ranking: data.ranking || null,
        rating: data.contributionPoints || null,
      });
    } catch (err: any) {
      setError('Failed to fetch LeetCode stats');
      setStats(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { stats, loading, error, refresh: fetchStats };
}
