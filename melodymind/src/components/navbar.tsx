import Link from 'next/link';
import { LINKS } from '../constants/navpages';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        {LINKS.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <a className="text-white">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;