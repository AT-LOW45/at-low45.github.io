import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: FC = () => {
	return (
		<div className='App'>
			<Navbar />
			<main>
                <Outlet />
            </main>
            <Footer />
		</div>
	);
};

export default Layout;
