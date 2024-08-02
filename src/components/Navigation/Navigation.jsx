import { Link } from 'react-router-dom'

export const Navigation = () => {
	return (
		<>
		<div className="navbar bg-base-300">
  		<div className="flex-1 px-2 lg:flex-none">
    		<a className="text-lg font-bold">QR SCAN/GEN</a>
  		</div>
			<div className="flex flex-1 justify-end px-2">
				<div className="flex items-stretch">
					<div className="dropdown dropdown-end">
						<div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Menu</div>
						<ul
							tabIndex={0}
							className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow flex flex-col space-y-5">
							<li><Link className='btn btn-sm btn-accent' to='/qr-scanner-generator/generate'>Generate QR Code</Link></li>
							<li><Link className='btn btn-sm btn-accent' to='/qr-scanner-generator/scan'>Scan QR Code</Link></li>
							<li><Link className='btn btn-sm btn-accent' to='/qr-scanner-generator/generateHistory'>Generate History</Link></li>
							<li><Link className='btn btn-sm btn-accent' to='/qr-scanner-generator/scanHistory'>Scan History</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}