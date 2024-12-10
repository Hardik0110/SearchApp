import React from 'react';

import { SearchBar } from './SearchBar';

export function Header({ searchQuery, onSearchChange }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          
          <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
        </div>
      </div>
    </header>
  );
}