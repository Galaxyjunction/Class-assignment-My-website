
import Link from 'next/link';

const Navbar = () => {
  return (
    
      <nav className="bg-lime-400 p-4 flex justify-between items-center">
      <h1 className='text-2xl font-bold font-serif' >Natural Skin Care</h1>
      <ul className="flex space-x-6">
       <Link href="./">Home</Link>
        <Link href="./about">About</Link>
        <Link href="./products">Products</Link>
        <Link href="./contact">Contact</Link>
      </ul>
    </nav>
  
    
  );
};

export default Navbar;

