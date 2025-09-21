import Image from 'next/image'
import logo from '../../../public/logo.svg';

export default function NavBar() {
	return (
		<header className='flex justify-between items-center px-8 pt-5'>
			<Image
				src={logo}
				alt="Logo image"
				className="w-32 h-auto"
			/>
			<nav>
				<ul className='flex justify-center items-center  gap-8 text-gray-500'>
					<li className='hover:text-white hover:underline hover:font-bold cursor-pointer'>Features</li>
					<li className='hover:text-white hover:underline hover:font-bold cursor-pointer'>Team</li>
					<li className='hover:text-white hover:underline hover:font-bold cursor-pointer'>Sign In</li>
				</ul>
			</nav>
		</header>
	);
}
