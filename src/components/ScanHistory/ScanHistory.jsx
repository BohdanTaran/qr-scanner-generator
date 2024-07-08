import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import { SCAN_DATA } from '../../constants'
import styles from './ScanHistory.module.css'

export const ScanHistory = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
		setData(storedData);
	}, []);

	const clearAllHistory = () => {
		localStorage.removeItem(SCAN_DATA);
		setData([]);
		window.location.reload();
	}

	const removeScannedQr = (text) => {
		const newData = data.filter(item => item !== text);
		setData(newData);
		localStorage.setItem(SCAN_DATA, JSON.stringify(newData));
	}

	return (
		<div className={styles.container}>
			{data.length === 0 && <h1>Scan History is empty...</h1>}
			{data.length >= 1 &&
				<button 
				className={styles.clearAll}
				onClick={clearAllHistory}
				>
					Clear
				</button>
			}
			{data.map((text) => (
				<div key={text} className={styles.item}>
					<div className={styles.info}>
						<span className={styles.qrValue}>{text}</span>
						<button 
							className={styles.removeItem}
							onClick={() => removeScannedQr(text)}
						>
							Remove
						</button>
					</div>
					<div>
						<QRCodeSVG value={text} size={100} />
					</div>
				</div>
			))}
		</div>
	)
}