import React from "react";
import{NavLink, useNavigate} from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="flex flex-col md:flex-row  bg-black text-white justify-around items-center py-2">
      <h1 className="text-2xl font-bold hover:cursor-pointer" onClick={()=>{navigate('/')}}>MY BLOG</h1>
      <ul className="flex md:gap-4 gap-10 font-semibold">
        <li>
        <NavLink to='/' className="hover:underline">Home</NavLink>
        </li>
        <li>
             <NavLink to='/posts' className="hover:underline">Posts</NavLink>
        
        </li>
        <li>
             <NavLink to='/about' className="hover:underline">About</NavLink>
        </li>
        <li>
         <NavLink to='/contact' className="hover:underline">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
