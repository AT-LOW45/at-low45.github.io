import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import UiContext from "../context/UiContext";
import { useContext } from "react";
import { ImWhatsapp } from "react-icons/im";
import useWindowSize from "../hooks/useWindowSize";
import "../index.css";

const Layout: FC = () => {
	const { isNavOpen, toggleSideNav } = useContext(UiContext);
	const { width } = useWindowSize();

	return (
		<div className='App'>
			<Navbar />
			<main
				onClick={() => {
					width! < 768 && isNavOpen === true && toggleSideNav();
				}}
			>
				<Outlet />
			</main>
			<a
				id='whatsapp-link'
				href='https://wa.me/60123721081'
				target='_blank'
				rel='noreferrer'
				className={isNavOpen ? "hidden" : "block"}
			>
				<ImWhatsapp className='border-green-500 bg-green-400 text-white rounded-full text-6xl p-2' />
			</a>
			<Footer />
		</div>
	);
};

export default Layout;
