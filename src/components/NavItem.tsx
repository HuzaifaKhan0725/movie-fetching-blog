"use client"
import React from 'react'
import  Link  from 'next/link';
import styles from "./scss/Navitem.module.scss";
import { useSearchParams } from 'next/navigation';

type Props = {
  title?: string;
  param?:string|undefined;
}
const NavItem:React.FC<Props> = ({ title = "Untitled", param}: Props) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
		<div className={`${styles.hover} ${genre === param ? styles.active : ""}`}>
			<Link href={`?genre=${param}`}>{title}</Link>
		</div>
	);
};

export default NavItem