import React from 'react';

export function PostTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}