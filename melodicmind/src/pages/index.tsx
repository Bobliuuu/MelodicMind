import Head from "next/head";
import Link from "next/link";
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Logo from '../public/logo.jpg'

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to MelodyMind</h1>
        <p className="text-gray-700 mb-6">
          Your three step process to improve mental health!
          <br />
          With MelodicMind, you can use our super simple three step process to success! 
          <br />
          1. Write an entry in your journal to see how you're feeling! 
          <br />
          2. If you're feeling sad, remind yourself of some happy memories, or keepsafe one as an NFT! 
          <br />
          3. If you're still feeling down, talk about it with our AI Chatbot! 
        </p>
        <div className="mb-6">
          <Image src={Logo} alt="MelodicMind Logo" width={200} height={200} />
        </div>
        <div className="flex space-x-4">
            <Link href="/memories" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Memories
            </Link>
            <Link href="/journals" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                Journals
            </Link>
            <Link href="http://localhost:3000" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">
                Chat
            </Link>
            <a href="http://10.0.0.174:8501/Add_Memory" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
                Create Memory
            </a>
            <a href="http://http://10.0.0.174:8501/Add_Journal_Entry" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                Create Journal
            </a>
        </div>
      </main>
    </div>
  );
};

export default Home;