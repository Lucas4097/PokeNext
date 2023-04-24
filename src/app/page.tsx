import Image from "next/image";
import { Inter } from "next/font/google";
import List from "@/components/List";
import Card from "@/components/Card";
import Pokedex from "@/components/Pokedex";

const inter = Inter({ subsets: ["latin"] });

async function getData() {

  

  const api = "https://pokeapi.co/api/v2/pokemon/";
  const maxPokemons = 151;

  const res = await fetch(`${api}?limit=${maxPokemons}`);

  return res.json();
}

export default async function Home() {
  const data = await getData();

  data.results.forEach((item: any, index: number) => {
    item.id = index + 1;
  });

  const pokemons = data.results;

  return (
    <>
      <Pokedex pokemons={pokemons}/>
    </>
  );
}
