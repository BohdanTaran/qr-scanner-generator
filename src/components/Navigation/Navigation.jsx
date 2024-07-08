import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
	return (
		<nav className={styles.container}>
			<Link className={styles.link} to='/qr-scanner-generator/generate'>Generate QR Code</Link>
			<Link className={styles.link} to='/qr-scanner-generator/scan'>Scan QR Code</Link>
			<Link className={styles.link} to='/qr-scanner-generator/generateHistory'>Generate History</Link>
			<Link className={styles.link} to='/qr-scanner-generator/scanHistory'>Scan History</Link>
		</nav>
	)
}