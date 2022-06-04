import React, { FC, useState } from "react";
import "../sass/navbar.scss";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar: FC = () => {

    const [search, setSearch] = useState("")

	return (
		<div className='Navbar shadow-lg border-b-2 border-gray-200 px-5'>
			<a href=''>Home</a>
			<a href='#'>Gallery</a>
			<a href='#'>Posts</a>
			<a href='#'>About</a>

			<form action='' className='ml-auto'>
				<input
					type='text'
					placeholder='search website'
					className='rounded-full border-2 border-blue-400'
					id='searchInput'
                    value={search}
				/>
				<button
					type='submit'
					className='rounded-full border-2 border-blue-400'
					id='searchButton'
				>
					<BiSearchAlt2 className='text-2xl text-blue-400' />
				</button>
			</form>
		</div>
	);
};

export default Navbar;
