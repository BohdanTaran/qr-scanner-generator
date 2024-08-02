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
				type="text"
				placeholder="Enter"
				value={value} 
				onChange={onChangeHandler}
				className="mt-5 input input-bordered input-accent w-full max-w-xs" />
			<button 
				onClick={onCLickHandler} 
				className="btn btn-active btn-primary text-white text-xl"
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