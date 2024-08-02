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
				<div className='px-4 mb-4'>
				<button onClick={clearAllHistory} className="btn btn-warning text-black text-base">Remove ALL</button>
			</div>
			}
			{data.map((text) => (
				<div className='px-4'>
					<div key={text} className='flex justify-between rounded-md p-3 max-h-[200px] mb-2 bg-base-300 shadow-xl'>
						<div className='flex flex-col justify-between max-w-[60%]'>
							<a href={text} className='overflow-x-auto underline'>{text}</a>
							<button onClick={() => removeScannedQr(text)} className="btn btn-error text-white text-base">Remove</button>
						</div>
						<div>
							<QRCodeSVG value={text} size={100} />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}