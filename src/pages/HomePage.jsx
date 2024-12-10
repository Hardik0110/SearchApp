import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header/Header';
import { PostCard } from '../components/Post/PostCard';
import { filterPosts } from '../utils/postUtils';
import postsData from '../data/posts.json';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    if (!postsData || !postsData.posts) return [];
    return filterPosts(postsData.posts, searchQuery);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
