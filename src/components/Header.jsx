import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Header() {
  return (
  <header className=" bg-slate-200 shadow-md">
    <div className="font-sans flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to='/'><h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
        <span>FARMS</span>
      </h1>
      {/* <form className="bg-slate-100 p-3 rounded-lg flex items-center">
        <input type="text" 
        placeholder="Search..." 
        className="bg-transparent outline-none w-24 sm:w-64"/>
        <FaSearch className="text-slate-600"/>
      </form> */}
      </Link>
      <ul className='flex gap-3 rounded-sm justify-items-end'>
      <Link to='spost'>
      <li className='text-slate-700 hover:underline'>
              Post 
            </li>
        </Link>
      <Link to='fstock'>
      <li className='text-slate-700 hover:underline'>
            Stock
          </li>
      </Link>
      <Link to='fdpost'>
      <li className='text-slate-700 hover:underline'>
            Demand 
          </li>
      </Link>
      <Link to='fdemand'>
      <li className='text-slate-700 hover:underline'>
            Demands 
          </li>
      </Link>
      <Link to='/about'>
          <li className='text-xs hidden sm:inline text-slate-700 hover:underline'>
            About
          </li>
      </Link>
      <Link to='/Sign-in'>
          <li className='text-xs hidden sm:inline text-slate-700 hover:underline'>
            Sign In
          </li>
      </Link>
      </ul>
    </div>
  </header>)
}
