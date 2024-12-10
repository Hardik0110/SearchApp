import React from 'react';
import { useParams } from 'react-router-dom';
import { AuthorHeader } from '../components/Author/AuthorHeader';
import { PostCard } from '../components/Post/PostCard';
import { getAuthorPosts, findAuthorById } from '../utils/postUtils';
import postsData from '../data/posts.json';

export function AuthorPage() {
  const { id } = useParams();
  const authorId = Number(id);

  const author = findAuthorById(postsData.posts, authorId);
  const authorPosts = getAuthorPosts(postsData.posts, authorId);

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthorHeader author={author} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Posts by {author.name}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {authorPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}