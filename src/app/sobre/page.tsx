import { Github } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function sobre() {
  return (
    <div className="flex flex-col items-center gap-4 my-5 h-[73vh]">
      <h1 className="text-xl">Olá, bem vindo ao PokeNext</h1>
      <Image
        src={"/images/sobre.jpg"}
        width={500}
        height={250}
        alt="imagem de vários pokemons"
      />
      <p>
        Este é um site que replica uma pokedex, então temos informações de
        vários pokemons por meio da PokeAPI. Utilizando o Nextjs
      </p>

      <p className="flex gap-2 items-center">
        Perfil do github:{" "}
        <a
          className="border border-black rounded-full p-2 hover:bg-black hover:text-white duration-500"
          href="https://github.com/Lucas4097"
        >
          <Github />
        </a>
      </p>
    </div>
  );
}
