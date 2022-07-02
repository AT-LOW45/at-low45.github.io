import React, { createContext, useRef, useState } from "react";

type Props = {
	children: React.ReactNode;
};
interface IUiCtx {
	isNavOpen: boolean;
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
	toggleSideNav: () => void;
	closeSideNav: () => void;
	navUlRef: React.MutableRefObject<HTMLUListElement | null>;
	overlayRef: React.MutableRefObject<HTMLDivElement | null>;
}

const defaultValue: IUiCtx = {
	isNavOpen: false,
	setIsNavOpen: (): void => {},
	toggleSideNav: (): void => {},
	closeSideNav: (): void => {},
	navUlRef: React.createRef(),
	overlayRef: React.createRef(),
};

const UiContext = createContext<IUiCtx>(defaultValue);

export const UiProvider = ({ children }: Props): JSX.Element => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const navUlRef = useRef<HTMLUListElement | null>(null);
	const overlayRef = useRef<HTMLDivElement | null>(null);

	const toggleSideNav = () => {
		navUlRef.current!.classList.toggle("open");
		isNavOpen === false ? setIsNavOpen(true) : setIsNavOpen(false);
		navUlRef.current!.classList.contains("open")
			? (overlayRef.current!.style.display = "block")
			: (overlayRef.current!.style.display = "none");
	};

	const closeSideNav = () => {
		navUlRef.current!.classList.remove("open")
		overlayRef.current!.style.display = "none"
	}

	return (
		<UiContext.Provider
			value={{
				isNavOpen,
				setIsNavOpen,
				toggleSideNav,
				closeSideNav,
				navUlRef,
				overlayRef,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};

export default UiContext;
