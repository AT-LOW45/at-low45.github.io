import React, { useEffect, useState, createContext } from "react";
import { useLocation } from "react-router-dom";

interface IUiCtx {
	isNavOpen: boolean;
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
	toggleSideNav: () => void;
}

const defaultValue: IUiCtx = {
	isNavOpen: false,
	setIsNavOpen: (): void => {},
	toggleSideNav: (): void => {},
};

const UiContext = createContext<IUiCtx>(defaultValue);

export const UiProvider = ({ children }: any) => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const location = useLocation();

	useEffect(() => {
		console.log("location changed");
	}, [location]);

	const toggleSideNav = () => {
		document.getElementById("nav-menu")?.classList.toggle("open");
		isNavOpen === false ? setIsNavOpen(true) : setIsNavOpen(false);
	};

	return (
		<UiContext.Provider value={{ isNavOpen, setIsNavOpen, toggleSideNav }}>
			{children}
		</UiContext.Provider>
	);
};

export default UiContext;
