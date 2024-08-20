"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Page.module.css";

interface Pokemon {
  id: number;
  name: string;
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
}

const LIMIT = 20; // Number of Pokémon to fetch per request

export default function Page() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0); // Track the offset for pagination
  const [hasMore, setHasMore] = useState(true); // Track if there are more Pokémon to load
  const router = useRouter();

  const fetchPokemonData = async (offset: number) => {
    try {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      const pokemonPromises = data.results.map(async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        return pokemonResponse.json();
      });

      const newPokemonList = await Promise.all(pokemonPromises);

      // Check if there are more Pokémon to load
      setHasMore(newPokemonList.length === LIMIT);

      // Avoid duplicating Pokémon by filtering out already existing ones
      setPokemonList((prevList) => {
        const existingIds = new Set(prevList.map(p => p.id));
        const uniqueNewPokemon = newPokemonList.filter(p => !existingIds.has(p.id));
        return [...prevList, ...uniqueNewPokemon];
      });
    } catch (error) {
      setError("Error fetching Pokémon data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData(offset);
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

  if (loading && offset === 0) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching Pokémon data: {error}</h1>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Pokémon Dex</h1>
      <div className={styles.pokemonList}>
        {pokemonList.map((pokemon) => {
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

          return (
            <div
              key={pokemon.id} // Use pokemon.id as the key for unique identification
              className={styles.pokemonCard}
              onClick={() => router.push(`/pokemon/${pokemon.name}`)}
            >
              <h2 className={styles.pokemonName}>{pokemon.name}</h2>
              <img src={imageUrl} alt={pokemon.name} className={styles.pokemonImage} />
            </div>
          );
        })}
      </div>
      {hasMore && (
        <button
          className={styles.loadMoreButton}
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load More Pokémon'}
        </button>
      )}
    </div>
  );
}
