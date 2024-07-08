import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'

import styles from './qrCode.module.css'

import { GENERATE_DATA } from '../../constants'

export const QrCodeGenerator = () => {
	const [value, setValue] = useState('');
	const [qr, setQr] = useState('');

	const onCLickHandler = () => {

		const prevData = JSON.parse(
			localStorage.getItem(GENERATE_DATA) || '[]'
		);

		localStorage.setItem(
			GENERATE_DATA, 
			JSON.stringify([...prevData, value])
		)

		setQr(value);
		setValue('');
	}

	const onChangeHandler = (event) => {
		setValue(event.target.value);
		setQr('');
	}

	return (
		<div className={styles.container}>
			<input 
				className={styles.input} 
				placeholder='Enter'
				type="text" 
				value={value} 
				onChange={onChangeHandler}
			/>
			<button 
				className={styles.button} 
				type='button' 
				onClick={onCLickHandler}
			>
				Generate QR
			</button>
			{qr !== '' && (
				<div className={styles.qrWrapper}>
					<QRCodeSVG value={qr} size={200} />
				</div>
			)}
		</div>
	)
}