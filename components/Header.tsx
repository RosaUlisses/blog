import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="content flex justify-between py-6">
      <h1 className="font-bold text-white-400 text-xl">Ulisses Rosa</h1>

      <div className="flex">
        <Link href="/">
          <a className="mr-2 hover:text-gray-300">About</a>
        </Link>

        <p className="mr-2">/</p>

        <Link href="/blog">
          <a className="hover:text-gray-300">Blog</a>
        </Link>
      </div>
    </header>
  );
};
