"use client";
import Image from "next/image";

function List({ pokemon, onMouseEnter, onClick }: any) {
  return (
    <>
      <li
        className="flex justify-between items-center bg-yellow-400 rounded-full p-1 cursor-pointer hover:bg-gradient-to-r from-red-600 to-70% to-black hover:text-white group"
        onMouseEnter={onMouseEnter}
        onClick={onClick}
      >
        <div className="ms-2 flex items-center text-base gap-1">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            width={50}
            height={50}
            alt={pokemon.name}
          />
          <span>#{pokemon.id}</span>
          <span className="capitalize">{pokemon.name}</span>
        </div>

        <div className="hidden group-hover:block duration-500 me-2">
        <Image
          src={"/images/pokeball.png"}
          width={30}
          height={30}
          alt={"pokeball"}
          className="duration-500"
          />
        </div>
      </li>
    </>
  );
}

export default List;
