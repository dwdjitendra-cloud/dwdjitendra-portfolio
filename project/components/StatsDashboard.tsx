"use client";
import React from 'react';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { useLeetCodeStats } from '../hooks/useLeetCodeStats';

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Set in .env.local

export default function StatsDashboard() {
  const { stats: github, loading: ghLoading, error: ghError, refresh: refreshGH } = useGitHubStats(GITHUB_TOKEN);
  const { stats: leetcode, loading: lcLoading, error: lcError, refresh: refreshLC } = useLeetCodeStats();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 via-yellow-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
        <span className="inline-block px-4 py-2 rounded-xl shadow-xl border-2 border-blue-400/30 backdrop-blur-lg">
          <span className="mr-2">�</span>My Coding Stats
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {/* GitHub Card */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700 rounded-2xl shadow-2xl p-8 text-white flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <svg className="w-10 h-10 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            <span className="text-2xl font-bold tracking-wide text-blue-300">GitHub</span>
          </div>
          {ghLoading ? (
            <p>Loading...</p>
          ) : ghError ? (
            <p className="text-red-400">{ghError}</p>
          ) : github ? (
            <ul className="space-y-3 text-lg w-full">
              <li className="flex justify-between"><span>Followers:</span> <span className="font-bold">{typeof github.followers === 'number' ? github.followers : JSON.stringify(github.followers)}</span></li>
              <li className="flex justify-between"><span>Public Repos:</span> <span className="font-bold">{typeof github.publicRepos === 'number' ? github.publicRepos : JSON.stringify(github.publicRepos)}</span></li>
              <li className="flex justify-between"><span>Total Stars:</span> <span className="font-bold">{typeof github.totalStars === 'number' ? github.totalStars : JSON.stringify(github.totalStars)}</span></li>
              <li className="flex justify-between"><span>Total PRs:</span> <span className="font-bold">{typeof github.totalPRs === 'number' ? github.totalPRs : JSON.stringify(github.totalPRs)}</span></li>
              <li className="flex justify-between">
                <span>Total Contributions:</span>
                <span className="font-bold">
                  {(() => {
                    if (
                      github.totalContributions &&
                      typeof github.totalContributions === 'object' &&
                      !Array.isArray(github.totalContributions)
                    ) {
                      const contribObj = github.totalContributions as Record<string, number>;
                      const years = Object.keys(contribObj).sort();
                      return years.map(year => (
                        <span key={year} className="block text-blue-200">{year}: <span className="text-white font-bold">{contribObj[year]}</span></span>
                      ));
                    }
                    return typeof github.totalContributions === 'number'
                      ? github.totalContributions
                      : JSON.stringify(github.totalContributions);
                  })()}
                </span>
              </li>
            </ul>
          ) : null}
          <button
            className="mt-6 px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition text-lg font-semibold shadow-md"
            onClick={refreshGH}
          >
            Refresh Stats
          </button>
        </div>
        {/* LeetCode Card */}
        <div className="bg-gradient-to-br from-gray-900 via-yellow-700 to-yellow-500 rounded-2xl shadow-2xl p-8 text-white flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <svg className="w-10 h-10 mr-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            <span className="text-2xl font-bold tracking-wide text-yellow-200">LeetCode</span>
          </div>
          {lcLoading ? (
            <p>Loading...</p>
          ) : lcError ? (
            <p className="text-red-400">{lcError}</p>
          ) : leetcode ? (
            <ul className="space-y-3 text-lg w-full">
              <li className="flex justify-between"><span>Total Solved:</span> <span className="font-bold">{typeof leetcode.totalSolved === 'number' ? leetcode.totalSolved : JSON.stringify(leetcode.totalSolved)}</span></li>
              <li className="flex justify-between"><span>Easy:</span> <span className="font-bold">{typeof leetcode.easySolved === 'number' ? leetcode.easySolved : JSON.stringify(leetcode.easySolved)}</span></li>
              <li className="flex justify-between"><span>Medium:</span> <span className="font-bold">{typeof leetcode.mediumSolved === 'number' ? leetcode.mediumSolved : JSON.stringify(leetcode.mediumSolved)}</span></li>
              <li className="flex justify-between"><span>Hard:</span> <span className="font-bold">{typeof leetcode.hardSolved === 'number' ? leetcode.hardSolved : JSON.stringify(leetcode.hardSolved)}</span></li>
              <li className="flex justify-between"><span>Rating:</span> <span className="font-bold">{typeof leetcode.rating === 'number' ? leetcode.rating : (leetcode.rating ?? 'N/A')}</span></li>
              <li className="flex justify-between"><span>Rank:</span> <span className="font-bold">{typeof leetcode.ranking === 'number' ? leetcode.ranking : (leetcode.ranking ?? 'N/A')}</span></li>
            </ul>
          ) : null}
          <button
            className="mt-6 px-6 py-2 bg-yellow-500 rounded-xl hover:bg-yellow-600 transition text-lg font-semibold shadow-md"
            onClick={refreshLC}
          >
            Refresh Stats
          </button>
        </div>
      </div>
    </div>
  );
}
