import { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import styles from './QrCodeScanner.module.css'

import { SCAN_DATA } from '../../constants'

export const QrCodeScanner = () => {
	const [scanned, setScanned] = useState(null)

	const scanHandler = (result) => {
		if (!result) return;
		
		const prevData = JSON.parse(
			localStorage.getItem(SCAN_DATA) || '[]'
		);

		if (prevData.includes(result.text)) return;

		setScanned(result.text);

		localStorage.setItem(
			SCAN_DATA, 
			JSON.stringify([...prevData, result.text])
		)
	}

	return (
		<div className={styles.container}>
			<QrReader 
				constraints={{ facingMode: 'environment' }}
				scanDelay={1000}
				onResult={scanHandler}
				containerStyle={{ minWidth: '300px' }}
			/>
			<p className={styles.result}>{scanned}</p>
		</div>
	)
}