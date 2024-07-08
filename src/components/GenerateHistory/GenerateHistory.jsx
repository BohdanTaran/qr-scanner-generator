import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import { GENERATE_DATA } from '../../constants'
import styles from './GenerateHistory.module.css'

export const GenerateHistory = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
		setData(storedData);
	}, []);

	const clearAllHistory = () => {
		localStorage.removeItem(GENERATE_DATA);
		setData([]);
		window.location.reload();
	}

	const removeGeneratedQr = (text) => {
		const newData = data.filter(item => item !== text);
		setData(newData);
		localStorage.setItem(GENERATE_DATA, JSON.stringify(newData));
	}

	return (
		<div className={styles.container}>
			{data.length === 0 && <h1>Generate History is empty...</h1>}
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
							onClick={() => removeGeneratedQr(text)}
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