import React from 'react';

function CharacterCard({ character }) {
  return (
    <div className="max-w-sm mx-auto bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={character.image} alt={character.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{character.name}</h3>
        <p className="text-sm text-gray-400">{character.species}</p>
        <p className="text-sm">{character.status}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
