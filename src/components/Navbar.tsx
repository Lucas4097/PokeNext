import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex bg-zinc-800 text-white justify-between px-12 py-3">
      <div className="flex items-center gap-5">
        <Link className="hover:rotate-180 transition duration-1000" href={"/"}>
          <Image
            src={"/images/pokeball.png"}
            width={50}
            height={50}
            alt="pokebola"
          />
        </Link>

        <h2 className="text-2xl">PokeNext</h2>
      </div>
      <div className="flex items-center text-lg">
        <ul className="flex gap-3">
          <li>
            <Link
              className="p-1 hover:text-red-500 transition duration-500"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="p-1 hover:text-red-500 transition duration-500"
              href={"sobre"}
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
