import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div className="flex items-center bg-gray-900 p-2 rounded-lg mb-4">
      <input
        type="text"
        placeholder="Search characters..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg ml-2">Search</button>
    </div>
  );
}

export default SearchBar;
