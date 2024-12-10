import React from 'react';
import { PostTags } from './PostTags';
import { AuthorInfo } from './AuthorInfo';

export function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <PostTags tags={post.tags} />
        <AuthorInfo author={post.author} />
      </div>
    </article>
  );
}