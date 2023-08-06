import Head from "next/head";
import Link from "next/link";
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to MelodyMind</h1>
        <p className="text-gray-700 mb-6">
          Your destination for memories, journaling, and conversations.
        </p>
        <div className="mb-6">
          <Image src="/logo.png" alt="MelodyMind Logo" width={200} height={200} />
        </div>
        <div className="flex space-x-4">
          {NAV_LINKS.map((link) => (
            <Link href={link.path} key={link.path}>
              <a className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;