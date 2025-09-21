import Image from 'next/image'
import { Raleway } from 'next/font/google';
import logo from '../../../public/logo.svg';


const raleway = Raleway({
    subsets:['latin'],
    weight:['400', '700']
})

export default function NavBar() {
	return (
		<header className='flex justify-between items-center px-4 md:px-8 pt-7 absolute left-0 right-0 top-0 z-20'>
			<Image
				src={logo}
				alt="Logo image"
				className="w-20 h-auto"
			/>
			<nav>
				<ul className={`${raleway.className} flex justify-center items-center gap-5 md:gap-7 text-gray-500`}>
					<li className='hover:text-white hover:underline cursor-pointer duration-300 transition'><a href="#" className='hover:text-white'>Features</a></li>
					<li className='hover:text-white hover:underline cursor-pointer duration-300 transition'><a href="#" className='hover:text-white'>Team</a></li>
					<li className='hover:text-white hover:underline cursor-pointer duration-300 transition'><a href="#" className='hover:text-white'>Sign</a> In</li>
				</ul>
			</nav>
		</header>
	);
}
