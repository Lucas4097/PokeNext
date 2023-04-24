"use client";

import { useState } from "react";
import Card from "./Card";
import List from "./List";
import React from "react";
import Modal from "./Modal";

function Pokedex({ pokemons }: any) {
  const [pokemon, setPokemon]: any = useState(1);
  const [modal, setModal] = useState(false)

  return (
    <div className="flex max-h-[78.5vh] py-4 bg-orange-500">
      {pokemon && <Card id={pokemon.id} name={pokemon.name}/>}
      {modal && <Modal id={pokemon.id} onClick={() => setModal(!modal)}/>}

      <ul className="w-5/12 overflow-y-auto space-y-2">
        {pokemons.map((pokemon: any) => (
          <List
            key={pokemon.id}
            pokemon={pokemon}
            onMouseEnter={() => setPokemon(pokemon)}
            onClick={() => setModal(!modal)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Pokedex;
