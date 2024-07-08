import { Route, Routes } from 'react-router-dom'
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator"
import { GenerateHistory } from './components/GenerateHistory/GenerateHistory'
import { Navigation } from "./components/Navigation/Navigation"
import { QrCodeScanner } from "./components/Scan/QrCodeScanner"
import { ScanHistory } from './components/ScanHistory/ScanHistory'

export const Layout = () => {
	return (
		<div>
			<Navigation />

			<Routes>
				<Route path='/qr-scanner-generator/generate' element={<QrCodeGenerator />} />
				<Route path='/qr-scanner-generator/scan' element={<QrCodeScanner />} />
				<Route path='/qr-scanner-generator/scanHistory' element={<ScanHistory />} />
				<Route path='/qr-scanner-generator/generateHistory' element={<GenerateHistory />} />
			</Routes>
		</div>
	)
}