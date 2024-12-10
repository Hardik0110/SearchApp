import React from 'react';
import { Link } from 'react-router-dom';
import { AuthorInfo } from './Post/AuthorInfo';



export function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/author/${post.author.id}`}
          className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
        >
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              {post.author.name}
            </h3>
            <p className="text-sm text-gray-500">{post.author.bio}</p>
          </div>
        </Link>
      </div>
    </article>
  );
}