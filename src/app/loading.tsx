import styles from "./Style/Loading.module.scss";
import  Image  from 'next/image';
export default function loading() {
	return (
		<div className={`${styles.loading}`}>
			<Image src="spinner.svg" width={200} height={200} priority  alt="loading..." />
		</div>
	);
}
