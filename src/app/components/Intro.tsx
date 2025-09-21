import Image from 'next/image';
import {Raleway} from 'next/font/google';
import introImage from '../../../public/illustration-intro.png';
import bgMobile from '../../../public/bg-curvy-mobile.svg';
import bgDesktop from '../../../public/bg-curvy-desktop.svg';

const raleway = Raleway({
	subsets: ['latin'],
});

export default function Intro() {
	return (
		<section className="relative bg-desktop flex flex-col items-center justify-center w-full gap-5 lg:gap-7 text-white pt-25 px-4 text-center bg-(--navy-850)">
			<Image
				src={introImage}
				alt="Intro Image"
				className="z-10 max-w-2xs sm:max-w-lg lg:max-w-2xl"
			/>
			<h1 className={`${raleway.className} font-bold text-2xl md:text-3xl lg:text-4xl z-10 max-w-lg lg:max-w-2xl`}>
				All your files in one secure location, accessible anywhere.
			</h1>
			<p className={`text-base z-10 max-w-lg`}>
				Fylo stores all your most important files in one secure location. Access
				them wherever you need, share and collaborate with friends, family, and
				co-workers.
			</p>
			<button
				className={`z-10 ${raleway.className}  bg-(--cyan-500) hover:bg-(--teal-200) px-20 py-3 rounded-full font-semibold duration-300 transition cursor-pointer`}
			>
				Get Started
			</button>
			<picture>
				
				<source
					media="(min-width: 1440px)"
					srcSet={bgDesktop}
				/>
			
				<source
					media="(min-width: 375px)"
					srcSet={bgMobile}
				/>
				<Image
					src={bgDesktop}
					alt="Background image"
					
					className={`absolute bottom-0 left-0 right-0 w-full`}
				/>
			</picture>
		</section>
	);
}
