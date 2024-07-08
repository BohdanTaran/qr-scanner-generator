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
				<Route path='/generate' element={<QrCodeGenerator />} />
				<Route path='/scan' element={<QrCodeScanner />} />
				<Route path='/scanHistory' element={<ScanHistory />} />
				<Route path='/generateHistory' element={<GenerateHistory />} />
			</Routes>
		</div>
	)
}