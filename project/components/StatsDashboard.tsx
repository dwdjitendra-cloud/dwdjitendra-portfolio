import React from 'react';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { useLeetCodeStats } from '../hooks/useLeetCodeStats';

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Set in .env.local

export default function StatsDashboard() {
  const { stats: github, loading: ghLoading, error: ghError, refresh: refreshGH } = useGitHubStats(GITHUB_TOKEN);
  const { stats: leetcode, loading: lcLoading, error: lcError, refresh: refreshLC } = useLeetCodeStats();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">My Coding Stats</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* GitHub Card */}
        <div className="flex-1 bg-gradient-to-br from-gray-800 to-blue-900 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            <span className="text-xl font-semibold">GitHub</span>
          </div>
          {ghLoading ? (
            <p>Loading...</p>
          ) : ghError ? (
            <p className="text-red-400">{ghError}</p>
          ) : github ? (
            <ul className="space-y-2">
              <li>Followers: <span className="font-bold">{github.followers}</span></li>
              <li>Public Repos: <span className="font-bold">{github.publicRepos}</span></li>
              <li>Total Stars: <span className="font-bold">{github.totalStars}</span></li>
              <li>Total PRs: <span className="font-bold">{github.totalPRs}</span></li>
              <li>Total Contributions: <span className="font-bold">{github.totalContributions}</span></li>
            </ul>
          ) : null}
          <button
            className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            onClick={refreshGH}
          >
            Refresh Stats
          </button>
        </div>
        {/* LeetCode Card */}
        <div className="flex-1 bg-gradient-to-br from-gray-800 to-yellow-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            <span className="text-xl font-semibold">LeetCode</span>
          </div>
          {lcLoading ? (
            <p>Loading...</p>
          ) : lcError ? (
            <p className="text-red-400">{lcError}</p>
          ) : leetcode ? (
            <ul className="space-y-2">
              <li>Total Solved: <span className="font-bold">{leetcode.totalSolved}</span></li>
              <li>Easy: <span className="font-bold">{leetcode.easySolved}</span></li>
              <li>Medium: <span className="font-bold">{leetcode.mediumSolved}</span></li>
              <li>Hard: <span className="font-bold">{leetcode.hardSolved}</span></li>
              <li>Rating: <span className="font-bold">{leetcode.rating ?? 'N/A'}</span></li>
              <li>Rank: <span className="font-bold">{leetcode.ranking ?? 'N/A'}</span></li>
            </ul>
          ) : null}
          <button
            className="mt-4 px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600 transition"
            onClick={refreshLC}
          >
            Refresh Stats
          </button>
        </div>
      </div>
    </div>
  );
}
