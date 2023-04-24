import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white h-20 flex justify-center items-center">
      <p className="flex gap-2 items-center">
        PokeNext
        <span>
          <Image
            src={"/images/pokeball.png"}
            width={15}
            height={15}
            alt="pokebola"
          />
        </span>
        &copy; 2022
      </p>
    </footer>
  );
}
