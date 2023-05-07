import Link from "next/link";

const NavBar = () => {

    return (
        <div className="navbar bg-base-100 text-gray-700">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#">2D</a></li>
                    <li><a href="#">3D</a></li>
                    <li><a href="#">QuickCash</a></li>
                    <li><a href="#">Roadmap</a></li>
                    <li><a href="#">Calendar</a></li>
                </ul>
                </div>
                <Link href={"/"} className="btn btn-ghost normal-case text-xl">
                    <img src="/logo192.png" className="w-24" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex px-5">
                <ul className="menu menu-horizontal px-1">
                    <li className="btn-disabled bg-transparent"><a href="#" className="hover:bg-transparent hover:text-red-600">2D</a></li>
                    <li className="btn-disabled bg-transparent"><a href="#" className="hover:bg-transparent hover:text-red-600">3D</a></li>
                    <li className="btn-disabled bg-transparent"><a href="#" className="hover:bg-transparent hover:text-red-600">QuickCash</a></li>
                    <li className="btn-disabled bg-transparent"><a href="#" className="hover:bg-transparent hover:text-red-600">Roadmap</a></li>
                    <li className="btn-disabled bg-transparent"><a href="#" className="hover:bg-transparent hover:text-red-600">Calendar</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/mint" className="btn btn-sm border-none bg-red-500 hover:bg-red-600">Mint Now</a>
            </div>
        </div>
    )
}

export default NavBar;