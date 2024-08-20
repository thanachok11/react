"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Import useParams and useRouter from next/navigation
import styles from "./Page.module.css"; // Import the CSS module

interface PokemonDetailProps {
  id: number;
  name: string;
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  sprites: { other: { "official-artwork": { front_default: string } } };
}

export default function PokemonDetail() {
  const { name } = useParams<{ name: string }>(); // Get pokemon name from URL params
  const router = useRouter(); // Initialize the router

  const [pokemon, setPokemon] = useState<PokemonDetailProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPokemonDetail() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    if (name) {
      fetchPokemonDetail();
    }
  }, [name]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching Pokémon data: {error}</h1>;
  }

  if (!pokemon) {
    return <h1>No data found</h1>;
  }

  const { id, name: pokemonName, types, abilities, sprites } = pokemon;
  const imageUrl = sprites.other["official-artwork"].front_default;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{pokemonName}</h1>
      <div className={styles.pokemonCard}>
        <img src={imageUrl} alt={pokemonName} className={styles.pokemonImage} />
        <div className={styles.pokemonDetails}>
          <p className={styles.pokemonType}>Types: {types.map((type) => type.type.name).join(", ")}</p>
          <p className={styles.pokemonAbility}>Abilities: {abilities.map((ability) => ability.ability.name).join(", ")}</p>
          <button className={styles.goBackButton} onClick={() => router.back()}>
          Back
        </button>
        </div>
      </div>
    </div>
  );
}
