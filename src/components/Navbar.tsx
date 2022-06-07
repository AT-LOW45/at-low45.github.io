import React, { ChangeEvent, FC, useRef, useState } from "react";
import "../sass/navbar.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import UiContext from "../context/UiContext";
import { useContext } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
	const { width } = useWindowSize();
	const { isNavOpen, toggleSideNav } = useContext(UiContext);
	const [search, setSearch] = useState<string>("");

	const searchInputRef = useRef<HTMLInputElement | null>(null);
	const searchButtonRef = useRef<HTMLButtonElement | null>(null);

	return (
		<nav className='Navbar shadow-lg border-b-2 border-gray-200 px-6'>
			<button
				className='text-xl p-2 block md:hidden'
				id='navbar-toggler'
				onClick={() => {
					toggleSideNav();
				}}
			>
				<GiHamburgerMenu />
			</button>

			<ul className='' id='nav-menu'>
				<li className='text-right block md:hidden'>
					<button className='p-3' onClick={() => toggleSideNav()}>
						<IoMdClose />
					</button>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/gallery">Gallery</Link>
				</li>
				<li>
					<Link to="/news">News</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
			</ul>

			<form
				action=''
				className='ml-auto'
				onClick={() => {
					width! < 768 && isNavOpen === true && toggleSideNav();
				}}
			>
				<input
					type='text'
					placeholder='search website'
					className='rounded-full border-2 border-blue-400'
					id='searchInput'
					value={search}
					ref={searchInputRef}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button
					type='submit'
					className=''
					id='searchButton'
					ref={searchButtonRef}
				>
					<BiSearchAlt2 className='text-2xl text-blue-400 align-middle' />
				</button>
			</form>
		</nav>
	);
};

export default Navbar;
