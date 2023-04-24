import Image from "next/image";

function Card({ id, name }: any) {

  return (
    <div className="w-7/12 flex justify-center items-center">
      <div className="relative text-white">
        <Image
          src={"/images/pokedex.webp"}
          width={500}
          height={250}
          alt="teste"
        />
        <div className="absolute left-24 bottom-8">#{id}</div>

        <div className="absolute left-16 top-24">
          {id && (
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              width={124}
              height={124}
              alt="teste"
            />
          )}
        </div>

        <div className="absolute top-32 left-80">
          <strong className="text-lg capitalize">{name}</strong>
        </div>
      </div>
    </div>
  );
}

export default Card;
