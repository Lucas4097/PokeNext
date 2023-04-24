import Image from "next/image";
import React, { useEffect, useState } from "react";
import { XCircle } from "lucide-react";

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
    };
  };
}

function Modal({ id, onClick }: any) {
  const [pokemon2, setPokemon2]: any = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon2(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/70" onClick={onClick}>
      <div className="bg-orange-500 text-white border-4 border-black w-96 h-96 absolute left-1/2 top-1/2 -translate-x-1/2 rounded-xl overflow-hidden -translate-y-1/2">
        <div
          className="absolute top-1 right-1 scale-110 duration-150 hover:text-black cursor-pointer"
          onClick={onClick}
        >
          <XCircle />
        </div>
        <div className="flex justify-center mb-2">
          <Image
            src={
              pokemon2.sprites?.versions["generation-v"]
                ? pokemon2.sprites?.versions["generation-v"]["black-white"]
                    .animated.front_default
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            }
            width={144}
            height={144}
            alt="teste"
            className="bg-gradient-radial from-white to-70% to-transparent w-36 h-36"
          />
        </div>

        <table className="table-fixed w-full h-3/5">
          <tbody>
            <tr>
              <td className="bg-black border-b border-white text-white ps-1">
                Nome:
              </td>
              <td className="ps-1 bg-neutral-50 border-b border-black text-black capitalize">
                {pokemon2.name}
              </td>
            </tr>
            <tr>
              <td className="ps-1 bg-black border-b border-white text-white">
                Habilidade(s):
              </td>
              <td className="ps-1 bg-neutral-50 border-b border-black text-black capitalize">
                <ul>
                  {pokemon2.abilities?.map((poke: any) => (
                    <li key={poke.ability.name}>{poke.ability.name}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="ps-1 bg-black border-b border-white text-white">
                Altura:
              </td>
              <td className="ps-1 bg-neutral-50 border-b border-black text-black">
                {pokemon2.height / 10} m
              </td>
            </tr>
            <tr>
              <td className="ps-1 bg-black border-b border-white text-white">
                Peso:
              </td>
              <td className="ps-1 bg-neutral-50 border-b border-black text-black">
                {pokemon2.weight / 10} kg
              </td>
            </tr>
            <tr>
              <td className="ps-1 bg-black text-white">Tipo(s):</td>
              <td className="ps-1 bg-neutral-50 text-black">
                <ul className="flex gap-2">
                  {pokemon2.types?.map((poke: any) => (
                    <li key={poke.type.name}>
                      <Image
                        src={`/images/types/${poke.type.name}.png`}
                        width={30}
                        height={30}
                        alt={poke.type.name}
                      />
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <div className="grid grid-cols-2 text-lg">
          <div className="bg-black border-t-8 border-black space-y-4">
            <p className="border-b-2 border-white">Nome:</p>
            <p className="border-b-2 border-white">ability</p>
            <p className="border-b-2 border-white">height</p>
            <p className="border-b-2 border-white">weight</p>
            <p className="border-b-2 border-white">types</p>
          </div>
          <div className="bg-white text-black border-t-8 border-white space-y-4">
            <p className="border-b-2 border-black">{pokemon2.name}</p>
            <p className="border-b-2 border-black">
              {" "}
              {pokemon2.abilities?.map((poke: any) => (
                <span key={poke.ability.name}>{poke.ability.name}</span>
              ))}
            </p>
            <p className="border-b-2 border-black">{pokemon2.height}</p>
            <p className="border-b-2 border-black">{pokemon2.weight}</p>
            <p className="border-b-2 border-black flex gap-3">{pokemon2.types?.map((poke:any) => (
              <Image key={poke.type.name} src={`/images/types/${poke.type.name}.png`} width={30} height={30} alt={poke.type.name} />
              // <span key={poke.type.name}>{poke.type.name}</span>
            ))}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;
