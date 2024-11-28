"use client";
import React, { useState, useEffect } from "react";
import styles from "./scss/DarkSwitch.module.scss";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkSwitch = () => {
	const { theme, setTheme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleChanger = (str:string) => {
		setTheme(str);
	};

	// Render only on client side after mounting
	if (!mounted) return null;

	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<div>
			{mounted && (currentTheme === "dark" ? (
				<MdLightMode
					className={styles.icons}
					onClick={() => handleChanger("light")}
				/>
			) : (
				<MdDarkMode
					className={styles.icons}
					onClick={() => handleChanger("dark")}
				/>
			))}
		</div>
	);
};

export default DarkSwitch;
