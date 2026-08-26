import { Link } from "react-router";
import RoamlyIcon from "../assets/icons/icon";


export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

    <nav className="flex gap-10 justify-between items-center px-10 py-2">

      <Link to="/" className="flex justify-center items-center bg-white rounded-full px-1">
        <RoamlyIcon />
        <p className="text-emerald-800 font-bold text-xl font-sans">Roamly</p>
      </Link>

      <div className="flex justify-around items-center px-8 py-2 gap-20 text-black bg-white rounded-full">
        <Link to="/" className="flex-1/2"><span className="rounded-2xl">Home</span></Link>
        <Link to="" className="flex-1/2"><span className="rounded-2xl">Trips</span></Link>
        <Link to="" className="flex-1/2"><span className="rounded-2xl">Services</span></Link>
        </div>

      <div className="flex justify-center items-center gap-3 ">
        <Link to="Login" className="bg-emerald-700 hover:bg-emerald-800 py-2 px-6 rounded-4xl text-white">Login</Link>
        <Link to="Sign Up" className="font-bold hover:bg-gray-200 py-2 px-4 bg-white rounded-full text-black">Sign up</Link>
      </div>
    </nav>
        </header>
  );
}
