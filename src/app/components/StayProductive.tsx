import Image from 'next/image';
import stayProductiveImage from '../../../public/illustration-stay-productive.png';
import arrow from '../../../public/icon-arrow.svg';
import {Raleway} from 'next/font/google';

const raleway = Raleway({
	subsets: ['latin'],
});

export default function StayProductive() {
	return (
		<section className="grid lg:grid-cols-2 gap-10 lg:gap-20 py-10 items-center justify-items-center justify-center px-7 md:px-20">
			<Image
				src={stayProductiveImage}
				alt="Stay Productive Image"
				className="mx-auto w-[375px] md:w-lg lg:w-[430px] xl:w-[500px] h-auto "
			/>
			<div className="flex flex-col gap-5 text-sm sm:w-sm md:w-lg lg:w-md">
				<h1 className={`${raleway.className} text-xl font-bold md:text-4xl max-w-[300px]`}>
					Stay productive, where you are
				</h1>
				<p>
					Never let location be an issue when accessing your files. Fylo has you
					covered for all of your file storage needs.
				</p>
				<p>
					Securely share files and folders with friends, family and colleagues
					for live collaboration. No email attachment required.
				</p>
				<a
					href="#"
					className="inline-flex w-fit items-center justify-center gap-2 border-b border-(--teal-200) py-1 text-sm text-(--teal-200)"
				>
					See how Fylor works{' '}
					<span>
						<Image
							src={arrow}
							alt="Arrow Icon"
						/>
					</span>
				</a>
			</div>
		</section>
	);
}
