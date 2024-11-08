import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?name=${searchTerm}`);
        const data = await response.json();
        setCharacters(data.results || []);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    }
    fetchCharacters();
  }, [searchTerm]);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
