import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
	return (
		<nav className={styles.container}>
			<Link to='/generate'>Generate QR Code</Link>
			<Link to='/scan'>Scan QR Code</Link>
			<Link to='/generateHistory'>Generate History</Link>
			<Link to='/scanHistory'>Scan History</Link>
		</nav>
	)
}