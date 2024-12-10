import React from 'react';
import { Link } from 'react-router-dom';

export function AuthorInfo({ author }) {
  return (
    <Link
      to={`/author/${author.id}`}
      className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
    >
      <img
        src={author.avatar}
        alt={author.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="text-sm font-medium text-gray-900">{author.name}</h3>
        <p className="text-sm text-gray-500">{author.bio}</p>
      </div>
    </Link>
  );
}