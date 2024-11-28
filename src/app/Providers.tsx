"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./Style/Providers.module.scss";

type Props = {
	children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<ThemeProvider defaultTheme="system" attribute="class">
			<div className={styles["div-theme"]}>{children}</div>
		</ThemeProvider>
	);
};

export default Providers;