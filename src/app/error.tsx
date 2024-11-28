"use client";

import { useEffect } from "react";
import styles from "./Style/error.module.scss";

interface ErrorProps {
	error: Error;
	reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.log("Error occurred:", error.message);
	}, [error]);

	return (
		<div className={`${styles["main-error"]}`}>
			<h1>Something went wrong. Please try again later.</h1>
			<button className={`${styles.button}`} onClick={() => reset()}>
				Try Again
			</button>
		</div>
	);
}
