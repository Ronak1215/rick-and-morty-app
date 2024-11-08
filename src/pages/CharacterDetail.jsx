import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    }
    fetchCharacter();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="max-w-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <img src={character.image} alt={character.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
    </div>
  );
}

export default CharacterDetail;
