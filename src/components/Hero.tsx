import React, { FC, useState } from "react";
import "../sass/hero.scss";
import useWindowSize from "../hooks/useWindowSize";

interface BackgroundAttributes {
	background: string;
	backgroundSize: string;
	backgroundPosition: string;
	text: string;
	subText?: string;
	isLight?: boolean;
	textAlignment?: string
}

const Hero: FC<BackgroundAttributes> = ({
	background,
	backgroundPosition,
	backgroundSize,
	text,
	subText,
	isLight,
	// default to these values in most cases
	textAlignment = "center"
}) => {
	// const [textAlign, setTextAlign] = useState("");
	// const { width } = useWindowSize();

	// function handleTextAlign() {
	// 	width! < 1000
	// 		? setTextAlign(textAlignment.alignSm)
	// 		: setTextAlign(textAlignment.alignBg);
	// }

	// window.addEventListener("load", handleTextAlign);
	// window.addEventListener("resize", handleTextAlign);

	return (
		<header
			className={isLight ? "Hero light" : "Hero"}
			style={{
				background,
				backgroundPosition,
				backgroundSize,
			}}
		>
			<div
				className={`text text-${textAlignment}`}
			>
				{text}
			</div>
			<br />
			<div
				className={`sub-text text-${textAlignment}`}
			>
				{subText}
			</div>
		</header>
	);
};

export default Hero;
