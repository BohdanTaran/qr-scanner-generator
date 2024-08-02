import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import { GENERATE_DATA } from '../../constants'

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
		<div className='flex flex-col mt-5'>
			{data.length === 0 && <h1>Generate History is empty...</h1>}
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
							<button onClick={() => removeGeneratedQr(text)} className="btn btn-error text-white text-base">Remove</button>
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