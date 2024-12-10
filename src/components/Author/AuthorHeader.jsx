import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function AuthorHeader({ author }) {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Posts
        </Link>
        <div className="flex items-center gap-6">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{author.name}</h1>
            <p className="text-gray-600 mt-2">{author.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}