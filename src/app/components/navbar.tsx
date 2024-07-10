import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-gray-700 w-full">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="#home">
            <p className="flex items-center space-x-2">
              <Image src="/img/k.png" alt="Logo" width={75} height={75} />
              <span className="text-black text-lg font-bold">Kevin</span>
            </p>
          </Link>
        </div>
        <div className="flex space-x-4 me-8">
          <Link href="#">
            <p className="text-black hover:text-gray-200 font-bold">Home</p>
          </Link>
          <Link href="#about">
            <p className="text-black hover:text-gray-200 font-bold">About</p>
          </Link>
          <Link href="#projects">
            <p className="text-black hover:text-gray-200 font-bold">Project</p>
          </Link>
          <Link href="#contact">
            <p className="text-black hover:text-gray-200 font-bold">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
